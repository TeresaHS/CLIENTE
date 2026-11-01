import { Personaje } from "../Personaje.js";

export class CaminanteBlanco extends Personaje {
    #vida;
    #poderHelado;

    constructor(nombre = null, poderHelado = null) {
        super(nombre);
        this.#vida = 100;
        this.#poderHelado = poderHelado;
    }

    //getters && setters
    get getVida() { return this.#vida; }
    set setVida(vida) { this.#vida = vida; }
    get getPoderHelado() { return this.#poderHelado; }
    set setPoderHelado(poderHelado) { this.#poderHelado = poderHelado; }

    atacar(objetivo) {
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} con su poder helado (${this.#poderHelado}).`);
        objetivo.recibirDanio(this.#poderHelado, { material: "hielo" });
    }

    recibirDanio(puntos, arma = {}) {
        
        if (arma.material === "fuego") this.morirPorFuego();
        else if (arma.material === "acero valyrio") {
            this.#vida -= puntos;
            console.log(`${this.getNombre} recibe ${puntos} de daño con acero valyrio. Vida: ${this.#vida}`);
            if (this.#vida <= 0) {
                this.#vida=0;
                this.morir();
            }
        }
        else console.log(`${this.getNombre} es inmune: solo el acero valyrio o el fuego pueden herirlo.`);
        
    }

    morirPorFuego() {
        this.#vida = 0;
        this.setVivo = false;
        console.log(` ${this.getNombre} ha sido reducido a cenizas.`);
    }
}