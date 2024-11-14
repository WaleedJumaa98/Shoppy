// Wait for the DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById("cartButton");

  // Add components to the mediator
  cartMediator.addListeners(cartButton);
});
