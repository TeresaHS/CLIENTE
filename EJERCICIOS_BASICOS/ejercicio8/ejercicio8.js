
/*
    Ejercicio 8: Reversa de una cadena
    Objetivo: Practicar con manipulación de strings.
    1. Instrucción: Escribe una función que reciba una cadena de texto y devuelva la
    cadena invertida (ej., "hola" => "aloh").
    2. Extra: Verifica si la cadena es un palíndromo (es decir, si se lee igual de izquierda a
    derecha y de derecha a izquierda).
*/

function invertirCadena(cadena) {

    return cadena.split("").reverse().join(""); 
    // split convierte la cadena en un array de caracteres 
    // reverse invierte el array 
    // join lo vuelve a unir en una cadena

}

console.log(invertirCadena("hola"));

function esPalindromo(cadena) {

    let cadenaSinEspacios = cadena.toLowerCase().replaceAll(" ", "");

    //let cadenaSinEspacios = cadena.toLowerCase().trim();   este solo quita espacios al inicio y final

    //let cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, "");
    // toLowerCase convierte la cadena a minúsculas
    // replace(/\s/g, "") elimina los espacios en blanco  
    // s es de space
    // g es de global (todas las veces que aparezca)

    return cadenaSinEspacios === invertirCadena(cadenaSinEspacios);
}

let texto = prompt("Introduce palabra o frase:");

if (esPalindromo(texto)) {
    console.log(`"${texto}" es un palíndromo`);
} else {
    console.log(`"${texto}" no es un palíndromo`);
}
