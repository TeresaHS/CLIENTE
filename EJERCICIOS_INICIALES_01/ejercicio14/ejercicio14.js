/*
Se ingresan por teclado tres números, si al menos uno de los valores ingresados es
menores a 10, imprimir en la página la leyenda 'Alguno de los números son menores a diez'.
*/

let num1 = parseFloat(prompt("Numero 1: "));
let num2 = parseFloat(prompt("Numero 2: "));
let num3 = parseFloat(prompt("Numero 3: "));

if (num1 < 10 || num2 < 10 || num3 < 10) {
    document.write("Alguno de los números son menores a diez");
}