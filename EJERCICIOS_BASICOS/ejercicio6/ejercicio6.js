
/*
    Ejercicio 6: Tabla de multiplicar
    Objetivo: Usar bucles (for o while).
    1. Instrucción: Pide al usuario un número y genera la tabla de multiplicar de ese
    número (del 1 al 10) en la consola.
    2. Extra: Permite al usuario especificar hasta qué número quiere multiplicar, por
    ejemplo, hasta el 12 en vez del 10.
*/

let numeroTabla = parseInt(prompt("Introduce un número para la tabla de multiplicar: "));
let limite = parseInt(prompt("Numero hasta el que quieres multiplicar (opcional):"));

if (isNaN(limite)) limite = 10;

for (let i = 1; i <= limite; i++) {
    console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
}
