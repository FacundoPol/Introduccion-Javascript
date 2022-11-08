const producto = {
    nombreProducto: "Monitor de 20 pulgadas", //Propiedad
    precio: 300, //Propiedad
    disponible: true //Propiedad
}

const medidas = {
    peso: "1k",
    medida: "1m"
}

//rest Oprator

const nuevoProducto = {...producto, ...medidas};

console.log(producto);

console.log(nuevoProducto);
