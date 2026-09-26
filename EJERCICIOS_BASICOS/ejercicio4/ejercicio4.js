/*
    Ejercicio 4: Calculadora de edad
    Objetivo: Trabajar con operaciones básicas y mostrar resultados basados en condiciones.
    1. Instrucción: Crea un programa que pida al usuario su año de nacimiento y calcule
    su edad actual.
    2. Extra: Si el usuario introduce un año mayor al actual, muestra un mensaje de error.
*/

let edad, anio;

anio = prompt("Introduce tu año de nacimiento");

if(parseInt(anio)){

    anio = parseInt(anio); //para que tenga valor numérico
    
    if(anio > 2026) console.log("El año de nacimiento no puede ser mayor al actual");
    else{
        edad = 2026 - anio;
        console.log(`Edad: ${edad}`);
    }
}