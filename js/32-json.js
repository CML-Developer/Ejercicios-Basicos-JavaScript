var pelicula = {
    titulo: "Batman vs superman",
    año: 2017,
    pais: "Estados unidos"
};

var peliculas = [
    {titulo: "La verdad duele", año: 2016, pais: "Francia"},
    pelicula
];

console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].año + " - " +peliculas[index].pais);
    caja_peliculas.append(p);
}