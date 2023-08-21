import ListadoPokemones from '../entidades/listadoPokemones.js';
import Pokemon from '../entidades/pokemon.js';

export function mapearListadoPokemones(datosApi) {
  const {
    count: total,
    next: siguienteUrl,
    previous: anteriorUrl,
    results: resultados,
  } = datosApi;

  return new ListadoPokemones(
    total,
    siguienteUrl,
    anteriorUrl,
    resultados.map((pokemon) => ({ name: pokemon.name, url: pokemon.url })),
  );
}

export function mapearPokemon(datosApi) {
  const {
    id,
    name: nombre,
    weight: peso,
    height: altura,
    sprites: { front_default: imagen },
    types: tipos,
    abilities: habilidades,
  } = datosApi;

  return new Pokemon(
    id,
    nombre,
    imagen,
    peso,
    altura,
    habilidades.map((habilidad) => (habilidad.ability.name)),
    tipos.map((tipo) => (tipo.type.name)),
  );
}
