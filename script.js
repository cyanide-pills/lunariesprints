
let cartItem =[];
let allUser = [];
let loggedUser = [];

const items = [

  {
    title: "Woman with a parasol",
    image: "images/paintings/woman_with_a_parasol.jpg",
    price: 20000,
    artist: "Claude Monet",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1875 
  },
    {
    title: "The tomb of Bocklin",
    image: "images/paintings/ferdinand_keller_thetombofbocklin.jpg",
    price: 20000,
    artist: "Ferdinand Keller",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1902 
  },
  {
    title: "The Kiss",
    image: "images/paintings/klimt.jpg",
    price: 20000,
    artist: "Gustav Klimt",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1908 
  },
    {
    title: "Jacob wrestling with the angel",
    image: "images/paintings/dore2.jpg",
    price: 20000,
    artist: "Gustave Doré",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1855 
  },
  {
    title: "The lantern bearers",
    image: "images/paintings/maxfieldparrish1.jpg",
    price: 20000,
    artist: "Maxfield Parrish",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1908

  },
  {
    title: "The cactus lover",
    image: "images/paintings/spitzweg1.jpg",
    price: 20000,
    artist: "Carl Spitzweg",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1855 
  }
];
const blogs = [
  {
    title: "Datos curiosos de pintores famosos",
    info: "Descubre datos interesantes sobre pintores famosos y sus obras maestras.",
    content: "Van Gogh: vendió solo un cuadro en vida, pintó más de 900 obras y a veces comía sus pinturas.  \n\nPicasso: nombre de 23 palabras, dibujaba antes de hablar, más de 50,000 obras.\n\n Da Vinci: escribía al revés, diseñó inventos adelantados a su tiempo, vegetariano. \n\nMonet: obsesionado con la luz, pintaba el mismo paisaje a distintas horas, tenía cataratas.\n\n Dalí: bigote extravagante, conferencias en traje de buzo, paseaba un oso hormiguero.\n\n Frida Kahlo: sobrevivió a accidente grave, plasmó su dolor en arte colorido y surrealista, cejas y bigote parte de su identidad.",
    image: "images/paintings/gogh1.jpg",
    date:"10/09/2025"
  },
  {
    title: "Estilos de arte a través de la historia",
    info: "Descubre estilos de arte a través del tiempo.",
    content: "Impresionismo: captura luz y color cambiantes con pinceladas rápidas. \n\nSurrealismo: mezcla realidad y sueños, lo irracional y lo subconsciente.\n\n Cubismo: descompone objetos en formas geométricas y múltiples perspectivas. \n\nRealismo: representa la vida cotidiana con detalle y exactitud.\n\n Expresionismo: refleja emociones intensas y subjetivas a través del color y la forma. \n\nBarroco: dramático, detallado y lleno de movimiento y contraste. \n\nRenacimiento: equilibrio, proporción y perspectiva, centrado en la figura humana y la naturaleza.",
    image: "images/paintings/spitzweg1.jpg",
    date:"13/09/2025"

}];


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
      <div class="print-product" onclick="viewProduct(${index})">
      <img src="${item.image}" class="print-image">
      <div class="print-info">
        <p class="print-name">${item.title}</p>

        <div class="price-row">
          <p class="price">${item.price} CLP</p>
          <button onclick="addToCart(event)" class="add-button">
            <img src="images/icons/add.png">
          </button>
        </div>
      </div>
    </div>
