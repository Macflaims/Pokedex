import { agregarMayuscula, agregarComa } from "./general.js";

const $popup = new bootstrap.Modal("#staticBackdrop");

export function mostrarPopup(nombre, imagen, altura, peso, tipo1, tipo2, habilidad1, habilidad2){
    const $nombre = document.querySelector(".popup-nombre");
    $nombre.textContent = agregarMayuscula(nombre)


    const $imagen= document.querySelector("#popup-imagen");
    $imagen.setAttribute("src", imagen);
    $imagen.setAttribute("alt", `Imagen del pokemon ${nombre}`);

    const $tipo1= document.querySelector("#popup-tipo-1");
    $tipo1.className=""
    $tipo1.textContent = tipo1.toUpperCase();
    $tipo1.classList.add("tipo", "col", "text-center", tipo1);

    const $tipo2= document.querySelector("#popup-tipo-2");
    if(tipo2 === undefined){
        $tipo2.classList.add("escondido");
    }
    else{
        $tipo2.className=""
        $tipo2.textContent = tipo2.toUpperCase();
        $tipo2.classList.add("tipo", "col", "text-center", tipo2);
        $tipo2.classList.remove("escondido")
    }
   
    const $altura= document.querySelector("#popup-altura");
    $altura.textContent = `${agregarComa(altura)}mts`;

    const $peso = document.querySelector("#popup-peso");
    $peso.textContent = `${agregarComa(peso)}kg`;

    const $habilidad1= document.querySelector("#popup-habilidad-1");
    $habilidad1.textContent = agregarMayuscula(habilidad1);

    if(habilidad2){
        const $habilidad2= document.querySelector("#popup-habilidad-2");
        $habilidad2.textContent = agregarMayuscula(habilidad2);
    }

    
    $popup.show()
}