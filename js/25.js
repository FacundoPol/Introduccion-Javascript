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

//forEach  //Son metodos exclusivos de arrays // SE USA PARA Motrar elementos en pantalla o enviarlos a la consola
carrito.forEach( producto => console.log(producto.nombre));

//map  //Son metodos exclusivos de arrays // SE USA PARA Crear un nuevo arreglo
const array2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(array2);