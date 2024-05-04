var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener("submit", function(){
    var titulo = document.querySelector("#addPelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});


var ul  = document.querySelector("#peliculas-list");
for(var i in localStorage){
    if(typeof localStorage[i] == "string"){
        var li =document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener("submit", function(){
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo, titulo);
    }
});
