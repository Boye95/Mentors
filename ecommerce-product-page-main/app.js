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
  if (text.textContent > 0 && text.textContent < 6) {
    p.remove();
    // the client genrated cart items
    let itemName = document.querySelector('h1');
    let cardDetails = document.querySelector(".cart-details");
    let tag = document.createElement("div");
    tag.classList.add("item-cart");
    tag.innerHTML = `
      <img 
        src="images/image-product-2-thumbnail.jpg" 
        alt="small-cart-img" 
        class="small-cart-img"
      >
      <span class="item-name">
        ${itemName}
      </span>
      <div id="qty-div">
        <label for="qty-no">QTY</label>
        <select name="qty-no" id="qty-no">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      `;
    cardDetails.appendChild(tag);

    // increase quantity of the client genrated cart items
    let qty = document.querySelector("#qty-no");
    let option = document.querySelectorAll("option");
    qty.value = text.textContent;
    option.innerHTML = qty.value;
    
    
    // for (let i = 0; i < itemName.length; i++) {
      
      if (itemName.innerText === itemName) {
        alert("Item already added to cart");
        
      //}
    }

    
    // qty.value++;
    // button.removeEventListener("click", run);

    // let text = document.createTextNode("hello");
    // let img = document.createElement("img");
    // let btn = document.createElement("button");
    // let btnTxt = document.createTextNode("Checkout");
    // img.src = "images/image-product-2-thumbnail.jpg";
    // tag.append(img);
    // tag.appendChild(text);
    // btn.appendChild(btnTxt);
    // tag.append(btn);
    // cardDetails.appendChild(tag);
  }
}
