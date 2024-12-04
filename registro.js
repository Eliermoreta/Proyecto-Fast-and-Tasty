document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío tradicional del formulario
    
    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí podrías agregar validaciones adicionales o enviar los datos al servidor si es necesario

    // Mostrar el mensaje de éxito (como un toast)
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(function() {
        successMessage.style.display = 'none';
        
        // Redirigir a la página de login después de 3 segundos
        window.location.href = 'Login.html';  // Asegúrate de que la ruta al archivo Login.html es correcta
    }, 3000);

    // Limpiar los campos del formulario (opcional)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
