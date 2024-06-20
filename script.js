const searchInput = document.getElementById('search');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();

  products.forEach(product => {
    const name = product.getAttribute('data-name').toLowerCase();
    if (name.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
