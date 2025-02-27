//Vamos a unir 2 textos o variables
const producto = "Monitor de 20 pulgadas";
const precio = "30 USD";

console.log(producto.concat("En descuento ",precio)); //Concatenar

//OTRAS FORMAS DE CONCATENAR

console.log(producto + " " + precio);
console.log(producto + "Con un precio de"+ " " + precio); //Se puede complicar a veces
console.log("El producto ", producto, "tiene un precio de", precio);

// ES6 Trajo consigo una mejor forma de concatenar que es con algo llamado template string

console.log(`El producto ${producto} tiene un precio de ${precio}`);

