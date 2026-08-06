// Animación de aparición al hacer scroll

const elementos = document.querySelectorAll(".card, .bio-card, .tech, .contacto-card");

const mostrar = () => {

    elementos.forEach(el => {

        const posicion = el.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", mostrar);

mostrar();

