import { products } from "./data.js";

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

  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = getItemId(e.target);
      addItem(id);
    });
  });
  document.querySelectorAll(".remove-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = getItemId(e.target);
      removeItem(id);
    });
  });
};

const getItemId = (element) => {
  //   console.log(element);
  return parseInt(element.closest(".cart-item").id, 10);
};

const addItem = (id) => {
  const item = cart.find((item) => item.id === id);
  item.count += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};
const removeItem = (id) => {
  console.log(1);
  const item = cart.find((item) => item.id === id);
  if (item.count <= 1) {
    cart.splice(cart.indexOf(item), 1);
  } else {
    item.count -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

renderCart();
