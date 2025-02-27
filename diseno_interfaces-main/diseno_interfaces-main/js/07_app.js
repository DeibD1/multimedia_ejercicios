//METODOS MAS USADOS .REPLACE .SLICE Y .REPEAT
const producto = "Monitor de 20 pulgadas";
const texto = "En Promocion".repeat(3);

console.log(producto.replace("20", "25"));
console.log(producto.replace("Monitor", "Monitor oled Curvo"));

//Slice nos permite extraer una parte de una cadena
console.log(producto.length);
console.log(producto.slice(0, 10)); //Inicia en 0 y corta la cadena hasta 10
console.log(producto.slice(8)); //DESDE UNA PARTE EN ESPECIFICO
console.log(producto.slice(2, 1)); //Si el n1 es mayor y el otro menor sale vacio

//EXISTE ALGO SIMILAR AL SLICE QUE SE DENOMINA SUBSTRING
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));
/*Diferencia entre slice y substring
sub acomoda las posiciones cuando el ve que el numero
es mayor va a cortar hacia atras, voltea los numeros*/

//Metodo que solo me toma la primera letra

console.log(producto.charAt(0));

//EJERCICIOS

/*CREAR UNA VARIABLE CUALQUIERA Y MUESTRE CUANTOS CARACTERES TIENE
PUEDE SER EL NOMBRE Y APELLIDOS
Y SOLO DEJEN LOS DOS NOMBRES EN UN CONSOLE.LOG*/

const nombre = "Juan David Acosta Basto";

console.log(nombre.length);
console.log(nombre.substring(0,11));
console.log(texto);
console.log(producto.repeat(2.8));
//Recoger todo lo aprendido
console.log(`${producto} ${texto}!!!`);

//Split

const actividad = "Estoy aprendiendo JS";
console.log(actividad.split("")) //ESTO ME DEVUELVE UN ARRAY CONTANDO LOS CARACTERES

const hobbies = "leer, caminar, escuchar musica, jugar";
console.log(hobbies.split(", "));//ESTO ES PARA SEPARAR EN UNA LISTA
//CUANDO TENEMOS UN TEXTO COMO LA VARIABLE HOBBIES
/* EJ
1- LEER
2- CAMINAR...*/




