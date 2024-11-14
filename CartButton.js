class CartButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = this.getTemplate();
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .cart-container {
          position: relative;
          display: inline-block;
        }

        .cart-icon {
          font-size: 24px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 10px;
          outline: none;
        }

        .cart-icon:hover {
          transform: scale(1.1);
          background-color: rgba(0, 0, 0, 0.1);
        }

        .cart-counter {
          position: absolute;
          top: -10px;
          right: -10px;
          background-color: red;
          color: white;
          font-size: 14px;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: none;
          align-items: center;
          justify-content: center;
        }
      </style>

      <div class="cart-container">
        <span class="cart-counter">0</span>
        <button class="cart-icon">🛒</button>
      </div>
    `;
    return template;
  }

  connectedCallback() {
    this.cartCounter = this.shadowRoot.querySelector(".cart-counter");
  }

  updateCounterDisplay(count) {
    this.cartCounter.style.display = count > 0 ? "flex" : "none";
    this.cartCounter.textContent = count;
  }
}

customElements.define("cart-button", CartButton);
