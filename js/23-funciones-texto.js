//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript, curso especializado";
var texto2 = "Es un master en JavaScript";

var dato = numero.toString();
console.log(dato);

dato = texto1.toUpperCase();
console.log(dato);

dato = texto2.toLowerCase();
console.log(dato);

//Calcular longitud

var nombre = "Master JavaScript";
console.log(nombre.length);

nombre = ["hola", "hola"];
console.log(nombre.length);

//Concatenar = Unir textos

var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

var textoTotal1 = texto1.concat(" " + texto2);
console.log(textoTotal1);

//Buscar una palabra en un string

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda1 = texto1.search("curso");
console.log(busqueda1);

var busqueda2 = texto1.match(/curso/g);
console.log(busqueda2);

var busqueda3 = texto1.substr(14, 5);
console.log(busqueda3);

var busqueda4 = texto1.charAt(17);
console.log(busqueda4);

var busqueda5 = texto1.includes("JavaScript");
console.log(busqueda5);

//Modificar un string

var busqueda6 = texto1.replace("JavaScript", "Laravel");
console.log(busqueda6);

var busqueda7 = texto1.slice(14, 19);
console.log(busqueda7);

var busqueda8 = texto1.split(" ");
console.log(busqueda8);


