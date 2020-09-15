
        window.addEventListener('load', function(){
            
        function intervalo (){

            var tiempo =  setInterval(function() {
                console.log ("set Interval ejecutado");
            
                var encabezado = document.querySelector("h1");
                if(encabezado.style.fontSize == "50px"){
                    encabezado.style.fontSize ="30px";


                }else{ 
                    encabezado.style.fontSize = "50px"

                }
            
                
        },  500);
        return tiempo; 
        
    }
        
        var tiempo = intervalo();
        
         var stop =  document.querySelector("#boton2");
        

        stop.addEventListener("click", function(){
            alert("HAS PARADO EL INTERvALO");
        clearInterval(tiempo);
       
        
         });


        var start =  document.querySelector("#boton3");

        start.addEventListener("click", function(){
        alert("Arranco de nuevo")  ;  
        intervalo();
        clearInterval(tiempo);

        });   


        
        });






//set time out una sola ves 