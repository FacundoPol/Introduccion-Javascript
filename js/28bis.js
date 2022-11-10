class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

}

const producto = new Producto(`Monitor Curvo 49"`,800);
const producto2 = new Producto(`Laptop`,1000);

//HERENCIA

class Libro extends Producto {
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro(`JavaScript la Revolucion`, 120, `97827747387374`);

console.log(libro.formatearProducto() );
console.log(producto2.formatearProducto());