export default class ListadoPokemones{
    constructor(total, siguienteUrl, anteriorUrl, nombresPokemones = []){
        this.total = total;
        this.siguienteUrl = siguienteUrl;
        this.anteriorUrl = anteriorUrl;
        this.nombresPokemones = nombresPokemones;
    }
}