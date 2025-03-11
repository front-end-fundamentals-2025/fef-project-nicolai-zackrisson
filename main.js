export const renderCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const count = document.querySelector(".cart-count");

  if (cart) {
    const value = cart.reduce((pre, curr) => pre + curr.count, 0);
    count.textContent = `(${value})`;
  }
};

renderCartCount();
