//Classes

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    nuevoProducto() {
        return `El precio del producto es de $ ${this.precio}`;
    }
}

const producto = new Producto(`Monitor Curvo 49"`,800);
const producto2 = new Producto(`Laptop`,1000);
const producto3 = new Producto(`Headset`,400);

console.log(producto.nuevoProducto());
console.log(producto2.nuevoProducto());
console.log(producto3.nuevoProducto());