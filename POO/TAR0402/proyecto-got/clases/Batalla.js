import { Casa } from "./Casa.js";
import { Guerrero } from "./personajesEspeciales/Guerrero.js";

//clase donde se gestiona la batalla entre casas
export class Batalla{

    #guerrerosMuertos;
    #guerrerosSupervivientes;
    #enCurso;

    //siempre se hace el new sin parámetros
    constructor(){
        this.#guerrerosMuertos = [];
        this.#guerrerosSupervivientes = [];
        this.#enCurso = false;
    }

    //método que realiza la batalla
    iniciarBatalla(casaA, casaB){
        
        if(!this.#enCurso){
            this.#enCurso = true;
            if(casaA instanceof Casa && casaB instanceof Casa){

                if(casaA !== casaB){
                    let guerrerosCasaA = casaA.getMiembros.filter(miembro => miembro instanceof Guerrero && miembro.getVivo);
                    let guerrerosCasaB = casaB.getMiembros.filter(miembro => miembro instanceof Guerrero && miembro.getVivo);

                    if(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
                        console.log('Iniciamos la lucha...');
                        
                        console.log(`Los guerreros que pelearán de la casa ${casaA.getNombre} serán los siguientes:`);
                        console.log(guerrerosCasaA);
                        console.log(`Los guerreros que pelearán de la casa ${casaB.getNombre} serán los siguientes:`);
                        console.log(guerrerosCasaB);

                        // siempre trabajo con el primero del array
                        // shift - unshift + [] + push - pop
                        do{
                            console.log(`\n Nuevo enfrentamiento: ${guerrerosCasaA[0].getNombre} vs ${guerrerosCasaB[0].getNombre}`);
                            guerrerosCasaA[0].atacar(guerrerosCasaB[0]);
                            if(guerrerosCasaB[0].getVivo) guerrerosCasaB[0].atacar(guerrerosCasaA[0]);
                            
                            console.log(`${guerrerosCasaA[0].getNombre}: ${guerrerosCasaA[0].getVida} | ${guerrerosCasaB[0].getNombre}: ${guerrerosCasaB[0].getVida}`);

                            if(!guerrerosCasaA[0].getVivo) this.#guerrerosMuertos.push(guerrerosCasaA.shift());
                            if(!guerrerosCasaB[0].getVivo) this.#guerrerosMuertos.push(guerrerosCasaB.shift());
                            
                        }while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0);

                        if(guerrerosCasaA.length === 0) console.log(`La batalla ha sido ganada por la Casa ${casaB.getNombre}`);
                        else console.log(`La batalla ha sido ganada por la Casa ${casaA.getNombre}`);

                        //añado al array los que siguen vivos, es decir, los que queden dentro de alguno de los dos arrays, que es el bando o casa que ha ganado
                        this.#guerrerosSupervivientes.push(...guerrerosCasaA, ...guerrerosCasaB);

                    }
                    else console.log('Error. No se cumple que ambas casas tengan guerreros vivos.');

                }
                else console.log('Error. Una casa no se puede enfrentar a sí misma.');
                
            }
            else console.log('Error. Tipo de atributo incorrecto.');
            this.#enCurso = false;
        }
        else console.log('Error. Ya hay una batalla en curso.');
    }

    //imprime array de guerreros que han muerto en combate
    mostrarGuerrerosMuertosEnCombate(){
        console.log(this.#guerrerosMuertos);
    }

    //imprime array de guerreros supervivientes
    mostrarSupervivientes(){
        console.log(this.#guerrerosSupervivientes);
    }

}