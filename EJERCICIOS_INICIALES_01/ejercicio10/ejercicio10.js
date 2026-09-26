/*
Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un
mensaje 'regular', sino 'reprobado'.
*/

let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 4) {
    document.write("Regular");
}
else {
    document.write("Reprobado");
}