// //ESTRUCTURAS DE CONTROL

// const puntaje = 1000;

// if(puntaje == 1000) { // Conectores condicionales son ==(no es tan estricto) ===(es mucho mas estrico para la comparativa) !==(diferente)
//     console.log(`Si el puntaje es 1000`);
// }
// else {
//     console.log(`No es igual`);
// }

// const efectivo = 1000;
// const carrrito = 800;

// if(efectivo > carrito){
//     console.log(`El Usuario puede pagar`);
// } 
// else{
//     console.log(`Fondos Insuficientes`);
// }

const rol = `ADMINISTRADOR`;

if(rol === `ADMINISTRADOR`) {
    console.log(`Acceso a todo el sistema`);
}
else if (rol === `EDITOR`) {
    console.log(`Tienes acceso limitado`);
} else{
    console.log(`No tienes Acceso`);
}