`;
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
  document.getElementById("product-year").textContent = product.year;
  document.getElementById("product-artist").textContent = "Artista: " + product.artist;
  document.getElementById("product-description").textContent = product.descripcion;
  document.getElementById("product-dimensions").textContent = "Dimensiones: " + product.dimensiones;
  document.getElementById("product-price").textContent = product.price ;
  }

}



function showBlogs() {
  const blogsHTML = blogs.map((blog, index) => `
    <button onclick="viewBlog(${index})" class="blog-item" data-index="${index}">
      <article class="blog-post">
        <img class="blog-image" src="${blog.image}">
        <div class="blog-text">
          <h2 class="title">${blog.title}</h2>
          <p>${blog.info}</p>
        </div>
      </article>
    </button>
  `).join('');

  document.querySelector('.blogs-display').innerHTML = blogsHTML;
}

function viewBlog(index) {
  localStorage.setItem("selectedBlog", JSON.stringify(blogs[index]));
  window.location.href = "entry.html";
}

function entryFill() {
  const blog = JSON.parse(localStorage.getItem("selectedBlog"));
  if (blog) {
    document.getElementById("blog-image").src = blog.image;
    document.getElementById("blog-title").textContent = blog.title;
    document.getElementById("blog-date").textContent = blog.date;
    document.getElementById("blog-content").innerHTML = blog.content.replace(/\n/g, "<br>");
  }
}

function addToCart() {
  event.stopPropagation();

  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (!product) return;

  let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

  cartItem.push(product);

  localStorage.setItem("cartItem", JSON.stringify(cartItem));

  alert("Producto agregado al carrito!");
}

function displayCart() {
  const cartDisplay = document.getElementById('cart-display');
  const cartTotal = document.getElementById('cart-total');

  if (!cartDisplay || !cartTotal) return; 

  let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

  let cartHTML = '';
  let cartAmount = 0;

  cartItem.forEach(item => {
    cartHTML += `<article class="cart-item">
                    <div class="cart-image"> 
                      <img src= "${item.image}"> </img>
                    </div>
                    <div class="cart-text">
                      <p id="precio">${item.title} </p>
                      <p>${item.price} CLP</p>
                    </div>
                 </article>`;
    cartAmount += parseInt(item.price);
  });

  cartDisplay.innerHTML = cartHTML;
  cartTotal.innerText = `Total: ${cartAmount} CLP`;
}



function saveSignInINFO() {
  let userEmail = document.getElementById("email").value || "";
  let userPasswd = document.getElementById("passwd").value || "";
  let userName = document.getElementById("name").value || "";
  let userNumber = document.getElementById("number").value || "";
  let userAddress = document.getElementById("address").value || "";

  let allUser = JSON.parse(localStorage.getItem("allUser")) || [];

  allUser.push({
    email: userEmail,
    passwd: userPasswd,
    name: userName,
    number: userNumber,
    address: userAddress
  });

  localStorage.setItem("allUser", JSON.stringify(allUser));
  console.log(allUser);

}

function showLogIn() {
  const form = document.getElementById("form"); 
  const emailInput = document.getElementById("email");
  const passwdInput = document.getElementById("passwd");

  if (emailInput) emailInput.addEventListener("input", () => validateEmail(emailInput));
  if (passwdInput) passwdInput.addEventListener("input", () => validateLength(passwdInput, 4, 10));

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allUser = JSON.parse(localStorage.getItem("allUser")) || [];

    const email = emailInput.value.trim();
    const passwd = passwdInput.value.trim();

    const user = allUser.find(u => u.email === email && u.passwd === passwd);

    if (!user) {
      alert("Datos ingresados son incorrectos o la cuenta no existe.");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user)); 
    alert("Ha iniciado sesión!");
  });
}



function checkoutValidation() {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || null;
  const cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

  if (!loggedUser) {
    alert("Debe iniciar sesión para continuar con la compra.");
    return;
  }

  if (cartItem.length === 0) {
    alert("Su carrito está vacío.");
    return;
  }

  const user = loggedUser;
  const userInfoDiv = document.getElementById('user-info-modal');
  const cartSummary = document.getElementById('cart-summary');

  userInfoDiv.innerHTML = `
    <p><strong>Nombre:</strong> ${user.name || "No disponible"}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Teléfono:</strong> ${user.number || "No disponible"}</p>
    <p><strong>Dirección:</strong> ${user.address || "No disponible"}</p>
  `;

  let totalAmount = 0;
  cartItem.forEach(item => {
    totalAmount += parseInt(item.price);
  });

  cartSummary.textContent = `Total a pagar: ${totalAmount} CLP`;

  const modal = new bootstrap.Modal(document.getElementById('purchaseModal'));
  modal.show();

  document.getElementById('confirm-purchase').onclick = () => {
    alert("Compra realizada con éxito!");
    localStorage.removeItem("cartItem");
    displayCart();
    modal.hide();
  };
}




document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("item-list")) showPrints();
  if (document.getElementById("sign-in")) showSignIn();
  if (document.getElementById("product-details")) productFill();
  if (document.querySelector(".blogs-display")) showBlogs();
  if (document.getElementById("blog-details")) entryFill();
  if (document.getElementById("cart-display")) displayCart();
  if (document.getElementById("log-in")) showLogIn();


});