document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const payButton = document.getElementById("pay-button");

    let total = 0;

    products.forEach((product) => {
        const button = product.querySelector("button");

        button.addEventListener("click", () => {
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            // Añadir producto al carrito
            const listItem = document.createElement("li");
            listItem.textContent = `${name} - $${price.toFixed(2)}`;
            cartItems.appendChild(listItem);

            // Actualizar total
            total += price;
            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        });
    });

    payButton.addEventListener("click", () => {
        if (total === 0) {
            alert("El carrito está vacío. Agrega productos antes de pagar.");
        } else {
            // Redirigir a la página de pago con el total como parámetro
            window.location.href = `pago.html?total=${total.toFixed(2)}`;
        }
    });
});
