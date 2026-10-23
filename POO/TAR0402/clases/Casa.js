//agrupa personajes bajo un nombre y un lema
export class Casa{
    nombre;
    lema;
    miembros;

    //asigna nombre y lema; inicializa miembros como array vacío
    constructor(nombre, lema){
        this.nombre = nombre;
        this.lema = lema;
        this.miembros = [];
    }

    //getter y setter para el nombre
    get getNombre(){return this.nombre;}
    set setNombre(nombre){this.nombre = nombre;}

    //getter y setter para el lema
    get getLema(){return this.lema;}
    set setLema(lema){this.lema = lema;}

    //getter y setter para los miembros
    get getMiembros(){return this.miembros;}
    set setMiembros(miembros){this.miembros = miembros;}

    //añade el personaje al array y le asigna esta casa. Imprime confirmación
    agregarMiembro(personaje){
        this.miembros.push(personaje);
        personaje.casa = this;
        console.log(`${personaje.nombre} ha sido añadido a la Casa ${this.nombre}.`);
    }

    //recorre e imprime el nombre de cada miembro de la casa
    mostrarMiembros(){
        console.log(`Miembros de la Casa ${this.nombre}:`);
        this.miembros.forEach((m) => console.log(`- ${m.nombre}`));
    }

}