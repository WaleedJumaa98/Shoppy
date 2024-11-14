// Main script to wire up components
const cartButton = document.querySelector("cart-button");
const cartShops = document.querySelectorAll("cart-shop");

// Create the CartMediator instance and pass the CartButton instance to it
const cartMediator = new CartMediator(cartButton);

cartShops.forEach((cartShop) => {
  cartShop.addEventListener("increment-cart", () => {
    cartMediator.incrementCart();
  });
});
