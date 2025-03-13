export const bounceAnimation = (element) => {
  element.classList.remove("bounce");
  setTimeout(() => {
    element.classList.add("bounce");
  }, 10);
};

export const renderCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const count = document.querySelector(".cart-count");

  if (cart) {
    const value = cart.reduce(
      (totalCount, currentItem) => totalCount + currentItem.count,
      0
    );
    count.textContent = `${value}`;
  }
};
