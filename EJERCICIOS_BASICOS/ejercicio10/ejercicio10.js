/*
    Ejercicio 10: Calculadora básica con funciones
    Objetivo: Introducir el concepto de funciones.
    1. Instrucción: Escribe una función calculadora que tome tres parámetros: dos
    números y una operación (+, -, *, /). La función debe devolver el resultado de
    aplicar la operación a los dos números.
    2. Extra: Muestra un mensaje de error si la operación introducida no es válida.
*/

function calculadora(a, b, operacion) {
    switch (operacion) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b !== 0) return a / b;
            else return "ERROR- División por cero";
        default:
            return "ERROR - Operación incorrecta";
    }
}

let a = parseFloat(prompt("Introduce primer número: "));
let b = parseFloat(prompt("Introduce segundo número: "));
let op = prompt("Introduce la operación (+, -, *, /)");

console.log("Resultado: ", calculadora(a, b, op));