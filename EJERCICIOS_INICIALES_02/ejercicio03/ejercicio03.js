// Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.


/*
function ejercicio03(num1=1,num2=2,num3=3){
    return Math.max(num1,num2,num3)
}
*/

function ejercicio03(array=[num1=1,num2=2,num3=3]){
    console.log(Math.max(...array));
}

ejercicio03();

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const mostrarMayor = function (array=[num1=1,num2=2,num3=3]){
    console.log(Math.max(...array));
}

console.log(mostrarMayor());

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const mostrarMayor2 = (array=[num1=1,num2=2,num3=3]) =>console.log(Math.max(...array));

console.log(mostrarMayor2());