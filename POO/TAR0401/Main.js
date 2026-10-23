/*
    EJERCICIO POO

    Una biblioteca necesita un pequeño sistema para gestionar sus libros y usuarios.
    La tarea es modelar este sistema utilizando Programación Orientada a Objetos (POO) en JavaScript.

    Crea las siguientes clases:
    Libro, que tendrá un título, un autor y tendremos que saber si el libro está disponible o no. También podremos mostrar la información del libro, podremos prestarlo y devolverlo (ambas funciones tendrán que cambiar el estado del libro, es decir, saber si está disponible o no).
    Usuario, del que conoceremos su nombre, edad, teléfono y los libros que tiene prestados (usar las estructura de datos que queráis). El usuario podrá prestar un libro (añadirlo a la estructura de datos X) y devolver un libro (lo quita de la estructura de datos X y le cambia el estado).
    Biblioteca, la cual contendrá muchos libros y muchos usuarios. Un usuario puede tener varios libros y además, podremos saber si un libro está disponible o no.

    Crea todos los métodos que sean necesarios para resolver el ejercicio, además, crea los métodos getters, setters y constructores en todas las clases.

*/

import { Libro } from "./Libro.js";
import { Usuario } from "./Usuario.js";
import { Biblioteca } from "./Biblioteca.js";

const libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");

const usuario1 = new Usuario("Lucía");

const biblioteca = new Biblioteca("Biblioteca Central");
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.registrarUsuario(usuario1);

console.log("Libros disponibles:");
console.log(biblioteca.mostrarLibrosDisponibles());

console.log("Prestamo correcto:", usuario1.prestarLibro(libro1));
console.log("Libros disponibles tras prestamo:");
console.log(biblioteca.mostrarLibrosDisponibles());
console.log("Libros prestados a Lucia:");
console.log(usuario1.mostrarLibros());

console.log("Devolucion correcta:", usuario1.devolverLibro(libro1));
console.log("Libros disponibles tras devolucion:");
console.log(biblioteca.mostrarLibrosDisponibles());
console.log("Libros prestados a Lucia:");
console.log(usuario1.mostrarLibros());