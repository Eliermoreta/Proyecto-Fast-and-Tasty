// Productos disponibles
const products = [
    { id: 1, name: 'Pizza Margherita', price: 8.99 },
    { id: 2, name: 'Hamburguesa Clásica', price: 7.49 },
    { id: 3, name: 'Sushi Roll', price: 12.99 },
    { id: 4, name: 'Pasta Alfredo', price: 10.99 },
    { id: 5, name: 'Ensalada César', price: 6.99 },
    { id: 6, name: 'Tacos al Pastor', price: 9.49 },
    { id: 7, name: 'Burrito Vegetariano', price: 8.49 },
    { id: 8, name: 'Helado de Chocolate', price: 4.99 },
    { id: 9, name: 'Batido de Fresa', price: 3.99 },
    { id: 10, name: 'Café Espresso', price: 2.49 },
];

// Carrito de compras
const cart = [];

// Elementos del DOM
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');

// Renderiza los productos disponibles
function renderProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Añadir</button>
        `;

        productList.appendChild(productCard);
    });
}

// Añade un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Actualiza el carrito en la página
function updateCart() {
    // Limpiar carrito anterior
    cartItems.innerHTML = '';

    // Calcular total
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;

        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;

        cartItems.appendChild(cartItem);
    });

    totalAmount.innerText = `Total: $${total.toFixed(2)}`;
}

// Elimina un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Escuchar clic en finalizar compra
document.getElementById('checkoutButton').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    alert('Compra finalizada. ¡Gracias por tu compra!');
    // Reiniciar carrito
    cart.length = 0;
    updateCart();
});

// Renderizar los productos al cargar la página
document.addEventListener('DOMContentLoaded', renderProducts);
