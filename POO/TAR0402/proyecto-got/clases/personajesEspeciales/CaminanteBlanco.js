import { Personaje } from "../Personaje.js";

export class CaminanteBlanco extends Personaje {

    #poderHelado;

    constructor(nombre = null, poderHelado = null){
        super(nombre);
        this.setVida = 100;
        this.#poderHelado = poderHelado;
    }

    //getters && setters
    get getPoderHelado() { return this.#poderHelado; }
    set setPoderHelado(poderHelado) { this.#poderHelado = poderHelado; }

    atacar(objetivo){
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} con su poder helado (${this.#poderHelado}).`);
        objetivo.recibirDanio(this.#poderHelado, { material: "hielo" });
    }

    recibirDanio(puntos, arma = {}){
        
        if (arma.material === "fuego") this.morirPorFuego();
        
        else if (arma.material === "acero valyrio"){
            this.setVida = this.getVida - puntos;            
            if (this.getVida <= 0) this.morir();
        }
        else console.log(`${this.getNombre} es inmune: solo el acero valyrio o el fuego pueden herirlo.`);
        
    }

    morirPorFuego(){
        this.setVida = 0;
        this.setVivo = false;
        console.log(` ${this.getNombre} ha sido reducido a cenizas.`);
    }
}