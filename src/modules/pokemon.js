import { agregarMayuscula } from './general.js';
import { mostrarPopup } from './popup.js';

export function mostrarPokemon(pokemon, i) {
  const $tabla = document.querySelector('#tabla');
  const $contenedor = document.createElement('tbody');
  $contenedor.classList.add('tabla-pokemon');
  const $fila = document.createElement('tr');
  $tabla.appendChild($contenedor);
  $contenedor.appendChild($fila);

    const { name: nombre, url: url} = pokemon
    const id = url.split("/")[6]

    $fila.appendChild(cargarImagen(nombre, id));
    $fila.appendChild(cargarNumero(id));
    $fila.appendChild(cargarNombre(nombre));

    $fila.addEventListener('click', () => {
      mostrarPopup(nombre, url);
    });
    
}

function cargarNombre(nombre) {
  const $nombre = document.createElement('td');
  $nombre.textContent = agregarMayuscula(nombre);
  return $nombre;
}

function cargarNumero(numero) {
  const $numero = document.createElement('td');
  $numero.textContent = numero;
  return $numero;
}

function cargarImagen(nombre, id) {
  const $imagen = document.createElement('img');
  $imagen.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
  $imagen.setAttribute('alt', `Imagen del pokemon ${nombre}`);
  const $imagenContenedor = document.createElement('td');
  $imagenContenedor.appendChild($imagen);
  return $imagenContenedor;
}

