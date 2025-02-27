const producto = "monitor de 20 pulgadas"
const precio = 30
console.log(producto.length) // para ver la cantidad de caracteres
console.log(precio)//si se le aplica length a un numero este dara indefinido debido a que es incompatible

//METODOS DE TEXTO
//Como buscar dentro de una cadena de texto una palabra (IndexOf)
console.log(producto.indexOf("pulgadas"))//Esto devuelve la posicion en la que esta el texto
console.log(producto.indexOf("Tablet"))// Si no existe va a arrojar un -1
//Includes
//Para buscar si existe de una palabra o no
console.log(producto.includes("monitor"))

