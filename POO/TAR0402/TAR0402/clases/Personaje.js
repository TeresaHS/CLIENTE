//entidad individual con nombre, edad, estado vital, casa y arma
export class Personaje{
    nombre;
    edad;
    vivo;
    //vida;
    casa;
    arma;

    //asigna nombre y edad por parametro y por defecto: vivo = true, casa = null, arma = null
    constructor(nombre=null, edad=null){
        this.nombre = nombre;
        this.edad = edad;
        this.vivo = true;
        this.casa = null;
        this.arma = null;
    }

    //getter y setter para el nombre
    get getNombre(){return this.nombre;}
    set setNombre(nombre){this.nombre = nombre;}
    
    //getter y setter para la edad
    get getEdad(){return this.edad;}
    set setEdad(edad){this.edad = edad;}

    //getter y setter para vivo
    get getVivo(){return this.vivo;}
    set setVivo(vivo){this.vivo = vivo;}

    //getter y setter para la casa
    get getCasa(){return this.casa;}
    set setCasa(casa){this.casa = casa;}

    //getter y setter para el arma
    get getArma(){return this.arma;}
    set setArma(arma){this.arma = arma;}

    //asigna el arma y muestra mensaje de confirmación
    equiparArma(arma){
        this.arma = arma;
        console.log(`${this.nombre} ha equipado el arma ${arma.nombre}.`);
    }

    //imprime "Soy {nombre} de la Casa {casa}"
    presentarse(){console.log(`Soy ${this.nombre} de la Casa ${this.casa.getNombre}`);}

    //pone vivo = false e imprime que ha muerto
    morir(){
        this.vivo = false;
        console.log(`${this.nombre} ha muerto.`);
    }

}