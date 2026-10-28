import { Personaje } from "./clases/Personaje.js";
import { Casa } from "./clases/Casa.js";
import { Reino } from "./clases/Reino.js";
import { Arma } from "./clases/Arma.js";


//crea el reino Poniente y las casas Stark y Lannister
let poniente = new Reino("Poniente");
let stark = new Casa("Stark", "Se acerca el invierno");
let lannister = new Casa("Lannister", "Oye mi rugido");

//crea las armas Garra y Aguja
let garra = new Arma("Garra", 25, "espada");
let aguja = new Arma("Aguja", 15, "espada");

//crea los personajes Jon Snow, Arya Stark y Jaime Lannister
let jon = new Personaje("Jon Snow", 25);
let arya = new Personaje("Arya Stark", 18);
let jaime = new Personaje("Jaime Lannister", 40);

//agrega las casas al reino
poniente.agregarCasa(stark);
poniente.agregarCasa(lannister);

//equipa armas a Jon y Arya
jon.equiparArma(garra);
arya.equiparArma(aguja);

//agrega miembros a sus respectivas casas
stark.agregarMiembro(jon);
stark.agregarMiembro(arya);
lannister.agregarMiembro(jaime);

//corona a Jaime como rey
poniente.coronarRey(jaime);

//lista casas, muestra el rey y los miembros de Stark
poniente.listarCasas();
poniente.mostrarRey();
stark.mostrarMiembros();

//imprime presentaciones de los tres personajes
console.log("Presentaciones:");
jon.presentarse();
arya.presentarse();
jaime.presentarse();

//imprime descripciones de las dos armas
console.log("Armas:");
garra.descripcion();
aguja.descripcion();