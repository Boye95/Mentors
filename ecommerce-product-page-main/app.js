let text = document.querySelector(".txt");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
minus.addEventListener("click", subtract);
plus.addEventListener("click", add);

function subtract() {
  if (text.textContent > 0) {
    text.textContent--;
  }
}
function add() {
  text.textContent++;
}
let cardDetails = document.querySelector(".cart-details");
let icon = document.querySelector(".cart-icon");
let avatar = document.querySelector(".img-avatar");
icon.addEventListener("click", show);
avatar.addEventListener("click", outline);
avatar.addEventListener("click", show);

function show() {
  cardDetails.classList.toggle("show");
}
function outline() {
  avatar.classList.toggle("circle");
}

let button = document.querySelector(".btn");
let p = document.querySelector(".p");
button.addEventListener("click", run); //{ once: true }
function run() {
  if (text.textContent > 0) {
    p.remove();
    let tag = document.createElement("div");
    let text = document.createTextNode("hello");
    let img = document.createElement("img");
    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Checkout");
    img.src = "images/image-product-2-thumbnail.jpg";
    tag.append(img);
    tag.appendChild(text);
    btn.appendChild(btnTxt);
    tag.append(btn);
    cardDetails.appendChild(tag);
  }
}
