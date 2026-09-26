/*
Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un
mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con
parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué
condición debe cumplirse para tener dos dígitos, un número entero.
*/

let numero = parseInt(prompt("Numero: "));

if (numero >= 1 && numero <= 99) {
    if (numero < 10) {
        document.write("El número tiene un dígito");
    } else {
        document.write("El número tiene dos dígitos");
    }
} else {
    document.write("El número ingresado no es válido. Debe ser un número positivo de uno o dos dígitos (1..99).");
}




