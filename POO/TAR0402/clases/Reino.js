//nombre del reino y que casas y rey contiene
export class Reino{
    #nombre;
    #casas;
    #rey;

    //asigna el nombre por parametro y por defecto: casas = [] y rey = null
    constructor(nombre=null){
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = null;
    }

    //getter y setter para el nombre
    get getNombre(){return this.#nombre;}
    set setNombre(nombre){this.#nombre = nombre;}

    //getter y setter para las casas
    get getCasas(){return this.#casas;}
    set setCasas(casas){this.#casas = casas;}

    //getter y setter para el rey
    get getRey(){return this.#rey;}
    set setRey(rey){this.#rey = rey;}

    //añade una casa al reino e imprime confirmación
    agregarCasa(casa){
        this.#casas.push(casa);
        console.log(`La Casa ${casa.getNombre} ha sido añadida al Reino de ${this.#nombre}.`);
    }

    //asigna el personaje como rey y lo imprime
    coronarRey(personaje){
        this.#rey = personaje;
        console.log(`${personaje.getNombre} ha sido proclamado rey de ${this.#nombre}.`);
    }

    //imprime el nombre de cada casa del reino
    listarCasas(){
        console.log(`Casas del Reino de ${this.#nombre}:`);
        this.#casas.forEach(casa => console.log(`- Casa ${casa.getNombre}`));
    }

    //imprime el rey actual y su casa
    mostrarRey(){
        console.log("Rey actual:");
        console.log(`El rey actual es ${this.#rey.getNombre} de la Casa ${this.#rey.getCasa.getNombre}.`);
    }

}