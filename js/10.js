//Objetos

const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //Propiedad
    precio: 300, //Propiedad
    disponible: true //Propiedad
}

console.log(producto);

// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

// Otra forma de mostrar especificamente

// console.log(producto["precio"]);

//Modificar Objetos

//Agregar nuenas Propiedades

producto.imagen = "imagen.jpg";

//Eliminar Propiedades

delete producto.disponible;

console.log(producto);
