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
      <link rel="stylesheet" href="cart-button.css"> 
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

    // Listen for 'cart-updated' event to update the count display
    window.addEventListener(
      "cart-updated",
      this.updateCounterDisplay.bind(this)
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      "cart-updated",
      this.updateCounterDisplay.bind(this)
    );
  }

  updateCounterDisplay(event) {
    // Update the cart count based on the event
    this.cartCount = event.detail.cartCount;
    this.cartCounter.style.display = this.cartCount > 0 ? "flex" : "none";
    this.cartCounter.textContent = this.cartCount;
  }
}

customElements.define("cart-button", CartButton);
