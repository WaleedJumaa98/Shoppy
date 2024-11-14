class CartShop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = this.getTemplate();
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="cart-shop.css"> 
      <button class="increment-button">🛒</button>
    `;
    return template;
  }

  connectedCallback() {
    this.incrementButton = this.shadowRoot.querySelector(".increment-button");
    this.incrementButton.addEventListener("click", this.handleClick.bind(this));
  }

  disconnectedCallback() {
    this.incrementButton.removeEventListener(
      "click",
      this.handleClick.bind(this)
    );
  }

  handleClick() {
    // Dispatch a custom 'increment-cart' event for the mediator to listen to
    const event = new CustomEvent("increment-cart", {
      bubbles: true,
      composed: true,
    });
    document.dispatchEvent(event);
  }
}

customElements.define("cart-shop", CartShop);
