import { Casa } from "./clases/Casa.js";
import { Reino } from "./clases/Reino.js";
import { Arma } from "./clases/Arma.js";
import { Guerrero } from "./clases/personajesEspeciales/Guerrero.js";
import { Consejero } from "./clases/personajesEspeciales/Consejero.js";
import { Rey } from "./clases/personajesEspeciales/Rey.js";

let poniente = new Reino("Poniente");
let stark = new Casa("Stark", "Se acerca el invierno");
let lannister = new Casa("Lannister", "Oye mi rugido");

let garra = new Arma("Garra", 25, "espada");

let jon = new Guerrero("Jon Snow", 25);
let tyrion = new Consejero("Tyrion Lannister", 35);
let robert = new Rey("Robert Baratheon", 40);

console.log("FASE 1:");

poniente.agregarCasa(stark);
poniente.agregarCasa(lannister);

jon.equiparArma(garra);

stark.agregarMiembro(jon);
lannister.agregarMiembro(tyrion);
lannister.agregarMiembro(robert);

poniente.coronarRey(robert);

console.log("FASE 2:");

robert.setAniosReinado = 15;

jon.presentarse();
jon.luchar();
jon.entrenar();

tyrion.presentarse();
tyrion.luchar();
tyrion.setEspecialidad = "estrategias";
tyrion.aconsejar(robert);

robert.presentarse();
robert.gobernar();
robert.luchar();