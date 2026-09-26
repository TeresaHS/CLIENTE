// Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

function ejercicio07(num1=1,num2=2,num3=3,num4=4,num5=5){
    return parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);
}

console.log(ejercicio07());
console.log(ejercicio07(prompt("N1:"),prompt("N2:"),prompt("N3:"),prompt("N4:"),prompt("N5:")));

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const sumaNumerosIntroducidos = function(num1=1,num2=2,num3=3,num4=4,num5=5){
    return parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);
};

console.log(sumaNumerosIntroducidos());
console.log(sumaNumerosIntroducidos(prompt("N1:"),prompt("N2:"),prompt("N3:"),prompt("N4:"),prompt("N5:")));

// VERSION ADAPTADA FUNCION FLECHA ---------------------------------------------------------------------

const sumaNumerosIntroducidos2 = (num1=1,num2=2,num3=3,num4=4,num5=5) => parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);

console.log(sumaNumerosIntroducidos2());
console.log(sumaNumerosIntroducidos2(prompt("N1:"),prompt("N2:"),prompt("N3:"),prompt("N4:"),prompt("N5:")));

//  VERSION ADAPTADA CALLBACK --------------------------------------------------------------------------

const sumaNumerosIntroducidos3 = (callback, num1=1, num2=2, num3=3, num4=4, num5=5) => {

    const suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);

    callback(suma);
    return suma;
};

const mostrarResultado = (resultado) => console.log(resultado);

sumaNumerosIntroducidos3(mostrarResultado);

sumaNumerosIntroducidos3(mostrarResultado,prompt("N1:"),prompt("N2:"),prompt("N3:"),prompt("N4:"),prompt("N5:"));