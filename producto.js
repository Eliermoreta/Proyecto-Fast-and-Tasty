// Productos disponibles en el catálogo
const products = document.querySelectorAll('.product');

// Elementos del carrito
let cart = [];
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const payButton = document.getElementById('pay-button');

// Función para actualizar el carrito de compras
function updateCart() {
    // Limpiar los elementos del carrito
    cartItemsList.innerHTML = '';

    // Calcular el total del carrito
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    // Actualizar el total del carrito
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: parseFloat(productPrice)
    };
    cart.push(product);
    updateCart();
}

// Asignar el evento de clic a cada botón "Comprar"
products.forEach(product => {
    const button = product.querySelector('button');
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('p').textContent.replace('$', '');

    button.addEventListener('click', function() {
        addToCart(productName, productPrice);
    });
});

// Evento de clic en el botón "Pagar"
payButton.addEventListener('click', function() {
    if (cart.length > 0) {
        // Calcular el total del carrito
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });

        // Redirigir a la página de pago con el total como parámetro en la URL
        window.location.href = `pagos.html?total=${total.toFixed(2)}`;  // Pasar el total como parámetro en la URL
    } else {
        alert('¡Tu carrito está vacío! Agrega productos antes de pagar.');
    }
});
