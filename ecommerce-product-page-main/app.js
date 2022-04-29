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

let button = document.querySelectorAll(".btn");
let p = document.querySelector(".p");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (text.textContent > 0) {
      p.remove();
      // the client generated cart items
      let itemName = document.querySelector(".h1").innerText;
      let cardDetails = document.querySelector(".cart-details");
      let tag = document.createElement("div");
      tag.classList.add("item-cart");

      // referenced the each item that is added to the cart
      let spanName = cardDetails.querySelectorAll(".item-name");

      // then ran a loop through all the items with the class .item-name
      for (let i = 0; i < spanName.length; i++) {
        // I checked if an item with similar has been added to the cart
        if (spanName[i].innerText === itemName) {
          // you can change/remove the alert function if prefer another way of displaying the warning
          alert('item already to cart');
          // the return statement stops the code below from running if the above condition is true
          return;
        }
      }
      
      
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
      

      
      // increase the value of the quantity of each client generated cart items
      let qty = document.querySelector("#qty-no");
      let option = document.querySelectorAll("option");
      qty.value = text.textContent;
      option.innerHTML = qty.value;
    }
  });
});

// button.addEventListener("click", run); //{ once: true }
// function run() {

//     // qty.value++;
//     // button.removeEventListener("click", run);

//     // let text = document.createTextNode("hello");
//     // let img = document.createElement("img");
//     // let btn = document.createElement("button");
//     // let btnTxt = document.createTextNode("Checkout");
//     // img.src = "images/image-product-2-thumbnail.jpg";
//     // tag.append(img);
//     // tag.appendChild(text);
//     // btn.appendChild(btnTxt);
//     // tag.append(btn);
//     // cardDetails.appendChild(tag);
//   }
//
