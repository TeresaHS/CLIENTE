/*
Crea script para generar pirámide siguiente con los números del 1 al número que
indique el usuario (no mayor de 50).
1
12
123
1234
12345
*/

let numero = parseInt(prompt("Número (1 - 50): "));

if (numero > 0 && numero <= 50) {
    
    for (let i = 1; i <= numero; i++) {

        let fila = "";

        for (let j = 1; j <= i; j++) {
            fila = fila + j;
        }

        document.write(fila + "<br>");
    }
} 

else document.write("(Número inválido) Número entre 1 y 50.");