/*
Realizar un programa que lea por teclado dos números, si el primero es mayor al
segundo informar su suma y diferencia, en caso contrario informar el producto y la división
del primero respecto al segundo.
*/

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    let suma = num1 + num2;
    let diferencia = num1 - num2;
    document.write("SUMA: " + suma + "<br>");
    document.write("DIFERENCIA: " + diferencia);
}
else {
    let producto = num1 * num2;
    let division = num1 / num2;
    document.write("PRODUCTO: " + producto + "<br>");
    document.write("DIVISIÓN: " + division);
}