import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje{
    #especialidad;

    constructor(nombre=null, edad=null){
        super(nombre,edad);
        this.#especialidad = null;
    }

    //getters && setters
    get getEspecialidad(){return this.#especialidad;}
    set setEspecialidad(especialidad){this.#especialidad = especialidad;}
    
    luchar(){
        console.log(`${this.getNombre} no lucha con armas, sino con palabras e inteligencia`);
    }

    aconsejar(personaje){
        //en el caso de las clases, se usa el instanceof en vez de typeof
        if (personaje instanceof Personaje) console.log(`${this.getNombre} aconseja a ${personaje.getNombre} sobre ${this.#especialidad}.`);
        else console.log("Error. Tipo de atributo incorrecto.");
    }
}