/*
Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir
con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión. (Utilizaremos
el método confirm de javascript).
*/

let cadenas = [];
let continuar = true;

while (continuar) {
    
    let cadena = prompt("Ingrese una cadena de texto:");
    
    if (cadena === null) continuar = false;

    else {

        cadenas.push(cadena);
        continuar = confirm("¿Desea ingresar otra cadena?");

    }
}

if (cadenas.length > 0) document.write("Cadenas concatenadas: " + cadenas.join(" - ")); 
// con el join se concatenan las cadenas con un guión entre ellas

else document.write("No se ingresaron cadenas de texto.");

