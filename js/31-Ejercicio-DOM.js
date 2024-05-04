window.addEventListener("load", function(){
    console.log("DOM cargado");

    var formulario = document.getElementById("formulario");
    var box_dashed = document.getElementsByClassName("dashed");
    
    for(var i = 0; i < box_dashed.length; i++){
        box_dashed[i].style.display = "none";
    }

    formulario.addEventListener("submit", function(){
        console.log("Evento submit capturado");

        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var edad = parseInt(document.getElementById("edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Los apellidos no es valido");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }

        for(var i = 0; i < box_dashed.length; i++){
            box_dashed[i].style.display = "block";

            var datos_usuario = [nombre, apellidos, edad];

            var indice;
            for(indice in datos_usuario){
                var parrafo = document.createElement("p");
                parrafo.append(datos_usuario[indice]);
                box_dashed[i].append(parrafo);
            }
        }

        console.log(nombre, apellidos, edad);

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");
        
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML= apellidos;
        p_edad.innerHTML = edad;

    });
});