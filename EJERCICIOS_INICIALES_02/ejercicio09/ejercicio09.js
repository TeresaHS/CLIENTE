// Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.

function ejercicio09(num=2){
    num = parseInt(num);
    console.log(num**3);
}

ejercicio09(prompt("Numero:"));

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const potenciaTres = function(num=2){
    num = parseInt(num);
    console.log(num**3);
};

potenciaTres(prompt("Numero:"));

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const potenciaTres2 = (num=2) => {
    num = parseInt(num);
    console.log(num**3);
};

potenciaTres2(prompt("Numero:"));
