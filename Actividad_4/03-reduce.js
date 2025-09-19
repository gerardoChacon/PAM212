//Importando el arreglo de objetos "maestros" a este archivo
import {maestros} from "./02-findNfilter.js";

//Usando el Spread Operator para concatenar los arrays en uno solo
let resultado = maestros.reduce((arrayFinal, maestro) => {
    return [...arrayFinal, ...maestro.materias] 
}, []);

console.log("reduce()");
console.log(resultado);


