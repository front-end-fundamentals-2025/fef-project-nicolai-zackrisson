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
          border-radius: 10px;
          gap: 1rem;
          padding: 1rem;
          width: 200px;
          height: 300px;
          flex-grow: 0;
          cursor: pointer;

        }
        .product-card:hover {
          background-color: #ededed
        }

        .product-card:active {
          background-color: #d4d4d4
        }


        .image {
          height: 150px;
          display: flex;
          align-items: center;
          font-size: 96px;
        }
        .name {
          font-size: 24px;
        }
        .price {
          font-size: 18px;
        }
        
        @media (min-width: 576px) {
            .product-card{
            width: 150px;
            flex-grow: 1;

          }
        }
        @media (min-width: 768px) {
          .product-card{
            width: 200px;
          }
        }
        @media (min-width: 992px) {
          .product-card{
            width: 200px;
          }
        }
      </style>
      <div id= ${product.id} class="product-card">
        <div class="image">
          <span>${product.image}</span>
        </div>
        <span class="name">${product.name}</span>
        <span class="price">${product.price} kr</span>
      </div>
  `;
  })
  .join("");

productContainer.addEventListener("click", (e) => {
  const id = e.target.closest(".product-card").id;

  window.location.assign(`details.html?id=${id}`);

  // if (e.target.className === "product-card") {
  //   window.location.assign(`details.html?id=${e.target.id}`);
  // }
  // if (e.target.parentElement.className === "product-card") {
  //   window.location.assign(`details.html?id=${e.target.parentElement.id}`);
  // }
});
