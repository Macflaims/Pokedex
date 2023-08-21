import {
  cargarPaginaDeLocalStorage, guardarPaginaLocalStorage, cargarPokedemonDeLocalStorage, guardarPokedemonLocalStorage,
} from './storage.js';

import { mapearListadoPokemones, mapearPokemon } from '../mapeadores/pokemon.js';

export async function traerPagina(url, PAGINA_ACTUAL) {
  try {
    const pagina = await cargarPaginaDeLocalStorage(PAGINA_ACTUAL);
    if (pagina === null) {
      throw new Error(`Pagina número ${PAGINA_ACTUAL} no encontrada en el LocalStorage`);
    }
    return pagina;
  } catch (e) {
    const pagina = await fetch(url)
      .then((r) => r.json())
      .then((r) => {
        const pagina = mapearListadoPokemones(r)
        guardarPaginaLocalStorage(pagina, PAGINA_ACTUAL);
        return pagina;
      });
    return pagina;
  }
}

export async function traerPokemon(nombre) {
  try {
    const pokemon = await cargarPokedemonDeLocalStorage(nombre);
    if (pokemon === null) {
      throw new Error(`Pokemon ${pokemon} no encontrada en el LocalStorage`);
    }
    return pokemon;
  } catch (e) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    const pokemon = await fetch(url)
      .then((r) => r.json())
      .then((r) => {
        const pokemon = mapearPokemon(r);
        guardarPokedemonLocalStorage(nombre, pokemon);
        return pokemon;
      });
    return pokemon;
  }
}
