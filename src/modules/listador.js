
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
  pokemones.forEach(async (pokemon) => {
    mostrarPokemon(pokemon);
  });
}

export {cargarPokedex, POKEMONES_POR_PAG}