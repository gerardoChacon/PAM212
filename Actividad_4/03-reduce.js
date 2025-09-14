//Importando el arreglo a este archivo
import {maestros} from "./findNfilter.js";

/* array.reduce((acumulador, elementoActual) => {
  return nuevoAcumulador;
}, valorInicial); */


//Usando el Spread Operator para concatenar los arrays en uno solo
let resultado = maestros.reduce((arrayFinal, maestro) => {
    return [...arrayFinal, ...maestro.materias] 
}, []);

console.log("reduce()");
console.log(resultado);

