/*
Realizar un programa que lea cuatro valores numéricos e informar su suma y
producto.
*/

let num1 = parseFloat(prompt("Numero 1:"));
let num2 = parseFloat(prompt("Numero 2:"));
let num3 = parseFloat(prompt("Numero 3:"));
let num4 = parseFloat(prompt("Numero 4:"));

document.write("Suma: " + (num1 + num2 + num3 + num4) + "<br>");
document.write("Producto: " + (num1 * num2 * num3 * num4));