import { Personaje } from "./Personaje.js";

export class Casa{
    #nombre;
    #lema;
    #miembros;

    constructor(nombre=null, lema=null){
        this.#nombre = nombre;
        this.#lema = lema;
        this.#miembros = [];
    }

    //getters && setters
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}
    get getLema(){return this.#lema;}
    set setLema(lema){this.#lema = lema;}
    get getMiembros(){return this.#miembros;}
    set setMiembros(miembros){this.#miembros = miembros;}

    agregarMiembro(personaje){
        if (personaje instanceof Personaje){
            if (personaje.getCasa && personaje.getCasa !== this) personaje.getCasa.setMiembros = personaje.getCasa.getMiembros.filter(m => m !== personaje);
            if (!this.#miembros.includes(personaje)) this.#miembros.push(personaje);
            personaje.setCasa = this;
            console.log(`${personaje.getNombre} ha sido añadido a la Casa ${this.#nombre}.`);
        }
        else console.log("Error. Tipo de atributo incorrecto.");
    }

    mostrarMiembros(){
        console.log(`Miembros de la Casa ${this.#nombre}:`);
        this.#miembros.forEach((m) => console.log(`- ${m.getNombre}`));
    }

}