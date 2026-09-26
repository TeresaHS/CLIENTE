/*
Confeccionar una función a la cual le envíe tres enteros y los muestre.
*/

function ejercicio02(int1 = 1, int2 = 2, int3 = 3){
    console.log(`Entero 1: ${int1}, Entero 2: ${int2}, Entero 3: ${int3}`);
}

ejercicio02();

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const mostrarEnteros = function(int1 = 1, int2 = 2, int3 = 3){
    console.log(`Entero 1: ${int1}, Entero 2: ${int2}, Entero 3: ${int3}`);
}

console.log(mostrarEnteros());


// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const mostrarEnteros2 = (int1 = 1, int2 = 2, int3 = 3) => console.log(`Entero 1: ${int1}, Entero 2: ${int2}, Entero 3: ${int3}`);

console.log(mostrarEnteros2());