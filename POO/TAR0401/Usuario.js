export class Usuario{

    nombre;
    edad;
    telefono;
    librosPrestados = [];

    constructor(nombre, edad, telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }

    get getNombre(){return this.nombre;}
    set setNombre(nombre){this.nombre = nombre;}

    get getEdad(){return this.edad;}
    set setEdad(edad){this.edad = edad;}

    get getTelefono(){return this.telefono;}
    set setTelefono(telefono){this.telefono = telefono;}

    get getLibrosPrestados(){return this.librosPrestados;}
    set setLibrosPrestados(libros){this.librosPrestados = libros;}

    prestarLibro(libro){
        if(!libro.prestar()) return false;
        this.librosPrestados.push(libro);
        return true;
    }

    devolverLibro(libro){
        const index = this.librosPrestados.indexOf(libro);
        if(index === -1) return false;
        libro.devolver();
        this.librosPrestados.splice(index, 1);
        return true;
    }

    mostrarLibros(){
        return this.librosPrestados.map(l => l.mostrarInfo());
    }
}