// Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho valor.

function ejercicio10(num=25){
    num = parseInt(num);
    console.log(Math.sqrt(num));
}

ejercicio10();
ejercicio10(prompt("Numero: "));

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const raizCuadrada = function(num=25){
    num = parseInt(num);
    console.log(Math.sqrt(num));
};

raizCuadrada();
raizCuadrada(prompt("Numero: "));

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const raizCuadrada2 = (num=25) => {
    num = parseInt(num);
    console.log(Math.sqrt(num));
};

raizCuadrada2();
raizCuadrada2(prompt("Numero: "));

/*
1. Math.sqrt() (la forma estándar)

Math.sqrt(9);    // 3
Math.sqrt(16);   // 4
Math.sqrt(2);    // 1.4142135623730951
Math.sqrt(0);    // 0
Math.sqrt(-1);   // NaN (no existe raíz real de negativos)


2. Con el operador ** (exponente 0.5)

9 ** 0.5;    // 3
16 ** 0.5;   // 4
2 ** 0.5;    // 1.4142135623730951


También sirve para raíces cúbicas, cuartas, etc.:

27 ** (1/3);  // 3  (raíz cúbica)
16 ** (1/4);  // 2  (raíz cuarta)
*/