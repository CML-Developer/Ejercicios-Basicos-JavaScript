var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario1");
var div_profesor = document.querySelector("#profesor");

getUsuarios()
    .then(data => data.json())
    .then(data => {
        listadoUsuarios(data);
        console.log(data);

        return getUsuario();
    })
    .then(data => data.json())
    .then(data => {
        mostrarUsuario(data);
        console.log(data);

        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

function getUsuarios(){
    //return fetch("https://jsonplaceholder.typicode.com/users");
}

function getUsuario(){
    //return fetch("https://jsonplaceholder.typicode.com/users/1");
}

function getInfo(){
    var profesor = {
        nombre: "Juan",
        apellidos: "Perez",
        url: "https://youtube.com"
    };

    return new Promise((resolver, reject) => {
        var profesor_string = JSON.stringify(profesor);

        if(typeof profesor_string != "string" || profesor_string == ""){
            return reject("error");
        }
        else{
            return resolver(profesor_string);
        }
    });
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement("h3");
        nombre.innerHTML = i + ". " + user.name  + " " + user.username;
        div_usuarios.append(nombre);

        var cargando = document.querySelector(".loading");
        cargando.style.display = "none";
    });
}

function mostrarUsuario(user){
    let nombre = document.createElement("h4");
    nombre.innerHTML = user.name  + " " + user.username;
    div_usuario.append(nombre);

    var cargando = document.querySelector("#usuario1 .loading");
    cargando.style.display = "none";
}
