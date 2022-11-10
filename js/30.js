//Promises en JS

const usuarioAutenticado = new Promise((resolve,reject) => { // ESTRUCTURA BASICA DE PROMISE
    const auth = true;

    if(auth){
        resolve(`Usuario Autenticado`); // EL PROMISE SE CUMPLE
    } else {
        reject(`No se pudo Iniciar Sesion`); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado.then( resultado => console.log(resultado));
usuarioAutenticado.catch( error => console.log(error));

//En los Promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio
//Rejected: Se ha rechazado o no se ha cumplido