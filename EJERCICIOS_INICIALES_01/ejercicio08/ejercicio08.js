/*
Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos
utilizar el operador ==).
*/

let valor1 = prompt("Ingresa la primera clave: ");
let valor2 = prompt("Ingresa la segunda clave: ");

if (valor1 == valor2) {
    document.write("Las claves son iguales.");
}
else document.write("Las claves son diferentes.");
