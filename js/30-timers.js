window.addEventListener("load", function(){

    // bucle

    function intervalo(){
        var tiempo = this.setInterval(function(){
            console.log("Set interval ejecutado");
    
            var encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px"
            }
            else{
                encabezado.style.fontSize = "50px";
            }          
        }, 3000);

        return tiempo;
    }

    // Detener setInterval

    var tiempo = intervalo();

    var stop = document.getElementById("stop");

    stop.addEventListener("click", function(){
        clearInterval(tiempo);
        console.log("Has detenido el set Interval");
    });

    // Iniciar setInterval

    var start = document.getElementById("start");

    start.addEventListener("click", function(){
        intervalo();
        console.log("Has iniciado el set Interval");
    });

    // normal

    var tiempo1 = this.setTimeout(function(){
        console.log("Set time out ejecutado");

        var encabezado = document.querySelector("h1");

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px"
        }
        else{
            encabezado.style.fontSize = "50px";
        }
        
    }, 3000);
});