export const bounceAnimation = (element) => {
  element.classList.remove("bounce");
  setTimeout(() => {
    console.log(1);
    element.classList.add("bounce");
  }, 10);
};

export const renderCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const count = document.querySelector(".cart-count");

  if (cart) {
    console.log(cart);
    const value = cart.reduce((pre, curr) => pre + curr.count, 0);
    console.log(value);
    count.textContent = `${value}`;
  }
};
