// Como cortar espacios en blanco
const producto = "        Monitor de 20 pulgadas";

console.log(producto);
//Los metodos en js se pueden encadenar
console.log(producto.trimStart().trimEnd());
//OTRA FORMA
//un metodo que lleva tiempo es trim que hace lo mismo
console.log(producto.trim());
