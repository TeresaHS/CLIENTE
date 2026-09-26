/*
    Ejercicio 2: Suma de dos números
    Objetivo: Trabajar con variables y operadores aritméticos básicos.
    1. Instrucción: Crea un programa que pida al usuario dos números (usa prompt) y
    muestre la suma de ambos en la consola.
    2. Extra: Modifica el programa para que realice otras operaciones (resta, multiplicación
    y división).
*/

let num1, num2;

num1 = prompt("Numero 1");
num2 = prompt("Numero 2");

console.log(num1+num2);

console.log(`SUMA: ${parseInt(num1) + parseInt(num2)}`);
console.log(`RESTA: ${parseInt(num1) - parseInt(num2)}`);

console.log("MULTIPLIACCIÓN: " + parseInt(num1) * parseInt(num2));
console.log("DIVISIÓN: " + parseInt(num1) / parseInt(num2));
