/*
Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la
cantidad que se lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por
teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.).
*/

let precio = parseInt(prompt("Precio: "));
let cantidad = parseInt(prompt("Cantidad: "));
let total = precio * cantidad;

document.write("Precio: " + precio + "<br> Cantidad: " + cantidad + "<br>");
document.write("Total: " + total);