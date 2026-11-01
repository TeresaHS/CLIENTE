import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";

export class Guerrero extends Personaje{
    #arma;

    constructor(nombre=null, edad=null, vivo=true, casa=null, arma=null){
        super(nombre, edad);
        this.setVivo = vivo;
        this.setCasa = casa;
        this.#arma = null;
        this.setVida = 100;
        this.#arma = arma;
    }

    //getters && setters
    get getArma(){return this.#arma;}
    set setArma(arma){this.#arma = arma;}

    equiparArma(arma){
        if (arma instanceof Arma){
            this.#arma = arma;
            console.log(`${this.getNombre} ha equipado el arma ${arma.getNombre}.`);
        }
        else console.log("Error. Tipo de atributo incorrecto.");
    }

    luchar(){
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDanio} puntos.`);
    }

    entrenar(){
        console.log(`${this.getNombre} se entrena sin descanso para la próxima batalla.`);
    }

    recibirDanio(puntos) {
        this.setVida = this.getVida - puntos;
        if (this.getVida <= 0) this.morir();
    }
    
    atacar(objetivo){
        let danio = Math.floor(this.#arma.getDanio * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${danio} puntos de daño.`);
        objetivo.recibirDanio(danio, { material: this.#arma.getTipo });
    }
}
