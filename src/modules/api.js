import { cargarPaginaDeLocalStorage, guardarPaginaLocalStorage } from "./storage.js";
import { cargarPokedemonDeLocalStorage, guardarPokedemonLocalStorage } from "./storage.js";

export async function traerPagina(url, PAGINA_ACTUAL){
    try{
        const pagina = await cargarPaginaDeLocalStorage(PAGINA_ACTUAL);
        if (pagina === null) {
            throw new Error(`Pagina número ${PAGINA_ACTUAL} no encontrada en el LocalStorage`);
        }
        return pagina;
    } catch(e){
        const pagina = await fetch(url)
            .then((pagina) => pagina.json())
            .then((pagina) => {
            guardarPaginaLocalStorage(pagina, PAGINA_ACTUAL);
            return pagina
            })
        return pagina
    }
}

export async function traerPokemon(nombre){
    try{
        const pokemon = await cargarPokedemonDeLocalStorage(nombre);
        if (pokemon === null) {
            throw new Error(`Pokemon ${pokemon} no encontrada en el LocalStorage`);
        }
        return pokemon;
    } catch(e){
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
        const pokemon = await fetch(url)
            .then((pokemon) => pokemon.json())
            .then((pokemon) => {
            guardarPokedemonLocalStorage(nombre, pokemon);
            return pokemon
            })
        return pokemon
    }
}

