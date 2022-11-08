//This

const reservacion = {
    nombre: `Juan`,
    apellido: `De la Torre`,
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`); // NO se puede usar row function con this porque sino el resultado seria undefined.
    }
 }

 const reservacion2 = {
    nombre:`Facundo`,
    apellido:`Pol`,
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
 }
reservacion.informacion();
reservacion2.informacion();