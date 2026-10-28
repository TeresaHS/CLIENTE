import { Personaje } from "../Personaje.js";

//entidad individual con nombre, edad, estado vital, casa y arma
export class Rey extends Personaje{
    #aniosReinado;

    //asigna nombre y edad por parametro y por defecto: vivo = true, casa = null, arma = null
    constructor(nombre=null, edad=null){
        super(nombre,edad);
        this.#aniosReinado = null;
    }

    //getter y setter para los años de reinado
    get getAniosReinado(){return this.#aniosReinado;}
    set setAniosReinado(aniosReinado){this.#aniosReinado = aniosReinado;}
    
    //imprime que el rey lidera la batalla y anima a sus tropas
    luchar(){
        console.log(`${this.getNombre} lidera la batalla y anima a sus tropas.`);
    }

    //imprime que el rey gobierna, indicando cuántos años lleva reinando
    gobernar(){
        console.log(`${this.getNombre} gobierna con sabiduría desde hace ${this.#aniosReinado} años.`);
    }
}