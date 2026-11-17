import { Casa } from "./Casa.js";

//creo las casas
let casas = {
  casa1: new Casa("El Norte","Lobo huargo gris sobre fondo blanco.","«Se acerca el invierno».",["Eddard","Robb","Sansa","Arya","Bran Stark"],"Honor, lealtad y tradición.","img1.jpeg"),
  casa2: new Casa("Tierras de la Corona","Dragón rojo de tres cabezas sobre fondo negro.","«Fuego y sangre».",["Daenerys","Viserys","Aegon Targaryen"],"Antigua dinastía real vinculada a los dragones.","img2.jpeg"),
  casa3: new Casa("Tierras de la Tormenta","Ciervo negro coronado sobre fondo dorado.","«Nuestra es la furia».",["Robert","Stannis","Renly Baratheon"],"Fuerza, orgullo y espíritu guerrero.","img3.jpeg"),
  casa4: new Casa("El Valle de Arryn","Halcón y luna blanca sobre fondo azul.","«Tan alto como el honor».",["Jon Arryn","Robin Arryn"],"Una fortaleza situada en lo alto de las montañas.","img4.jpeg"),
  casa5: new Casa("Occidente","León dorado sobre fondo carmesí.","«¡Oye mi rugido!».",["Tywin","Cersei","Jaime","Tyrion Lannister"],"Riqueza, poder político y ambición.","img5.jpeg"),
  casa6: new Casa("Islas del Hierro","Kraken dorado sobre fondo negro.","«Nosotros no sembramos».",["Balon","Theon","Yara Greyjoy"],"Navegación, independencia y tradición marinera.","img6.jpeg"),
  casa7: new Casa("Tierras de los Ríos","Trucha plateada sobre fondo azul y rojo.","«Familia, deber, honor».",["Hoster","Edmure","Catelyn Tully"],"Lealtad familiar y alianzas políticas.","img7.jpeg"),
  casa8: new Casa("El Dominio","Rosa dorada sobre fondo verde.","«Crecer fuerte».",["Mace","Margaery","Olenna Tyrell"],"Riqueza agrícola, diplomacia e influencia.","img8.jpeg"),
  casa9: new Casa("El Norte","Hombre desollado sobre fondo rojo.","«Nuestras hojas son afiladas».",["Roose","Ramsay Bolton"],"Una casa norteña conocida por su crueldad y rivalidad histórica con los Stark.","img9.jpeg"),
  casa10: new Casa("Dorne","Sol rojo atravesado por una lanza sobre fondo naranja.","«Nunca doblegado, nunca roto».",["Doran","Oberyn","Trystane Martell"],"Independencia, orgullo y resistencia.","img10.jpeg")
};

let tarjeta = document.getElementById('tarjeta');

document.querySelectorAll('.identificar').forEach(caja => {
    

    //las casas que no tengan datos, con el clic se ve la tarjeta con texto informativo
    if (caja.id.startsWith('sinRegistro')){
        caja.addEventListener('click', () => { 
            tarjeta.innerHTML = `
                <div>
                    <h1>Casa sin registro</h1>
                    <p>No hay información disponible sobre esta casa.</p>
                </div>
            `;
            tarjeta.classList.remove('oculta');
        });
    }

    //y si la casa si existe, entonces lo que hago es asignar sus datos a la tarjeta
    else {
        caja.addEventListener('mouseenter', () => {
            
            let casa = casas[caja.id]; // con el foreach puedo usar el id que guardé y usar esa casa (porque se llaman igual)

            tarjeta.innerHTML = `
                <div>
                    <h1>${casa.getRegion}</h1>
                    <p>${casa.getEmblema}</p>
                    <p>${casa.getLema}</p>
                    <p>${casa.getPersonajes.join(', ')}</p>
                    <p>${casa.getCaracteristicas}</p>
                </div>
                <img src="./images/${casa.getImagen}" alt="${casa.getRegion}">
            `;
            tarjeta.classList.remove('oculta');
        });

        caja.addEventListener('mouseleave', () => {
            tarjeta.classList.add('oculta');
        });
    }
});