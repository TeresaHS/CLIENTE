import { Personaje } from "../Personaje.js";

export class Rey extends Personaje{
    #aniosReinado;

    constructor(nombre=null, edad=null){
        super(nombre,edad);
        this.#aniosReinado = null;
    }

    //getters && setters
    get getAniosReinado(){return this.#aniosReinado;}
    set setAniosReinado(aniosReinado){this.#aniosReinado = aniosReinado;}
    
    luchar(){
        console.log(`${this.getNombre} lidera la batalla y anima a sus tropas.`);
    }

    gobernar(){
        console.log(`${this.getNombre} gobierna con sabiduría desde hace ${this.#aniosReinado} años.`);
    }
}