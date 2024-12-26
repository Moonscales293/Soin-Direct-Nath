function toggleSideNav() {
    const sideNavContent = document.querySelector('.side-nav-content');
    sideNavContent.classList.toggle('active');
  }

// apparition menu deroulant //

// Gestion des événements
document.addEventListener('DOMContentLoaded', () => {
  const decrementButtons = document.querySelectorAll('.decrease-btn');
  const incrementButtons = document.querySelectorAll('.increase-btn');
  const quantityDisplayElements = document.querySelectorAll('#quantity');

  let quantity = 1;

  decrementButtons.forEach((decrementButton, index) => {
    decrementButton.addEventListener('click', () => {
      const quantityDisplayElement = quantityDisplayElements[index];
      let quantity = parseInt(quantityDisplayElement.textContent, 10); // variable, et pas constante, sinon ce sera bloqué à 1...//

      if (quantity > 1) {
        quantity--;
        quantityDisplayElement.textContent = quantity.toString();
      }
    });
  });

  incrementButtons.forEach((incrementButton, index) => {
    incrementButton.addEventListener('click', () => {
      const quantityDisplayElement = quantityDisplayElements[index];
      let quantity = parseInt(quantityDisplayElement.textContent, 10);

      quantity++;
      quantityDisplayElement.textContent = quantity.toString();
    });
  });
});
