export class Biblioteca{
    nombre;
    libros = [];
    usuarios = [];

    constructor(nombre){this.nombre = nombre;}

    get getLibros(){return this.libros;}
    set setLibros(libros){this.libros = libros;}

    get getUsuarios(){return this.usuarios;}
    set setUsuarios(usuarios){this.usuarios = usuarios;}

    mostrarLibrosDisponibles(){return this.libros.filter(l => l.getDisponible).map(l => l.mostrarInfo());}

    agregarLibro(libro){this.libros.push(libro);}

    registrarUsuario(usuario){this.usuarios.push(usuario);}

    buscarLibro(titulo){return this.libros.find(l => l.getTitulo === titulo);}

    buscarUsuario(nombre){return this.usuarios.find(u => u.getNombre === nombre);}

    libroDisponible(titulo){
        const libro = this.buscarLibro(titulo);
        return libro ? libro.getDisponible : false;
    }

    prestarLibro(nombre, titulo){
        const usuario = this.buscarUsuario(nombre);
        const libro = this.buscarLibro(titulo);
        if(!usuario || !libro) return false;
        return usuario.prestarLibro(libro);
    }

    devolverLibro(nombre, titulo){
        const usuario = this.buscarUsuario(nombre);
        const libro = this.buscarLibro(titulo);
        if(!usuario || !libro) return false;
        return usuario.devolverLibro(libro);
    }

    mostrarCatalogo(){return this.libros.map(l => l.mostrarInfo());}
}