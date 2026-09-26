/*
De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar
un programa que lea los datos de entrada e informe
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años,
otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un
aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
*/


let sueldo = parseFloat(prompt("Sueldo: "));
let antiguedad = parseInt(prompt("Años de antigüedad: "));

if (sueldo < 500 && antiguedad >= 10) {

    let aumento = sueldo * 0.20;
    let sueldoPagar = sueldo + aumento;

    // toFixed(2) para mostrar el sueldo con dos decimales
    document.write("Sueldo a pagar: " + sueldoPagar.toFixed(2) + "€"); 

} else if (sueldo < 500 && antiguedad < 10) {

    let aumento = sueldo * 0.05;
    let sueldoPagar = sueldo + aumento;
    document.write("Sueldo a pagar: " + sueldoPagar.toFixed(2) + "€");

} else {
    document.write("Sueldo sin cambios: " + sueldo.toFixed(2) + "€");
}