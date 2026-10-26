import { Personaje } from "../Personaje.js";

//entidad individual con nombre, edad, estado vital, casa y arma
export class Guerrero extends Personaje{
    #arma;

    //asigna nombre y edad por parametro y por defecto: vivo = true, casa = null, arma = null
    constructor(nombre=null, edad=null){
        super(nombre,edad);
        this.#arma = null;
    }

    //getter y setter para el arma
    get getArma(){return this.#arma;}
    set setArma(arma){this.#arma = arma;}

    //asigna el arma y muestra mensaje de confirmación
    equiparArma(arma){
        this.#arma = arma;
        console.log(`${this.getNombre} ha equipado el arma ${arma.getNombre}.`);
    }

    //imprime que el guerrero ataca con su arma, indicando el daño causado
    luchar(){
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDanio} puntos.`);
    }

    //imprime que el guerrero se entrena para la próxima batalla
    entrenar(){
        console.log(`${this.getNombre} se entrena sin descanso para la próxima batalla.`);
    }
    
}