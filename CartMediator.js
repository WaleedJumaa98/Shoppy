class CartMediator {
  constructor() {
    this.cartCount = 0;
  }

  // Add listeners for all CartShop instances
  addListeners(cartButton) {
    this.cartButton = cartButton;

    // Listen for 'increment-cart' events from any CartShop instance
    document.addEventListener("increment-cart", this.incrementCart.bind(this));
  }

  // Increment the cart count and update CartButton
  incrementCart() {
    this.cartCount++;
    this.cartButton.updateCounterDisplay(this.cartCount);
  }
}

const cartMediator = new CartMediator();
