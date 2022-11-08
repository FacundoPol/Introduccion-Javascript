//Arrow Functions
// const sumar2 = function(n1,n2) { // Forma anterior de armar una funcion
//     console.log(n1 + n2);
// }

// sumar2(5,10);

//Arrow

const sumar2 = (n1,n2) => console.log(n1 + n2);
sumar2(5,10);


//Arrow estructura basica

// const aprendiendo = (tecnologia) => {
//     console.log('Aprendiendo ${tecnologia}')
// }
// aprendiendo('JavaScript');

//Arrow simplificada
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');

//Metodos de Arrays // SE USO EL 15.js  PARA EJEMPLIFICAR LA REDUCCION DE UNA f(x) CON ARROW.

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

meses.forEach (mes => {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Includes para Arrays sin objetos

let resultado = meses.includes('Diciembre');

//Some ideal para Arrays de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular');
 
//Reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter

resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter( producto => producto.nombre !== 'Celular');

console.log(resultado);