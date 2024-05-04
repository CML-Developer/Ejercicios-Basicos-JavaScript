var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele",  "La vida es bella", "Gran torino"];
var cine = [categorias, peliculas];

var elemento = "";

do{
    elemento = prompt("Introduce una pelicula:");
    peliculas.push(elemento);
}
while(elemento != "Acabar");

peliculas.pop();

var peliculas_string = peliculas.join();
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(peliculas);
console.log(cine);
console.log(peliculas_string);
console.log(cadena_array);

var busqueda = peliculas.find(function(pelicula){
    return pelicula == "La verdad duele";
});

console.log(busqueda);

var precios = [10, 12, 20, 50, 80];
var busqueda1 = precios.some(precio => precio >= 12);
console.log(busqueda1);
