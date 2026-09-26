/*
    Ejercicio 7: Número mayor de un array
    Objetivo: Trabajar con arrays y métodos para encontrar valores. (función max y
    toLowerCase)
    1. Instrucción: Crea un array de números y escribe una función que encuentre y
    devuelva el número más alto del array.
    2. Extra: Pide al usuario que introduzca números y añádelos a un array vacío hasta
    que el usuario escriba "stop". Luego, muestra el número mayor del array.
*/

let numeros = [3, 6, 1, 9, 0, 2];

console.log("Mayor:", Math.max(...numeros)); 
// ... operador de propagación para pasar los elementos del array como argumentos a Math.max

// esto es equivalente a Math.max(3, 6, 1, 9, 0, 2)

// math.max es una funcion

// math max espera una sintaxis de argumentos, no un array, por eso usamos el operador de 
// propagación para "desempaquetar" los elementos del array y pasarlos como argumentos individuales 
// a la función Math.max

// esto nos permite encontrar el número más alto en el array más rápido

let numerosUsuario = []; // inicializo como array
let entrada;

do {
    entrada = prompt("Introduce un número (o escribe 'stop' para terminar)");
    
    if (entrada.toLowerCase() !== "stop") {
        let num = parseInt(entrada);
        if (!isNaN(num)) numerosUsuario.push(num);
    }
} while (entrada.toLowerCase() !== "stop");

if (numerosUsuario.length > 0) console.log("Mayor:", Math.max(...numerosUsuario));
else console.log("No son números válidos");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
let numeros = [3, 6, 1, 9, 0, 2];

function encontrarMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) mayor = array[i];
    }
    return mayor;
}

console.log("Mayor:", encontrarMayor(numeros));

let numerosUsuario = []; // inicializo como array
let entrada;

do {
    entrada = prompt("Introduce un número (o escribe 'stop' para terminar)");

    if (entrada.toLowerCase() !== "stop") {
        let num = parseInt(entrada);
        if (!isNaN(num)) numerosUsuario.push(num);
    }
} while (entrada.toLowerCase() !== "stop");

if (numerosUsuario.length > 0) {
    console.log("Mayor:", encontrarMayor(numerosUsuario));
} else {
    console.log("No son números válidos");
}
*/