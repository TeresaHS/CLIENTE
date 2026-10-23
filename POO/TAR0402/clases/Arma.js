//representa un objeto equipable con nombre, daño y tipo
export class Arma{
    nombre;
    danio;
    tipo;

    //inicializa los tres atributos del arma por parametro
    constructor(nombre, danio, tipo){
        this.nombre = nombre;
        this.danio = danio;
        this.tipo = tipo;
    }

    //getter y setter para el nombre
    get getNombre(){return this.nombre;}
    set setNombre(nombre){this.nombre = nombre;}

    //getter y setter para el daño
    get getDanio(){return this.danio;}
    set setDanio(danio){this.danio = danio;}

    //getter y setter para el tipo
    get getTipo(){return this.tipo;}
    set setTipo(tipo){this.tipo = tipo;}

    //imprime por consola una linea con nombre, tipo y daño del arma
    descripcion(){console.log(`${this.nombre} (${this.tipo}) - daño: ${this.danio}`);}

}