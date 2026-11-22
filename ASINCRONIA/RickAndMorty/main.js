console.log('Fetch API');
const btnThen = document.getElementById('botonThen');
const btnAsync = document.getElementById('botonAsync');
const btnBorrar = document.getElementById('botonBorrar');
const section = document.getElementById('sectionImagenes');

function borrarImagenes(){
    section.innerHTML = ``;
}

btnThen.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => rendersCharacters(data.results,'then'));
});

btnAsync.addEventListener('click', async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        rendersCharacters(data.results,'async await');
    } catch (error) {
        console.error('Error:', error);
    }
});

btnBorrar.addEventListener('click', borrarImagenes); // al pasar la funcion no se pone paréntesis

function rendersCharacters(characters, tipo) {

    borrarImagenes();

    characters.forEach(element => {
        section.innerHTML += `<div><img src="${element.image}"><p>${tipo}</p><div>`;
    });
}