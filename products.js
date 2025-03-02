import { products } from "./data.js";

// customElements.define(
//   "product-card",
//   class extends HTMLElement {
//     constructor() {
//       super();

//       let template = document.getElementById("product-card");

//       let content = template.content;

//       const shadowRoot = this.attachShadow({ mode: "open" });
//       shadowRoot.appendChild(content.cloneNode(true));
//     }
//   }
// );

// products.forEach((product) => {
//   const productCard = document.createElement("product-card");
//   productCard.setAttribute("id", product.id);

//   const name = document.createElement("span");
//   name.setAttribute("slot", "name");
//   name.textContent = product.name;

//   const price = document.createElement("span");
//   price.setAttribute("slot", "price");
//   price.textContent = product.price + "kr";

//   productCard.appendChild(name);
//   productCard.appendChild(price);

//   productContainer.appendChild(productCard);
// });

const productContainer = document.querySelector(".product-container");

productContainer.innerHTML = products
  .map((product) => {
    return `
      <style>
        .product-card {
          display: flex;
          flex-direction: column;
          border: 1px solid black;
          gap: 1rem;
          padding: 1rem;
          width: 100px;
        }
        .image {
          height: 5rem;
        }
        .name {
          font-size: 24px;
        }
      </style>
      <div id= ${product.id} class="product-card">
        <div class="image"></div>
        <span class="name">${product.name}</span>
        <span class="price">${product.price}</span>
      </div>
  `;
  })
  .join("");

productContainer.addEventListener("click", (e) => {
  if (e.target.className === "product-card") {
    window.location.assign(`details.html?id=${e.target.id}`);
  }
  if (e.target.parentElement.className === "product-card") {
    window.location.assign(`details.html?id=${e.target.parentElement.id}`);
  }
});
