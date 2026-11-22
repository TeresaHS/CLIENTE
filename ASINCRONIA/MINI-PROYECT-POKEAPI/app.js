// aqui guardo la url base de la api para no repetirla todo el rato y si cambia pues la cambio una vez
const API_URL = "https://pokeapi.co/api/v2";

// la api espera los tipos en ingles, asi que traduzco lo que elijo en el select a lo que entiende la api
const TIPOS_API = {
    agua: "water",
    fuego: "fire",
    planta: "grass",
    electrico: "electric"
};

const coleccion = [];

const inputPokemon = document.getElementById("pokemon-input");
const pokemonData = document.getElementById("pokemon-data");
const collectionList = document.getElementById("collection-list");
const resultSection = document.getElementById("result-section");
const collectionSection = document.getElementById("collection-section");

// ejercicio 1 uso async/await porque se lee mas facil
async function buscarPokemon(){
    try {
        // leo lo que ha escrito el usuario y le quito los espacios de los lado
        const nombre = inputPokemon.value.trim();
        if(!nombre){
            mostrarError("Introduce un nombre o ID");
            return;
        }

        // hago la peticion a la api, espero a que llegue la respuesta
        const respuesta = await fetch(`${API_URL}/pokemon/${nombre.toLowerCase()}`);

        // fetch manda error si el pokemon no existe, asi que lo compruebo yo
        if(!respuesta.ok) throw new Error("Pokemon no encontrado");

        // convierto la respuesta a json para poder leer los datos
        const datos = await respuesta.json();
        mostrarPokemon(datos);
    } catch(error){
        mostrarError(error.message);
    }
}

document.getElementById('search-btn').addEventListener('click', buscarPokemon);

function buscarPokemonJQueryAJAX(){
    const nombre = inputPokemon.value.trim();
    if(!nombre){
        mostrarError("Introduce un nombre o ID");
        return;
    }

    // con jquery le digo la url, el metodo, que espere json y que haga esto si va bien o mal
    $.ajax({
        url: `${API_URL}/pokemon/${nombre.toLowerCase()}`,
        method: "GET",
        dataType: "json",
        success: function (datos) { mostrarPokemon(datos); },
        error: function () { mostrarError("Pokemon no encontrado");}
    });
}

// ejercicio 2 la misma busqueda pero con then/catch en vez de async/await
function buscarPokemonPromesas(){
    const nombre = inputPokemon.value.trim();
    if (!nombre) {
        mostrarError("Introduce un nombre o ID");
        return;
    }

    // primero pido, luego compruebo, luego convierto a json y luego pinto
    fetch(`${API_URL}/pokemon/${nombre.toLowerCase()}`)
        .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Pokemon no encontrado");
            return respuesta.json();
        })
        .then((datos) => mostrarPokemon(datos))
        .catch((error) => mostrarError(error.message));
}

// aqui pinto el pokemon que me llega, con su nombre, su id, su sprite y un boton para capturarlo
function mostrarPokemon(datos){
    pokemonData.innerHTML = `
        <p>Nombre: ${datos.name}</p>
        <small>ID: ${datos.id}</small>
        <img src="${datos.sprites.front_default}" alt="${datos.name}">
        <br>
        <button id="add-to-collection-btn">Agregar a la coleccion</button>`;
    document.getElementById("add-to-collection-btn").addEventListener("click", () => agregarAColeccion(datos));
}

// esto solo pinta un mensaje de error en la caja de resultados
function mostrarError(mensaje){ pokemonData.innerHTML = `<p>${mensaje}</p>`;}

// aqui meto el pokemon en la coleccion, pero antes miro que no este ya repetido por su id
function agregarAColeccion(pokemon) {
    if (coleccion.some((p) => p.id === pokemon.id)){
        alert("Ese Pokemon ya esta en la coleccion");
        return;
    }

    coleccion.push({
        id: pokemon.id,
        nombre: pokemon.name,
        sprite: pokemon.sprites.front_default
    });

    alert("Pokemon agregado a la coleccion");
}

// aqui recorro mi coleccion y la pinto en su caja, si esta vacia aviso
function verColeccion(){
    if (coleccion.length === 0){
        collectionList.innerHTML = "<p>La coleccion esta vacia</p>";
        return;
    }

    collectionList.innerHTML = "";
    coleccion.forEach((p) => {
        collectionList.innerHTML += `
        <div class="collection-item">
            <h3>${p.nombre}</h3>
            <img src="${p.sprite}" alt="${p.nombre}">
        </div>`;
    });
}

// ejercicio 5 filtro por tipo usando promise.all
async function filtrarPorTipo(){
    // leo el tipo que ha elegido en el select y lo traduzco al ingles
    const tipoEspanol = document.getElementById("selectTipo").value;
    const tipoIngles = TIPOS_API[tipoEspanol];
    const filterResult = document.getElementById("filter-result");

    if(!tipoIngles) {
        filterResult.innerHTML = "<p>Selecciona un tipo</p>";
        return;
    }

    try {
        // pido a la api todos los pokemon de ese tipo
        const respTipo = await fetch(`${API_URL}/type/${tipoIngles}`);

        if(!respTipo.ok) throw new Error("Tipo no encontrado");

        const datosTipo = await respTipo.json();
        const primeros5 = datosTipo.pokemon.slice(0, 5);

        // con promise.all lanzo las cinco peticiones de detalle a la vez y espero a que terminen todas
        const detalles = await Promise.all(primeros5.map((p) => fetch(p.pokemon.url).then((r) => r.json())));

        filterResult.innerHTML = "";

        detalles.forEach((pokemon) => {
            filterResult.innerHTML += `
            <div class="collection-item">
                <h3>${pokemon.name}</h3>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>`;
        });
    } catch(error){
        filterResult.innerHTML = `<p>${error.message}</p>`;
    }
}

document.getElementById("view-collection-btn").addEventListener("click", verColeccion);
document.getElementById("filter-btn").addEventListener("click", filtrarPorTipo);