import { Personaje } from "../Personaje.js";

//entidad individual con nombre, edad, estado vital, casa y especialidad
export class Consejero extends Personaje{
    #especialidad;

    //asigna nombre y edad por parametro y por defecto: vivo = true, casa = null, arma = null
    constructor(nombre=null, edad=null){
        super(nombre,edad);
        this.#especialidad = null;
    }

    //getter y setter para la especialidad
    get getEspecialidad(){return this.#especialidad;}
    set setEspecialidad(especialidad){this.#especialidad = especialidad;}
    
    //imprime que el consejero no lucha con armas, sino con palabras e inteligencia
    luchar(){
        console.log(`${this.getNombre} no lucha con armas, sino con palabras e inteligencia`);
    }

    //imprime que el consejero aconseja al personaje recibido sobre su especialidad
    aconsejar(personaje){
        //en el caso de las clases, se usa el instanceof en vez de typeof
        if (personaje instanceof Personaje) console.log(`${this.getNombre} aconseja a ${personaje.getNombre} sobre ${this.#especialidad}.`);
        else console.log("Error. Tipo de atributo incorrecto.");
    }
}