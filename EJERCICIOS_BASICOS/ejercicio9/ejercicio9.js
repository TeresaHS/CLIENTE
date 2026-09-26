/*
    Ejercicio 9: FizzBuzz
    Objetivo: Practicar con condicionales y bucles.
    1. Instrucción: Escribe un programa que muestre los números del 1 al 50. Para los
    múltiplos de 3, muestra "Fizz" en lugar del número; para los múltiplos de 5, muestra
    "Buzz"; y para los múltiplos de ambos (3 y 5), muestra "FizzBuzz".
    2. Extra: Permite al usuario definir el rango en el que desea ejecutar el programa.
*/

let inicio = parseInt(prompt("Introduce el número inicial: "));
let fin = parseInt(prompt("Introduce el número final: "));

if (isNaN(inicio)) {
    inicio = 1;
}

if (isNaN(fin)) {
    fin = 50;
}

for (let i = inicio; i <= fin; i++) {

    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");  // antes pregunto con isNaN, por lo que podría usar == pero es mejor práctica usar ===
    
    else if (i % 3 === 0) console.log("Fizz");
    
    else if (i % 5 === 0) console.log("Buzz");
    
    else console.log(i);
}