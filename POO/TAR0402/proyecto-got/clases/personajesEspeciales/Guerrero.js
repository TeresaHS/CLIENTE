import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";

//entidad individual con nombre, edad, estado vital, casa, arma y vida
export class Guerrero extends Personaje{
    #arma;
    #vida

    //según el script de Alberto, tengo que indicar todas las propiedades en el constructor
    constructor(nombre=null, edad=null, vivo=true, casa=null, arma=null){
        super(nombre, edad);
        this.setVivo = vivo;
        this.setCasa = casa;
        this.#arma = null;
        this.#vida = 100;
        this.#arma = arma;
    }

    //getter y setter para el arma
    get getArma(){return this.#arma;}
    set setArma(arma){this.#arma = arma;}

    //getter y setter para la vida
    get getVida(){return this.#vida;}
    set setVida(vida){this.#vida = vida;}

    //asigna el arma y muestra mensaje de confirmación
    equiparArma(arma){
        if (arma instanceof Arma){
            this.#arma = arma;
            console.log(`${this.getNombre} ha equipado el arma ${arma.getNombre}.`);
        }
        else console.log("Error. Tipo de atributo incorrecto.");
    }

    //imprime que el guerrero ataca con su arma, indicando el daño causado
    luchar(){
        console.log(`${this.getNombre} ataca con su ${this.#arma.getNombre}, causando ${this.#arma.getDanio} puntos.`);
    }

    //imprime que el guerrero se entrena para la próxima batalla
    entrenar(){
        console.log(`${this.getNombre} se entrena sin descanso para la próxima batalla.`);
    }

    //actualiza el estado de vida restando puntos y en caso de morir llamar al método
    recibirDanio(puntos){
        this.#vida -= puntos;
        if(this.#vida <= 0){
            this.#vida = 0;
            this.morir(); 
        }
    }
    
    //ataque de punto aleatorio al personaje indicado por parámetro
    atacar(objetivo){
        let danio = Math.floor(this.#arma.getDanio * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
        console.log(`${this.getNombre} ataca a ${objetivo.getNombre} causando ${danio} puntos de daño.`);
        objetivo.recibirDanio(danio);
    }
}
