import { agregarMayuscula, agregarComa } from './general.js';
import { traerPokemon } from '../storage/api.js';

const $popup = new bootstrap.Modal('#staticBackdrop');

export async function mostrarPopup(nombre) {
  const $nombre = document.querySelector('.popup-nombre');
  $nombre.textContent = agregarMayuscula(nombre);
  mostrarCargandoPopup();
  $popup.show();
  traerPokemon(nombre).then((pokemon) => {
    const $imagen = document.querySelector('#popup-imagen');
    $imagen.setAttribute('src',pokemon.foto);
    $imagen.setAttribute('alt', `Imagen del pokemon ${pokemon.nombre}`);

    const $tipo1 = document.querySelector('#popup-tipo-1');
    $tipo1.className = '';
    $tipo1.textContent = pokemon.tipos[0].toUpperCase();
    $tipo1.classList.add('tipo', 'col', 'text-center', pokemon.tipos[0]);

    const $tipo2 = document.querySelector('#popup-tipo-2');
    if (!pokemon.tipos[1]) {
      $tipo2.classList.add('escondido');
    } else {
      $tipo2.className = '';
      $tipo2.textContent = pokemon.tipos[1].toUpperCase();
      $tipo2.classList.add('tipo', 'col', 'text-center', pokemon.tipos[1]);
      $tipo2.classList.remove('escondido');
    }

    const $altura = document.querySelector('#popup-altura');
    $altura.textContent = `${agregarComa(pokemon.altura)}mts`;

    const $peso = document.querySelector('#popup-peso');
    $peso.textContent = `${agregarComa(pokemon.peso)}kg`;

    const $habilidad1 = document.querySelector('#popup-habilidad-1');
    $habilidad1.textContent = agregarMayuscula(pokemon.habilidades[0]);

    if (pokemon.habilidades[1]) {
      const $habilidad2 = document.querySelector('#popup-habilidad-2');
      $habilidad2.textContent = agregarMayuscula(pokemon.habilidades[1]);
    }

    mostrarContenidoPopup();
  });
}

function mostrarCargandoPopup() {
  const contenido = document.querySelector('.card');
  const cargando = document.querySelector('#cargando-popup');
  contenido.classList.add('oculto');
  cargando.classList.remove('oculto');
}

function mostrarContenidoPopup() {
  const contenido = document.querySelector('.card');
  const cargando = document.querySelector('#cargando-popup');
  contenido.classList.remove('oculto');
  cargando.classList.add('oculto');
}
