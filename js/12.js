//"use strict"; //Correr JS en modo estricto
//Objetos

const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //Propiedad
    precio: 300, //Propiedad
    disponible: true //Propiedad
}
//  Object.freeze(producto); //No permite agregar ni eliminar nuevas propiedades tampoco permite modificarlos.
Object.seal(producto); // No permite agregar ni eliminar nuevas propiedades PERO permite modificar.

producto.precio = 'NUEVO PRECIO';

// console.log(Object.isFreeze(producto));

console.log(producto);