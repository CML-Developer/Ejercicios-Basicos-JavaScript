/*
1) Pida 7 numeros por pantalla y los meta en un array
2) Mostrar el array (todos sus elementos) en el cuerpo de la pagina y en la consola
3) Ordenar y mostrar el array
4) Invertir su orden y mostarlo
5) Mostrar cuentos elementos tiene el array
6) Busqueda de un valor introducido por el usuario
7) Que nos diga si lo encuentra y su indice
*/

//Pedir 7 numeros
var numeros = [];

for(var i = 0; i <= 6; i++){
    numeros[i] = parseInt(prompt("Introduce un numero:"));
}

//Mostrar en el cuerpo de la pagina
document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) =>{
    document.write("<strong>"+numero+"</strong><br/>");
});

//Mostrar en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort();
console.log(numeros);

//Invertir y mostrar
numeros.reverse();
console.log(numeros);

//Contar elementos
console.log(numeros.length);

//Busqueda
var busqueda = parseInt(prompt("Buscar un numero:"));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion != -1 ){
    console.log("Posicion de la busqueda: "+posicion);
}
else{
    console.log("Elemento no encontrado");
}

