

//eventos del raton

window.addEventListener('load', function(){

    function cambiarColor(){
        console.log("Me tocaste")
    
        var bg = boton.style.backgroundColor;
    
        if (bg == "green") {
            boton.style.backgroundColor ="red";
    
    
        }else{
            boton.style.backgroundColor = "green";
        }
        
        
        return true; 
            }
            
            var boton = document.querySelector("#boton");
    
            boton.addEventListener('click',function(){
                cambiarColor();
    
            });
    
    
            //Mouse Over
    
            boton.addEventListener('mouseover', function(){
                    boton.style.backgroundColor ="#ccc"
    
            });
    
            //mouse Out
            
    
            boton.addEventListener('mouseout', function(){
                boton.style.backgroundColor ="yellow" ;
    
        });
    
        //focus
        var input= document.querySelector("#camponombre")
        input.addEventListener('focus', function(){
            console.log("estas haciendo foco en el input");
    
        });
    
    
    
    
        //blur  //afuera del imput
    
    
        input.addEventListener('blur', function(){
            console.log("estas haciendo blur en el input");
    
        });
    
    
        //keydown
    
        input.addEventListener('keydown', function(event){
            console.log("estas haciendo keydown pulsando tecla", String.fromCharCode(event.keyCode));
    
    
        });
    
    
        //keypress
    
        input.addEventListener('keypress', function(event){
            console.log("estas haciendo keypress pulsando tecla", String.fromCharCode(event.keyCode));
    
        });
    
        //keyup
    
        input.addEventListener('keyup', function(event){
            console.log("estas haciendo keyup soltando tecla", String.fromCharCode(event.keyCode));
    
        });

});
 
 

//end load CUANDO LA PAGINA ESTE CARGADA AL100 % arranca. 