export default class Pokemon {
  constructor(id, nombre, foto, peso, altura, habilidades = [], tipos = []) {
    this.id = id,
    this.nombre = nombre,
    this.foto = foto,
    this.peso = peso,
    this.altura = altura,
    this.habilidades = habilidades,
    this.tipos = tipos;
  }
}
