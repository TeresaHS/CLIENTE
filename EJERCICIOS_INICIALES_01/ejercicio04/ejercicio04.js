/*
Escribir un programa en el cual se ingresen cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto.
*/

let num1 = parseFloat(prompt("Numero 1: "));
let num2 = parseFloat(prompt("Numero 2: "));
let num3 = parseFloat(prompt("Numero 3: "));
let num4 = parseFloat(prompt("Numero 4: "));

document.write("Suma de los dos primeros: " + (num1 + num2) + "<br>");
document.write("Producto del tercero y cuarto: " + (num3 * num4));