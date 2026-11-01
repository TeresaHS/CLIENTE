
export class Arma{
    #nombre;
    #danio;
    #tipo;

    constructor(nombre=null, danio=null, tipo=null){
        this.#nombre = nombre;
        this.#danio = danio;
        this.#tipo = tipo;
    }

    //getters && setters
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}
    get getDanio(){return this.#danio;}
    set setDanio(danio){this.#danio = danio;}
    get getTipo(){return this.#tipo;}
    set setTipo(tipo){this.#tipo = tipo;}

    descripcion(){console.log(`${this.#nombre} (${this.#tipo}) - daño: ${this.#danio}`);}

}