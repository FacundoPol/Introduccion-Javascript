//Arreglo o Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

//Acceder a los valores de un arrreglo 

// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]); // No lo muestra porque no existe

// //Coonocer la extension(cantidad) de un arreglo

// console.log(meses.length);

// numero.forEach(  function(numero){
//     console.log(numeros);
// })

//Metodos para Agregar o quitar Arrays

//numeros [2] = 60; // No es la forma mas recomendada

// numeros.push(60,70,80); // Agrega al final del Array
// numeros.unshift(-10,-20,-30); //Agrega al principio del Array

// console.table(numeros);

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); // Elimina el ultimo elemento
// meses.shift(); // Elimina el primer elemento
// meses.splice(2, 1); // Elimina una propiedad especifica

// console.table(meses);

// //REST OPERATOR O SPREAD OPERATOR //Nuevos metodos para modificar un Array de mejor forma

// const nuevoArreglo = [...meses, 'Junio'];
// console.log(nuevoArreglo);

// // o para agregarlo al principio

// const nuevoArreglo = ['Junio', ...meses];
// console.log(nuevoArreglo);