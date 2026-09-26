// Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.

function ejercicio05(num = 5){
    return String(parseInt(num)).length;
}

console.log(ejercicio05());

console.log(ejercicio05(134));


// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const longitudNumero = function (num = 5){
    return String(parseInt(num)).length;
}

console.log(longitudNumero());

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const longitudNumero2 = (num = 5) => String(parseInt(num)).length;

console.log(longitudNumero2());