import { products } from "./data.js";
import { bounceAnimation, renderCartCount } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

const product = products.find((product) => productId == product.id);

console.log(product);

document.querySelector(".details-image").textContent = product.image;
document.querySelector(".details-title").textContent = product.name;
document.querySelector(".price").textContent = product.price + "kr";
document.querySelector(".description").textContent = product.description;
const button = document.querySelector(".add-button");

const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const initialRender = () => {
  const cart = getCart();
  const item = cart.find((item) => item.id === product.id);
  button.textContent = item ? `Add To Cart (${item.count})` : "Add To Cart";
};

initialRender();

button.addEventListener("click", () => {
  //[{id: number, count:number }]
  const cart = getCart();
  const item = cart.find((item) => item.id === product.id);

  if (item) {
    item.count += 1;
    button.textContent = `Add To Cart (${item.count})`;
  } else {
    cart.push({ id: product.id, count: 1 });
    button.textContent = `Add To Cart (1)`;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  bounceAnimation(document.querySelector(".cart-count"));
  renderCartCount();
});
