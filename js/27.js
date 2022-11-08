//Poo

// Object Literal

// const producto = {
//     nombre: `Tablet`,
//     precio: 500
// }

//Object Constructor

// function producto(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
// }

// const producto2 = new producto(`Monitor Curvo 49"`, 800);
// const producto3 = new producto(`Laptop`, 300);

// console.log(producto2);
// console.log(producto3);

//PROTOTYPE

function producto(nombre, precio) {
     this.nombre = nombre;
     this.precio = precio;
}

producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

const producto2 = new producto(`Monitor Curvo 49"`, 800);
const producto3 = new producto(`Laptop`, 300);

const Cliente2 = new Cliente (`Facundo`,`Pol`);
const Cliente3 = new Cliente (`Ramiro`,`Vega`);

console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );

console.log(Cliente2.formatearCliente() );
console.log(Cliente3.formatearCliente() );
