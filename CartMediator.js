class CartMediator {
  constructor(cartButton) {
    this.cartCount = 0;
    this.cartButton = cartButton;

    // Listen for 'increment-cart' events from CartShop
    document.addEventListener("increment-cart", this.incrementCart.bind(this));
  }

  incrementCart() {
    // Logic to increment the cart count
    this.cartCount++;

    // Notify CartButton to update the display
    this.updateCartButton();
  }

  updateCartButton() {
    // Dispatch a 'cart-updated' event to update the CartButton display
    const event = new CustomEvent("cart-updated", {
      detail: { cartCount: this.cartCount },
      bubbles: true,
      composed: true,
    });
    window.dispatchEvent(event);
  }
}
