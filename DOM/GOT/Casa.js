export class Casa {
    #region;
    #emblema;
    #lema;
    #personajes;
    #caracteristicas;
    #imagen;

    constructor(region = null, emblema = null, lema = null, personajes = null, caracteristicas = null, imagen = null){
        this.#region = region;
        this.#emblema = emblema;
        this.#lema = lema;
        this.#personajes = personajes;
        this.#caracteristicas = caracteristicas;
        this.#imagen = imagen;
    }

    //getters y setters

    set setRegion(region){ this.#region = region; };
    get getRegion(){ return this.#region; };

    set setEmblema(emblema){ this.#emblema = emblema; };
    get getEmblema(){ return this.#emblema; };

    set setLema(lema){ this.#lema = lema; };
    get getLema(){ return this.#lema; };

    set setPersonajes(personajes){ this.#personajes = personajes; };
    get getPersonajes(){ return this.#personajes; };

    set setCaracteristicas(caracteristicas){ this.#caracteristicas = caracteristicas; };
    get getCaracteristicas(){ return this.#caracteristicas; };

    set setImagen(imagen){ this.#imagen = imagen; };
    get getImagen(){ return this.#imagen; };
}