// ======================================
// DESPLAZAMIENTO SUAVE DEL MENÚ
// ======================================

document.querySelectorAll('nav a').forEach(enlace => {

    enlace.addEventListener('click', function(e){

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});

// ======================================
// EFECTO AL ABRIR DETAILS
// ======================================

const detalles = document.querySelectorAll("details");

detalles.forEach(detalle=>{

    detalle.addEventListener("toggle",function(){

        if(this.open){

            this.style.transform="scale(1.01)";
            this.style.transition=".3s";

        }else{

            this.style.transform="scale(1)";

        }

    });

});

// ======================================
// BOTÓN VOLVER ARRIBA
// ======================================

const boton = document.createElement("button");

boton.innerHTML="⬆";

boton.className="boton-arriba";

document.body.appendChild(boton);

boton.style.position="fixed";
boton.style.bottom="25px";
boton.style.right="25px";
boton.style.width="55px";
boton.style.height="55px";
boton.style.borderRadius="50%";
boton.style.border="none";
boton.style.cursor="pointer";
boton.style.fontSize="22px";
boton.style.background="#1565C0";
boton.style.color="white";
boton.style.display="none";
boton.style.boxShadow="0 0 15px rgba(66,165,245,.6)";
boton.style.zIndex="9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================
// ANIMACIÓN DE APARICIÓN
// ======================================

const elementos = document.querySelectorAll(".card, details, .hero");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";
            entrada.target.style.transform="translateY(0)";

        }

    });

});

elementos.forEach(elemento=>{

    elemento.style.opacity="0";
    elemento.style.transform="translateY(40px)";
    elemento.style.transition=".8s";

    observador.observe(elemento);

});

// ======================================
// MENSAJE EN CONSOLA
// ======================================

console.log("Portafolio cargado correctamente.");
