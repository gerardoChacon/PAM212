let numeros = [10, 20, 30];

numeros.forEach(function(num, indice, arr) {
  console.log(this.value, "Elemento:", num, "Índice:", indice, "Array:", arr, );
}, { value: "soy un forEach:" });
