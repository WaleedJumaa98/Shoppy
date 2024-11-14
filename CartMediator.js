class CartMediator {
  constructor() {
    this.cartCount = 0;
  }

  // Method to add listeners for cartButton and cartShop
  addListeners(cartButton, cartShop) {
    // Store the CartButton instance to call update on it
    this.cartButton = cartButton;

    // Listen for 'increment-cart' events from CartShop
    cartShop.addEventListener("increment-cart", this.incrementCart.bind(this));
  }

  // Method to increment the cart count and update CartButton
  incrementCart() {
    this.cartCount++;
    this.cartButton.updateCounterDisplay(this.cartCount);
  }
}

const cartMediator = new CartMediator();
