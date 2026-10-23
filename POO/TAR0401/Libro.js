export class Libro{

    titulo;
    autor;
    disponible=true;

    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    get getTitulo(){return this.titulo;}
    set setTitulo(titulo){this.titulo = titulo;}

    get getAutor(){return this.autor;}
    set setAutor(autor){this.autor = autor;}

    get getDisponible(){return this.disponible;}
    set setDisponible(disponible){this.disponible = disponible;}

    prestar(){
        if(!this.disponible) return false;
        this.disponible = false;
        return true;
    }

    devolver(){
        if(this.disponible) return false;
        this.disponible = true;
        return true;
    }

    mostrarInfo(){
        return `${this.titulo} - ${this.autor} - ${this.disponible ? "Disponible" : "Prestado"}`;
    }
}