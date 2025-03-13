import { products } from "../data/data.js";

const productContainer = document.querySelector(".product-container");

productContainer.innerHTML = products
  .map((product) => {
    return `
      <style>
        .product-card {
          display: flex;
          flex-direction: column;
          border: 1px solid rgb(70, 70, 70);
          border-radius: 10px;
          gap: 1rem;
          padding: 1rem;
          width: 200px;
          height: 300px;
          flex-grow: 0;
          cursor: pointer;
          transition: all 0.1s ease-out
        }
        .product-card:hover {
          background-color:rgb(245, 250, 250);
          scale: 1.03;
        }

        .product-card:active {
          background-color: rgb(233, 244, 244);
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
});
