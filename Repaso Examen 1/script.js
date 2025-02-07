// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón y el input
    const button = document.querySelector('button[type="submit"]');
    const input = document.getElementById('name');

    // Función para manejar el clic en el botón
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón

        const userName = input.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

        if (userName === "") {
            alert("Por favor, escribe tu nombre.");
        } else {
            alert(`Hola, ${userName}!`);
        }
    });

    // Cambiar el color de fondo del botón a verde cuando el mouse pasa sobre él
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'green';
    });

    // Restaurar el color original del botón cuando el mouse sale de él
    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = '#2a1abc';
    });
});