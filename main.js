import { products } from "./data";

customElements.define(
  "base-shell",
  class extends HTMLElement {
    constructor() {
      super();
      //   let content = `

      //             <p>TEST</p>

      //       `;

      let template = document.getElementById("test");

      let content = template.content;

      console.log(template);
      console.log(content);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(content.cloneNode(true));
    }
  }
);
