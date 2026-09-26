/*
    Ejercicio 5: Array de colores favoritos
    Objetivo: Introducir a los arrays y la manipulación básica de elementos.
    1. Instrucción: Crea un programa que defina un array con al menos cinco colores.
    2. Extra: Pide al usuario un color y añade ese color al final del array. Luego, muestra el
    array actualizado.
*/

let colores = ["rojo", "azul", "verde", "amarillo", "morado"];

console.log("Array inicial: " + colores);

let nuevoColor = prompt("Introduce un color para añadir al array");

colores.push(nuevoColor); // push es para añadir valor al final del array

console.log("Array actualizado: " + colores);
