//STRING = Cadenas de texto

//const producto = "Monitor de 20\"";
// const producto2 = String("Monitor de 30\"");     //No son formas muy comunes de crearlos
// const psroducto3 = new String("Monitor de 50\""); // No son formas muy comunes de crearlos

//console.log(producto);
//console.log(typeof producto2); // No son formas muy comunes de crearlos
//console.log(typeof preoducto3); // No son formas muy comunes de crearlos

//Metodos para los strings

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"; 
const producto2 = "Monitor HD";
const email = "correo@correo.com";

 //length es para la extension

 console.log(tweet.length);
 console.log(producto2);

 //IndexOf (retorna posicion)
 console.log(tweet.indexOf("JavaScript"));
 console.log(producto2.indexOf("Tablet"));
 console.log(email.indexOf("@"));

 //Includes (retorna true o  false) (es mas moderno)

 console.log(tweet.includes("JavaScript"));
 console.log(producto2.includes("Tablet"));
