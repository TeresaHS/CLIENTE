/*
Pide una nota (número). Muestra la calificación según la nota:
 0-3: Muy deficiente
 3-5: Insuficiente
 5-6: Suficiente
 6-7: Bien
 7-9: Notable
 9-10: Sobresaliente
*/

let nota = parseFloat(prompt("Ingrese la nota (0-10): "));

if (nota >= 0 && nota < 3) {
    document.write("Calificación: Muy deficiente");
}
else if (nota >= 3 && nota < 5) {
    document.write("Calificación: Insuficiente");
}
else if (nota >= 5 && nota < 6) {
    document.write("Calificación: Suficiente");
}
else if (nota >= 6 && nota < 7) {
    document.write("Calificación: Bien");
}
else if (nota >= 7 && nota < 9) {
    document.write("Calificación: Notable");
}
else if (nota >= 9 && nota <= 10) {
    document.write("Calificación: Sobresaliente");
}