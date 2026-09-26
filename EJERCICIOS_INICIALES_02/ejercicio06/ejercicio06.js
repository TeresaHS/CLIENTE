// Elaborar una función que reciba tres enteros y retorne el promedio.

function ejercicio06 (num1=1, num2=2, num3=4){
    return (num1 + num2 + num3)/3;
}

console.log(ejercicio06());

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const promedioTresNumeros = function (num1=1, num2=2, num3=4){
    return (num1 + num2 + num3)/3;
}

console.log(promedioTresNumeros());

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const promedioTresNumeros2 = (num1=1, num2=2, num3=4) => (num1 + num2 + num3)/3;

console.log(promedioTresNumeros2());