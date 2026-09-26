/*
Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar
la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house'
en la página.
*/

let palabra = prompt("Ingrese una palabra (casa, mesa, perro, gato):");

switch(palabra.toLowerCase()) {
    case "casa":
        document.write("house");
        break;
    case "mesa":
        document.write("table");
        break;
    case "perro":
        document.write("dog");
        break;
    case "gato":
        document.write("cat");
        break;
    default:
        document.write("Palabra no reconocida");
}
