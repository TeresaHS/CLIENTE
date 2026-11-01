import { Personaje } from "../Personaje.js";

export class Khaleesi extends Personaje {
    #dragones;
    #consejero;

    constructor(nombre = null, edad = null, vivo = true, casa = null, dragones = [], consejero = null) {
        super(nombre, edad);
        this.setVivo = vivo;
        this.setCasa = casa;
        this.#dragones = dragones;
        this.#consejero = consejero;
    }

    //getters && setters
    get getDragones() { return this.#dragones; }
    set setDragones(dragones) { this.#dragones = dragones; }
    get getConsejero() { return this.#consejero; }
    set setConsejero(consejero) { this.#consejero = consejero; }

    luchar() {
        let vivos = this.#dragones.filter(d => d.getVivo);
        console.log(`${this.getNombre} comanda a sus dragones.`);
        vivos.forEach(d => console.log(`${d.getNombre}`));
    }
}