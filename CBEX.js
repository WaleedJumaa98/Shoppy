class CartButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.cartCount = 0;
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
          padding: 0;
          outline: none;
        }

         .cart-icon:hover {
        transform: scale(1.1); /* Slightly enlarge on hover */
        background-color: rgba(0, 0, 0, 0.1); /* Add a light background on hover */
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
    this.cartIcon = this.shadowRoot.querySelector(".cart-icon");
    this.cartCounter = this.shadowRoot.querySelector(".cart-counter");

    // Listen for custom 'increment-cart' events from other components
    window.addEventListener("increment-cart", this.incrementCart.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("increment-cart", this.incrementCart.bind(this));
  }

  incrementCart() {
    this.cartCount++;
    this.updateCounterDisplay();
  }

  updateCounterDisplay() {
    this.cartCounter.style.display = this.cartCount > 0 ? "flex" : "none";
    this.cartCounter.textContent = this.cartCount;
  }
}

customElements.define("cart-button", CartButton);
