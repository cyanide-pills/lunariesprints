
let cartItem =[];
let allUser = [];
let loggedUser = [];

const items = [

  {
    title: "Jacob wrestling with the angel",
    image: "images/paintings/dore2.jpg",
    price: 20000,
    artist: "Gustave Doré",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    title: "The lantern bearers",
    image: "images/paintings/maxfieldparrish1.jpg",
    price: 20000,
    artist: "Maxfield Parrish",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    title: "The cactus lover",
    image: "images/paintings/spitzweg1.jpg",
    price: 20000,
    artist: "Carl Spitzweg",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  }
];


function validateLength(input, minLength, maxLength) {
  const length = input.value.trim().length;
  const valid = length >= minLength && length <= maxLength;

  input.classList.toggle("is-valid", valid);
  input.classList.toggle("is-invalid", !valid);

  return valid;
}

function validateEmail(input, minLength = 1, maxLength = 100) {
  const value = input.value.trim();
  const length = value.length;
  const emailAdresses = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  const errorDiv = input.nextElementSibling;
  let valid = true;

  if (length < minLength) {
    valid = false;
    if (errorDiv) errorDiv.textContent = 'Ingrese un correo electrónico.';
  } else if (length > maxLength) {
    valid = false;
    if (errorDiv) errorDiv.textContent = 'El correo no debe superar los 100 caracteres.';
  } else if (!emailAdresses.some(word => value.includes(word))) {
    valid = false;
    if (errorDiv) errorDiv.textContent = 'Debe incluir: @duoc.cl, @profesor.duoc.cl o @gmail.com.';
  }

  input.classList.toggle("is-valid", valid);
  input.classList.toggle("is-invalid", !valid);

  return valid;
}

function showSignIn() {
  const form = document.getElementById("form");
  if (!form) return; 

  const nameInput = document.getElementById("name");
  const addressInput = document.getElementById("address");
  const emailInput = document.getElementById("email");
  const passwdInput = document.getElementById("passwd");
  const numberInput = document.getElementById("number");

  if (nameInput) nameInput.addEventListener("input", () => validateLength(nameInput, 5, 100));
  if (addressInput) addressInput.addEventListener("input", () => validateLength(addressInput, 10, 100));
  if (emailInput) emailInput.addEventListener("input", () => validateEmail(emailInput));
  if (passwdInput) passwdInput.addEventListener("input", () => validateLength(passwdInput, 4, 10));
  if (numberInput) numberInput.addEventListener("input", () => validateLength(numberInput, 1, 20));

  form.addEventListener("submit", function (e) {
    let valid = true;

    if (!nameInput.value.trim()) valid = false;
    if (!addressInput.value.trim()) valid = false;
    if (!emailInput.value.trim()) valid = false;
    if (!passwdInput.value.trim()) valid = false;
    if (!numberInput.value.trim()) valid = false;

    if (nameInput && !validateLength(nameInput, 5, 100)) valid = false;
    if (addressInput && !validateLength(addressInput, 10, 100)) valid = false;
    if (emailInput && !validateEmail(emailInput)) valid = false;
    if (passwdInput && !validateLength(passwdInput, 4, 10)) valid = false;
    if (numberInput && !validateLength(numberInput, 4, 10)) valid = false;

    if (!valid) {
      e.preventDefault();
    } else {
      e.preventDefault();
      saveSignInINFO();
      alert("Cuenta creada con éxito!");
    }
  });
}

function showPrints() {
  const itemList = document.getElementById('item-list');
  if (!itemList) return; 

  let itemsHTML = '';

  items.forEach((item, index) => {
    itemsHTML += `
      <button onclick="viewProduct(${index})" class="print-product">
            <img src="${item.image}" id="print-image">
            <div class="print-info">
                <p class="print-name">${item.title}</p>
                <p>${item.price} CLP</p>
            </div>
      </button>`;
  });

  document.getElementById('item-list').innerHTML = itemsHTML;


  const buttonRight = document.getElementById('scroll-right');
  const buttonLeft = document.getElementById('scroll-left');

  if (buttonRight) {
    buttonRight.onclick = () => {
      document.getElementById('item-list').scrollLeft += 250;
    };
  }

  if (buttonLeft) {
    buttonLeft.onclick = () => {
      document.getElementById('item-list').scrollLeft -= 250;
    };
  }
}

function viewProduct(index) {
  localStorage.setItem("selectedProduct", JSON.stringify(items[index]));
  window.location.href = "product.html";
}

function productFill(){

  const product = JSON.parse(localStorage.getItem("selectedProduct"));    if (product) {
  const prodDet = document.getElementById('product-details');
  if (!prodDet) return; 

  document.getElementById("product-image").src = product.image;
  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-artist").textContent = "Artista: " + product.artist;
  document.getElementById("product-description").textContent = product.descripcion;
  document.getElementById("product-dimensions").textContent = "Dimensiones: " + product.dimensiones;
  document.getElementById("product-price").textContent = product.price + " CLP";
  } else {
  document.body.innerHTML = "<p>Producto no encontrado.</p>";
  }

}

function addToCart() {
  const addPrice= document.getElementById('price').textContent
  const printName = document.querySelector('.product-details h2').textContent
  cartItem.push({'product-title':printName, 'product-price':addPrice})
  console.log(cartItem)
}


document.addEventListener("DOMContentLoaded", () => {
  showPrints();
  showSignIn();
  productFill();

});