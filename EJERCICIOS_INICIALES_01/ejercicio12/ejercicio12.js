/*
Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del
primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que
puede haber tres condiciones simples).
*/

let valor1 = parseInt(prompt("Numero 1: "));
let valor2 = parseInt(prompt("Numero 2: "));
let valor3 = parseInt(prompt("Numero 3: "));

if (valor1 === valor2 && valor2 === valor3) {
    let resultado = (valor1 + valor2) * valor3;
    document.write("El resultado es: " + resultado);
}

else document.write("Los valores ingresados no son todos iguales.");
