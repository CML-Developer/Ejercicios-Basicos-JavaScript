window.addEventListener("load", function(){
    var boton = document.getElementById("boton");

    function cambiarColor(){
        var bg = boton.style.backgroundColor;
        if(bg == "purple"){
            boton.style.backgroundColor = "red";
        }
        else{
            boton.style.backgroundColor = "purple";
        }
        return true;
    }

    // Click

    boton.addEventListener("click", function(){
        cambiarColor();
        this.style.border = "5px solid black";
    });

    // Mouse over

    boton.addEventListener("mouseover", function(){
        boton.style.backgroundColor = "#ccc";
    });

    // Mouse out

    boton.addEventListener("mouseout", function(){
        boton.style.backgroundColor = "blue";
    });

    // Focus

    var input = document.getElementById("campo_nombre");
    input.addEventListener("focus", function(){
        console.log("[focus] Estas dentro del input");
    });

    // Blur

    input.addEventListener("blur", function(){
        console.log("[blur] Estas fuera del input");
    });

    // Keydown

    input.addEventListener("keydown", function(event){
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });

    // Keypress

    input.addEventListener("keypress", function(event){
        console.log("[keypress] Tecla presioanda ", String.fromCharCode(event.keyCode));
    });

    // keyup

    input.addEventListener("keyup", function(event){
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    });
});

