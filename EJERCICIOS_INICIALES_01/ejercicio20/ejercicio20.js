/*
Realiza un script que imprima 14 resultados aleatorios de una quiniela 1 X 2.
*/

for (let i = 1; i <= 14; i++) {
    
    let resultado = Math.floor(Math.random() * 3); // genera un número aleatorio entre 0 y 2
    
    switch (resultado) {
        case 0:
            document.write("1<br>");
            break;
        case 1:
            document.write("X<br>");
            break;
        case 2:
            document.write("2<br>");
            break;
    }
}