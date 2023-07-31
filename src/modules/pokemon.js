import { agregarMayuscula } from "./general.js"; 
import { mostrarPopup } from "./popup.js";

export function mostrarPokemon(pokemon) {
    const $tabla = document.querySelector("#tabla");
    const $contenedor = document.createElement("tbody");
    $contenedor.classList.add("tabla-pokemon");
    const $fila = document.createElement("tr");
    $tabla.appendChild($contenedor);
    $contenedor.appendChild($fila);
    

    const {
      name: nombre,
      id: numero,
      weight: peso,
      height: altura,
      sprites: { front_default: imagen },
      types: {
        0: { type: { name: tipo1 } = {} } = {},
        1: { type: { name: tipo2 } = {} } = {}
      },
      abilities: {
        0: {ability: { name: habilidad1 } = {} } = {},
        1: {ability: { name: habilidad2 } = {} } = {},
      }
    } = pokemon;

    $fila.appendChild(cargarImagen(imagen, nombre));
    $fila.appendChild(cargarNumero(numero));
    $fila.appendChild(cargarNombre(nombre));
    $fila.appendChild(cargarTipo1(tipo1));
    $fila.appendChild(cargarTipo2(tipo2));

    $fila.addEventListener("click", ()=>{
       mostrarPopup(nombre, imagen, altura, peso, tipo1, tipo2, habilidad1, habilidad2);
    })
}

function cargarImagen(imagen, nombre){
  const $imagen = document.createElement("img");
  $imagen.setAttribute("src", imagen);
  $imagen.setAttribute("alt", `Imagen del pokemon ${nombre}`);
  const $imagenContenedor = document.createElement("td");
  $imagenContenedor.appendChild($imagen);
  return $imagenContenedor
}

function cargarNombre(nombre){
  const $nombre = document.createElement("td");
  $nombre.textContent = agregarMayuscula(nombre);
  return $nombre
}

function cargarNumero(numero){
  const $numero = document.createElement("td");
  $numero.textContent = numero;
  return $numero
}

function cargarTipo1(tipo1){
  const $tipo1 = document.createElement("td");
  $tipo1.textContent = tipo1;
  return $tipo1
}

function cargarTipo2(tipo2){
  const $tipo2 = document.createElement("td");
  $tipo2.textContent = tipo2;
  return $tipo2
}