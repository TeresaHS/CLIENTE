/*
    Ejercicio 3: Número par o impar
    Objetivo: Practicar con estructuras condicionales (if).
    1. Instrucción: Crea un programa que pida al usuario un número y muestre si el
    número es par o impar.
    2. Extra: Muestra un mensaje de error si el usuario introduce algo que no es un
    número.
*/

let num;

num = prompt("Introduce un número para saber si es par o impar");
// console.log(typeof(num));

if(parseInt(num)){

    // console.log(typeof(num));

    num = parseInt(num);

    // console.log(typeof(num));

    if(num%2==0) console.log(`El numero ${num} es par`);
    else console.log(`El numero ${num} es impar`);
}
