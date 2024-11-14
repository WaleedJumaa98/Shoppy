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
      <style>
        .increment-button {
          font-size: 24px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 10px;
          outline: none;
        }

        .increment-button:hover {
          transform: scale(1.1);
          background-color: rgba(0, 0, 0, 0.1);
        }
      </style>
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
    // Emit a custom 'increment-cart' event for the mediator to listen to
    const event = new CustomEvent("increment-cart", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define("cart-shop", CartShop);
