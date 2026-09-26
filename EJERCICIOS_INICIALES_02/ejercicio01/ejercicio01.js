/*
Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
*/

function ejercicio01(num1 = 1, num2 = 2, num3 = 3){
    console.log("Suma: " + (parseInt(num1) + parseInt(num2) + parseInt(num3)));
}

ejercicio01();

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const suma = function(num1 = 1, num2 = 2, num3 = 3){
    console.log("Suma: " + (parseInt(num1) + parseInt(num2) + parseInt(num3)));
};

console.log(suma());

console.log(suma(1,3));

console.log(suma(1,3,4));

// estas tres funciones devuelven undefined ya que no tienen un return

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const sumarTresEnteros = (n1 = 1, n2 = 2, n3 = 3) => console.log("Suma: " + (parseInt(n1) + parseInt(n2) + parseInt(n3)));

console.log(sumarTresEnteros());
console.log(sumarTresEnteros(5,5,5));