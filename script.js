// Mensaje de bienvenida
window.addEventListener("load", function () {
    alert("¡Bienvenido(a) a mi página web personal!");
});

// Desplazamiento suave al hacer clic en el menú
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación al abrir las unidades
const detalles = document.querySelectorAll("details");

detalles.forEach(detalle => {
    detalle.addEventListener("toggle", function() {
        if (this.open) {
            this.style.background = "#d9f4ff";
        } else {
            this.style.background = "#f4fbff";
        }
    });
});
