
import { mostrarTextoTotalPokemones, bloquearPaginador, desbloquearPaginador, comprobarCargaTabla, mostrarCargando } from "./general.js"; 
import { mostrarPokemon } from "./pokemon.js";
import { manejarCambioPagina, eliminarPaginasAnteriores } from "./paginador.js";

const POKEMONES_POR_PAG = 6;
const CANTIDAD_DE_ITEMS_PAGINADOR = 5;


function cargarPokedex(url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${POKEMONES_POR_PAG}`, PAGINA_ACTUAL = 1){
  mostrarCargando();
  eliminarPaginasAnteriores();
  bloquearPaginador(); 
  cargarPokemon(url, PAGINA_ACTUAL);
}

function cargarPokemon(url, PAGINA_ACTUAL){
fetch(url)
    .then((r)=> r.json())
    .then((r)=> {
       let {count: totalPokemones, results: pokemones, next:paginaSiguiente, previous: paginaAnterior}= r;
       mostrarTextoTotalPokemones(totalPokemones);
       cargarListadoPokemones(pokemones).then(()=>{
        comprobarCargaTabla()
        desbloquearPaginador();
      })
       manejarCambioPagina(paginaAnterior, paginaSiguiente, CANTIDAD_DE_ITEMS_PAGINADOR, PAGINA_ACTUAL, POKEMONES_POR_PAG)
    })
}

async function cargarListadoPokemones(pokemones) {
    for (const pokemon of pokemones) {
      const { name: nombre } = pokemon;
      const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      const pokemonData = await r.json();
      mostrarPokemon(pokemonData)
    }
}

export {cargarPokedex, POKEMONES_POR_PAG}