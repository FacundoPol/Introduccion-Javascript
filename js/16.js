//Funciones

//Declaracion de la funcion
function sumar() {
    console.log(10 + 10);
}

sumar();

//Expresion de la funcion

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

//IIFE // Sirve para proteger que no se mezclen las variables y funciones con las de otros archivos
(function() {
    console.log('Esto es una funcion');
})();