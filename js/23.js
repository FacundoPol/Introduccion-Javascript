//SWITCH

const metodoPago = `efectivo`;

switch(metodoPago) {
    case `tarjeta`:
        console.log(`Pagaste con tarjeta`);
        break;
    case `cheque`:
        console.log(`Revisaremos los fondos primero`);
        break;
    case `efectivo`:
        console.log(`Pagaste con efectivo`);
        break;
    default:
        console.log(`Todavia no has pagado`);
        break;
}