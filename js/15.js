//Metodos de Arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor de 20 pulgdas', precio: 500 },
    { nombre: 'Television de 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 400 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Parlantes', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

//forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes para Arrays sin objetos

let resultado = meses.includes('Diciembre');

//Some ideal para Arrays de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
});

//Reduce

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

//Filter

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular' 
});

console.log(resultado);