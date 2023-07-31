import { cargarPokedex} from "./listador.js";


function manejarCambioPagina(paginaAnterior, paginaSiguiente, CANTIDAD_DE_ITEMS_PAGINADOR, PAGINA_ACTUAL, POKEMONES_POR_PAG){
    eliminarItemsPaginasAnteriores();
    crearPaginaAnterior(paginaAnterior, PAGINA_ACTUAL);
    crearPaginas(CANTIDAD_DE_ITEMS_PAGINADOR, PAGINA_ACTUAL, POKEMONES_POR_PAG);
    crearPaginaSiguiente(paginaSiguiente, PAGINA_ACTUAL);
}

function crearPaginaAnterior(paginaAnterior, PAGINA_ACTUAL){
    document.querySelector("#paginador").appendChild(crearItem("<", paginaAnterior, PAGINA_ACTUAL-1));
}

function crearPaginas(CANTIDAD_DE_ITEMS_PAGINADOR, PAGINA_ACTUAL, POKEMONES_POR_PAG){
    for(let i = 0; i<CANTIDAD_DE_ITEMS_PAGINADOR; i++){

        document.querySelector("#paginador").appendChild(crearItem(PAGINA_ACTUAL +i, `https://pokeapi.co/api/v2/pokemon?offset=${((PAGINA_ACTUAL+i)*POKEMONES_POR_PAG)-POKEMONES_POR_PAG}&limit=${POKEMONES_POR_PAG}`, PAGINA_ACTUAL+i))
    }
}

function crearPaginaSiguiente(paginaSiguiente, PAGINA_ACTUAL){
    document.querySelector("#paginador").appendChild(crearItem(">", paginaSiguiente, PAGINA_ACTUAL +1));
}


function crearItem(contenido, setdata, PAGINA_ACTUAL){
    const $contenedorItem = document.createElement("li");
    $contenedorItem.classList.add("page-item");
    if(!setdata){$contenedorItem.classList.add("disabled");}

    const $item = document.createElement("a");
    $item.classList.add("page-link");
    $item.setAttribute("href", "#");
    $item.textContent= contenido

    $item.setAttribute("data-pagina", setdata)
    $item.addEventListener("click", (item)=>{
        cargarPokedex($item.dataset.pagina, PAGINA_ACTUAL);
    })

    $contenedorItem.appendChild($item);
    return $contenedorItem
}

function eliminarItemsPaginasAnteriores(){
    document.querySelectorAll(".page-item").forEach((item)=>{
        item.remove();
    })
}

function eliminarPaginasAnteriores(){
    document.querySelectorAll(".tabla-pokemon").forEach((pokemon)=>{
        pokemon.remove();
    })
}

export {manejarCambioPagina, eliminarPaginasAnteriores}