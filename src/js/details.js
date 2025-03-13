import { products } from "../data/data.js";
import { bounceAnimation, renderCartCount } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);

const itemId = urlParams.get("id");

const product = products.find((product) => itemId == product.id);

const addButton = document.querySelector(".add-button");

const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const initialRender = () => {
  const cart = getCart();
  const item = cart.find((item) => item.id === product.id);
  addButton.textContent = item ? `Add To Cart (${item.count})` : "Add To Cart";

  document.querySelector(".details-image").textContent = product.image;
  document.querySelector(".details-title").textContent = product.name;
  document.querySelector(".price").textContent = product.price + "kr";
  document.querySelector(".description").textContent = product.description;
};

addButton.addEventListener("click", () => {
  // [{id: number, count:number }]
  const cart = getCart();
  const item = cart.find((item) => item.id === product.id);

  if (item) {
    item.count += 1;
    addButton.textContent = `Add To Cart (${item.count})`;
  } else {
    cart.push({ id: product.id, count: 1 });
    addButton.textContent = `Add To Cart (1)`;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  bounceAnimation(document.querySelector(".cart-count"));
  renderCartCount();
});

initialRender();
