/*
Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos operar
suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a
entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);
*/

let nota1 = prompt('Ingrese primer nota:','');
nota1 = parseInt(nota1);

let nota2 = prompt('Ingrese segunda nota:','');
nota2 = parseInt(nota2);

let nota3 = prompt('Ingrese tercer nota:','');
nota3 = parseInt(nota3);

let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;

document.write('El promedio es: ' + promedio + '<br>');
if (promedio >= 7) document.write('Promocionado');
