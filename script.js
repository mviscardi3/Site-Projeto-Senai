let cartCount = 0;
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    });
});
