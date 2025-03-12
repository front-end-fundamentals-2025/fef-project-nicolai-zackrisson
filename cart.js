import { products } from "./data.js";
import { renderCartCount } from "./main.js";

const cartItems = document.querySelector(".cart-items");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const renderCart = () => {
  cartItems.innerHTML =
    cart.length < 1
      ? `<p>cart empty</p>`
      : cart
          .map((item) => {
            const product = products.find((product) => item.id == product.id);

            return `
    <style>
      .cart-item {
        border: solid 1px black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 0.5rem;
        padding: 0.5rem;
      }
      .item-image {
        font-size: 48px;
        cursor: pointer;
        width: fit-content;
      }
      .item-name {
        font-size: 24px;
        cursor: pointer;
        width: fit-content;
      }

      .cart-item .buttons{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
      }
      .cart-item .button:hover{
        opacity: 0.8;
      }
      .cart-item .button:active{
        opacity: 0.6;
      }
      .cart-item .button{
        width: 28px;
        text-align: center;
        color: white;
        font-size: 24px;
        border-radius: 5px;
        cursor: pointer;
      }

      .cart-item #add {
        background-color: #009eff;
      }
      .cart-item #remove {
        background-color:rgb(255, 39, 39);
      }
          
    </style>
    <div class="cart-item" id="${item.id}">
        <span class="item-image">${product.image}</span>
        <p class="item-name">${product.name}</p>
        <p class="item-price">${product.price}kr</p>
        <div class="buttons"> 
          <div id="add" class="button">+</div>
          <div id="remove" class="button">-</div>
          <p class="item-count">(${item.count})</p>
        </div>
    </div>
    `;
          })
          .join("");
};

cartItems.addEventListener("click", (e) => {
  const id = getItemId(e.target);

  if (e.target.id === "add" || e.target.id === "remove") {
    handleItem(id, e.target.id);
  }

  if (
    e.target.className === "item-name" ||
    e.target.className === "item-image"
  ) {
    window.location.assign(`details.html?id=${id}`);
  }
});

const getItemId = (element) => {
  return parseInt(element.closest(".cart-item").id, 10);
};

const handleItem = (id, action) => {
  const item = cart.find((item) => item.id === id);
  if (action === "add") {
    item.count += 1;
  } else if (item.count <= 1) {
    cart.splice(cart.indexOf(item), 1);
  } else {
    item.count -= 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  renderCartCount();
};

renderCart();
