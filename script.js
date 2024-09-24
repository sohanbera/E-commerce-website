document.addEventListener("DOMContentLoaded", () => {
    // Initialize cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.getElementById("cart-count");
    const cartTotalElement = document.getElementById("cart-total");

    // Update cart count and total on initial load
    updateCart();

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseFloat(product.querySelector("p").textContent.replace('$', ''));

            // Add the product to the cart
            cart.push({ name: productName, price: productPrice });
            localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
            updateCart();
            alert(`${productName} has been added to your cart.`);
        });
    });

    function updateCart() {
        // Update cart count
        cartCountElement.textContent = cart.length;

        // Calculate total price
        const total = cart.reduce((acc, item) => acc + item.price, 0); // Use item.price
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }
});

