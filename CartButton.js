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
      <link rel="stylesheet" href="cart-button.css"> <!-- Link to external CSS -->
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
