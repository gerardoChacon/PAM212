import {maestros} from "./02-findNfilter.js";

let resultado = maestros.reduce((arrayFinal, maestro) => {
    maestro.materias.forEach(materia => {
        if(!arrayFinal.includes(materia)){
        arrayFinal.push(materia);
    }
        
    });
    

    return arrayFinal;
} 
, []);

console.log(resultado);