
export class Personaje{
    #nombre;
    #edad;
    #vivo;
    #vida;
    #casa;

    constructor(nombre=null, edad=null){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#vivo = true;
        this.#vida = true;
        this.#casa = null;
    }

    //getters && setters
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}
    get getEdad(){return this.#edad;}
    set setEdad(edad){this.#edad = edad;}
    get getVivo(){return this.#vivo;}
    set setVivo(vivo){this.#vivo = vivo;}
    get getCasa(){return this.#casa;}
    set setCasa(casa){this.#casa = casa;}
    get getVida(){return this.#vida;}
    set setVida(vida){this.#vida = vida;}

    presentarse(){console.log(`Soy ${this.#nombre} de la Casa ${this.#casa.getNombre}.`);}

    morir(){
        this.#vivo = false;
        this.#vida = 0;
        console.log(` ${this.#nombre} ha muerto.`);
    }

}