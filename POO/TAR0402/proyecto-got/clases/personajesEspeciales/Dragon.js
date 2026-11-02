import { Personaje } from "../Personaje.js";
import { CaminanteBlanco } from "./CaminanteBlanco.js";

export class Dragon extends Personaje{

    #poder;
    #tipoAtaque;

    constructor(nombre = null, poder = null, tipoAtaque = null){
        super(nombre);
        this.#poder = poder;
        this.#tipoAtaque = tipoAtaque;
    }
    
    //getters && setters
    get getPoder(){return this.#poder;}
    set setPoder(poder){this.#poder = poder;}
    get getTipoAtaque(){return this.#tipoAtaque;}
    set settipoAtaque(tipoAtaque){this.#tipoAtaque = tipoAtaque;}

    atacar(objetivo){
        
        if (objetivo instanceof CaminanteBlanco) {
            console.log(`${this.getNombre} lanza fuego sobre ${objetivo.getNombre} y lo destruye por completo.`);
            objetivo.morirPorFuego();
        }
        else{
            console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${this.#poder} puntos.`);
            objetivo.recibirDanio(this.#poder, { material: this.#tipoAtaque});
        }
    
    }

    recibirDanio(puntos){
        this.setVida = this.getVida - puntos;
        if (this.getVida <= 0) this.morir();
    }

}