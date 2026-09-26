// Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

function ejercicio04(lado=2){
    return 4*lado;
}

console.log(ejercicio04());


// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const perimetroCuadrado = function(lado=2){
    return 4*lado;
}

console.log(perimetroCuadrado());

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const perimetroCuadrado2 = (lado=2) => 4*lado;

console.log(perimetroCuadrado2());
