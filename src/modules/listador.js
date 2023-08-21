import {
  mostrarTextoTotalPokemones, bloquearPaginador, desbloquearPaginador, comprobarCargaTabla, mostrarCargando,
} from './general.js';
import { mostrarListaPokemon } from './pokemon.js';
import { manejarCambioPagina, eliminarPaginasAnteriores } from './paginador.js';
import { traerPagina } from '../storage/api.js';

const POKEMONES_POR_PAG = 6;
const CANTIDAD_DE_ITEMS_PAGINADOR = 5;

async function cargarPokedex(url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${POKEMONES_POR_PAG}`, PAGINA_ACTUAL = 1) {
  mostrarCargando();
  eliminarPaginasAnteriores();
  bloquearPaginador();
  
  const pagina = await traerPagina(url, PAGINA_ACTUAL);
  mostrarTextoTotalPokemones(pagina.total);

  cargarListadoPokemones(pagina.nombresPokemones).then(() => {
    comprobarCargaTabla();
    desbloquearPaginador();
  });

  manejarCambioPagina(pagina.anteriorUrl, pagina.siguienteUrl, CANTIDAD_DE_ITEMS_PAGINADOR, PAGINA_ACTUAL, POKEMONES_POR_PAG);


}


async function cargarListadoPokemones(pokemones) {
  pokemones.forEach(async (pokemon) => {
    mostrarListaPokemon(pokemon);
  });
}

export { cargarPokedex, POKEMONES_POR_PAG };
