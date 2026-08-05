// =============================
// DESPLAZAMIENTO SUAVE DEL MENÚ
// =============================

document.querySelectorAll("nav a").forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =============================
// ANIMACIÓN AL ABRIR TEMAS
// =============================

const detalles = document.querySelectorAll("details");

detalles.forEach(detalle =>{

    detalle.addEventListener("toggle",function(){

        if(this.open){

            this.style.boxShadow="0 0 20px rgba(91,188,255,.5)";
            this.style.transition=".4s";

        }else{

            this.style.boxShadow="none";

        }

    });

});

// =============================
// BOTÓN VOLVER ARRIBA
// =============================

const boton = document.createElement("button");

boton.innerHTML = "↑";

boton.id = "arriba";

document.body.appendChild(boton);

boton.style.position="fixed";
boton.style.bottom="30px";
boton.style.right="30px";
boton.style.width="50px";
boton.style.height="50px";
boton.style.borderRadius="50%";
boton.style.border="none";
boton.style.cursor="pointer";
boton.style.background="#5bbcff";
boton.style.color="white";
boton.style.fontSize="22px";
boton.style.display="none";
boton.style.boxShadow="0 0 15px rgba(91,188,255,.6)";

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

// =============================
// MENSAJE DE BIENVENIDA
// =============================

window.onload = ()=>{

    console.log("Portafolio cargado correctamente.");

};
