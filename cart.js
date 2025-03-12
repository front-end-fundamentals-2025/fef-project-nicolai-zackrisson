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
    <div class="cart-item" id="${item.id}">
        
        <p class="item-name">${product.name}</p>
        <p class="item-price">${product.price}kr</p>
        <p class="item-count">count: ${item.count}</p>
        <button class="add-button">add</button>
        <button class="remove-button">remove</button>
    </div>
    `;
          })
          .join("");
};

cartItems.addEventListener("click", (e) => {
  const id = getItemId(e.target);
  handleItem(id, e.target.className.replace("-button", ""));
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
