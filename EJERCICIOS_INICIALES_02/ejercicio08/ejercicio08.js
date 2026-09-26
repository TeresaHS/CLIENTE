// Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

function ejercicio08(mes="enero"){

    mes = String(mes).toLowerCase(); // no es realmente necesario el String porque pido por prompt que devuelve cadena, pero mejor validar

    if(meses.includes(mes)){
        switch(mes){
            case meses[0]: case meses[1]: case meses[2]: case meses[3]:
                console.log(`El mes ${mes} es del primer cuatrimestre`);
                break;
            case meses[4]: case meses[5]: case meses[6]: case meses[7]:
                console.log(`El mes ${mes} es del segundo cuatrimestre`);
                break;
            case meses[8]: case meses[9]: case meses[10]: case meses[11]:
                console.log(`El mes ${mes} es del tercer cuatrimestre`);
                break;
        }
    }
    else console.log(`El mes ${mes} no es válido`);
}

ejercicio08(prompt("Mes:"));

// VERSION ADAPTADA A EXPRESIÓN DE FUNCIÓN -------------------------------------------------------------

const averiguarCuatrimestre = function(mes="enero"){
    
    mes = String(mes).toLowerCase(); // no es realmente necesario el String porque pido por prompt que devuelve cadena, pero mejor validar

    if(meses.includes(mes)){
        switch(mes){
            case meses[0]: case meses[1]: case meses[2]: case meses[3]:
                console.log(`El mes ${mes} es del primer cuatrimestre`);
                break;
            case meses[4]: case meses[5]: case meses[6]: case meses[7]:
                console.log(`El mes ${mes} es del segundo cuatrimestre`);
                break;
            case meses[8]: case meses[9]: case meses[10]: case meses[11]:
                console.log(`El mes ${mes} es del tercer cuatrimestre`);
                break;
        }
    }
    else console.log(`El mes ${mes} no es válido`);
};

averiguarCuatrimestre(prompt("Mes:"));

// VERSION ADAPTADA FUNCION FLECHA --------------------------------------------------------------------

const averiguarCuatrimestre2 = (mes="enero") => {
    
    mes = String(mes).toLowerCase(); // no es realmente necesario el String porque pido por prompt que devuelve cadena, pero mejor validar

    if(meses.includes(mes)){
        switch(mes){
            case meses[0]: case meses[1]: case meses[2]: case meses[3]:
                console.log(`El mes ${mes} es del primer cuatrimestre`);
                break;
            case meses[4]: case meses[5]: case meses[6]: case meses[7]:
                console.log(`El mes ${mes} es del segundo cuatrimestre`);
                break;
            case meses[8]: case meses[9]: case meses[10]: case meses[11]:
                console.log(`El mes ${mes} es del tercer cuatrimestre`);
                break;
        }
    }
    else console.log(`El mes ${mes} no es válido`);
};

averiguarCuatrimestre2(prompt("Mes:"));