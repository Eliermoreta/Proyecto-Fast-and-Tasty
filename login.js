// Capturamos el formulario de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores de los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validaciones básicas
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Simulación de login exitoso
    alert('Inicio de sesión exitoso. Bienvenido a nuestra tienda.');
    // Redirigir a la página de productos
    window.location.href = 'productos.html';
});
