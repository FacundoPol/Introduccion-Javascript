//Objetos

const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //Propiedad
    precio: 300, //Propiedad
    disponible: true //Propiedad
}
 //Forma Anterior
//  const precioProducto = producto.precio;
//  const nombreProducto = producto.nombreProducto;

//  console.log(precioProducto);
//  console.log(nombreProducto);

 //Destructuring
 const {precio, nombreProducto } = producto;

 console.log(precio);
 console.log(nombreProducto);
