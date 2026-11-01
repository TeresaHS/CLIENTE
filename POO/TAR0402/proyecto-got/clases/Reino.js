import { Rey } from "./personajesEspeciales/Rey.js";
import { Casa } from "./Casa.js";

export class Reino{
    #nombre;
    #casas;
    #rey;

    constructor(nombre=null){
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = null;
    }

    //getters && setters
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}
    get getCasas(){return this.#casas;}
    set setCasas(casas){this.#casas = casas;}
    get getRey(){return this.#rey;}
    set setRey(rey){this.#rey = rey;}

    agregarCasa(casa){
        if (casa instanceof Casa){
            this.#casas.push(casa);
            console.log(`La Casa ${casa.getNombre} ha sido añadida al Reino de ${this.#nombre}.`);
        }
        else console.log("Error. Tipo de atributo incorrecto.");
    }

    coronarRey(rey){
        if (rey instanceof Rey){
            this.#rey = rey;
            console.log(`${rey.getNombre} ha sido proclamado rey de ${this.#nombre}.`);
        }
        else console.log("Error. Tipo de atributo incorrecto.");
        
    }

    listarCasas(){
        console.log(`Casas del Reino de ${this.#nombre}:`);
        this.#casas.forEach(casa => console.log(`- Casa ${casa.getNombre}`));
    }

    mostrarRey(){
        console.log("Rey actual:");
        console.log(`El rey actual es ${this.#rey.getNombre} de la Casa ${this.#rey.getCasa.getNombre}.`);
    }

}