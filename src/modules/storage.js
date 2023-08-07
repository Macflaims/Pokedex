export function guardarPaginaLocalStorage(pagina, PAGINA_ACTUAL){
    localStorage.setItem(obtenerKeyPagina(PAGINA_ACTUAL),JSON.stringify(pagina))
}
  
export async function cargarPaginaDeLocalStorage(PAGINA_ACTUAL){
    const pagina = JSON.parse(localStorage.getItem(obtenerKeyPagina(PAGINA_ACTUAL)));
    return pagina
}


function obtenerKeyPagina(PAGINA_ACTUAL){
    return `pagina_${PAGINA_ACTUAL}`
}

export function guardarPokedemonLocalStorage(nombre, pokemon){
    localStorage.setItem(obtenerKeyPokemon(nombre),JSON.stringify(pokemon))
}
  
export async function cargarPokedemonDeLocalStorage(nombre){
    const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(nombre)));
    return pokemon
}


function obtenerKeyPokemon(nombre){
    return `pokemon_${nombre}`
}