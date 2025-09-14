//Creación de un arreglo de objetos:
//Exportar arreglo de objetos "maestros" para usar en otros archivos
export let maestros = [
    {
        id: 1,
        nombre: "Ivan Isay Guerra Lopez",
        materias: ["POO", "Desarrollo de Aplicaciones Móviles"],
        grupos: [212, 101, 305]
    },

    {
        id: 2,
        nombre: "Francisco Antonio Castillo Velásquez",
        materias: ["POO", "Estructura de Datos"],
        grupos: [212, 216]
    },

     {
        id: 3,
        nombre: "Lilia Jimenez Cruz",
        materias: ["Física", "Sistemas Operativos", "Aplicaciones Web"],
        grupos: [212, 215, 216, 217]
    }
];

/* 
find solo devuelve un solo resultado, es decir, si quiero buscar varios profesores
que les den clases a un grupo específico solo me va a devolver el primer objeto
que encuentre. Para buscar varios objetos hay que usar filter.
 */

let resultado = maestros.find((maestro, indice, array) => {
    console.log("Estoy revisando: ", maestro.id, "en posición ", indice, "en el array", array );
    return maestro.id == 1;
});

console.log("Maestros con find(): ");
console.log(resultado);

let resultadoDos = maestros.filter(maestro => maestro.grupos.includes(216));
console.log("Maestros con filter():");
console.log(resultadoDos);