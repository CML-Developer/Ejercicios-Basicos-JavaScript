// Comprobar disponibilidad del localstorage

if(typeof(Storage) != undefined){
    console.log("LocalStorage disponible");
}
else{
    console.log("LocalStorage no compatible");
}

// Guardar datos

localStorage.setItem("Titulo", "Curso de Symfony");

// Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

// Guardar objetos

var usuario = {
    nombre: "Juanito perez",
    email: "juan@perez.com",
    web: "youtube.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" " + userjs.nombre + " " + userjs.email + " " + userjs.web);
localStorage.removeItem("usuario");
