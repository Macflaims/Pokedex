import { POKEMONES_POR_PAG, cargarPokedex } from "./listador.js";

function mostrarTextoTotalPokemones(totalPokemones){
    document.querySelector("#total-pokemones").textContent = totalPokemones
}

function agregarMayuscula(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function agregarComa(numero){
    if(numero.toString().length===1){
        return `0,${numero}`
    }
    else{
        const numeroString = numero.toString()
        const entero = numeroString.slice(0, -1);
        const decimal = numeroString.slice(-1)
        return `${entero},${decimal}`
    }
}

function comprobarCargaTabla(){
    if(document.querySelectorAll(".tabla-pokemon").length === POKEMONES_POR_PAG){
      document.querySelector("#cargando").classList.add("oculto")
      document.querySelector("#tabla").classList.remove("oculto")
    }
}
  
function mostrarCargando(){
    document.querySelector("#tabla").classList.add("oculto");
    document.querySelector("#cargando").classList.remove("oculto")
}
  
function bloquearPaginador(){
    document.querySelector("#nav").classList.add("deshabilitado")
}
  
function desbloquearPaginador(){
    document.querySelector("#nav").classList.remove("deshabilitado")
}

document.querySelector("#nav-titulo").addEventListener("click", ()=>{cargarPokedex()});

export {mostrarTextoTotalPokemones, agregarMayuscula, comprobarCargaTabla, mostrarCargando, bloquearPaginador, desbloquearPaginador, agregarComa}