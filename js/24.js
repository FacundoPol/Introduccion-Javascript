//FOR LOOP

// for(let i = 0; i < 11; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     } else{
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

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
for(let i=0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);
}
