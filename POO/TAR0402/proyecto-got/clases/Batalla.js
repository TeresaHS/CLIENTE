import { Casa } from "./Casa.js";
import { Guerrero } from "./personajesEspeciales/Guerrero.js";
import { Dragon } from "./personajesEspeciales/Dragon.js";
import { CaminanteBlanco } from "./personajesEspeciales/CaminanteBlanco.js";

export class Batalla{

    #guerrerosMuertos;
    #guerrerosSupervivientes;
    #enCurso;

    constructor(){
        this.#guerrerosMuertos = [];
        this.#guerrerosSupervivientes = [];
        this.#enCurso = false;
    }

    //getters && setters
    get getGuerrerosMuertos(){return this.#guerrerosMuertos;}
    set setGuerrerosMuertos(guerrerosMuertos){this.#guerrerosMuertos = guerrerosMuertos;}
    get getGuerrerosSupervivientes(){return this.#guerrerosSupervivientes;}
    set setGuerrerosSupervivientes(guerrerosSupervivientes){this.#guerrerosSupervivientes = guerrerosSupervivientes;}
    get getEnCurso(){return this.#enCurso;}
    set setEnCurso(enCurso){this.#enCurso = enCurso;}

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

    mostrarGuerrerosMuertosEnCombate(){
        console.log(this.#guerrerosMuertos);
    }

    mostrarSupervivientes(){
        console.log(this.#guerrerosSupervivientes);
    }

    batallaFinal(casaStark, khaleesi, caminantes) {

        if (!this.#enCurso) {
            this.#enCurso = true;

            let aliados = [...casaStark.getMiembros.filter(m => m instanceof Guerrero && m.getVivo), ...khaleesi.getDragones.filter(d => d instanceof Dragon && d.getVivo)];
            let enemigos = caminantes.filter(c => c instanceof CaminanteBlanco && c.getVivo);

            if (aliados.length > 0 && enemigos.length > 0) {

                console.log(`Aliados:`);
                console.log(aliados);
                console.log(`Enemigos:`);
                console.log(enemigos);
                console.log('\n ¡COMIENZA LA BATALLA FINAL!');

                do {
                    // siempre trabajo con el primero del array
                    // shift - unshift + [] + push - pop
                    
                    let aliado = aliados[0];
                    let enemigo = enemigos[0];

                    console.log(`\n Nuevo enfrentamiento: ${aliado.getNombre} vs ${enemigo.getNombre}`);

                    aliado.atacar(enemigo);

                    if (enemigo.getVivo) enemigo.atacar(aliado);

                    console.log(`${aliado.getNombre}: ${aliado.getVida} | ${enemigo.getNombre}: ${enemigo.getVida}`);

                    if (!aliado.getVivo) this.#guerrerosMuertos.push(aliados.shift());
                    if (!enemigo.getVivo) this.#guerrerosMuertos.push(enemigos.shift());

                } while (aliados.length > 0 && enemigos.length > 0);

                if (aliados.length === 0) console.log(`\n Los Caminantes Blancos han ganado. El invierno se extiende.`);
                else console.log(`\n ¡Los vivos han ganado! El fuego y el acero valyrio triunfan.`);

                this.#guerrerosSupervivientes.push(...aliados, ...enemigos);

            }
            else console.log('Error. Algún ejército está vacío.');

            this.#enCurso = false;
        }
        else console.log('Error. Ya hay una batalla en curso.');
    }

}