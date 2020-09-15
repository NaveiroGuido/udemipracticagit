//DCUMENT OBJECT MODEL
function cambiaColor(color){
        caja.style.background =color;

}

// conseguir elementos con un ID concreto. 

//var caja = document.getElementById("micaja");


var caja =document.querySelector("#micaja");

caja.innerHTML = "Textito de la cajita";
caja.style.background = "red";
caja.style.padding = "20px";   //caja.style y lo que quiera de de CSS
caja.className = "Hola";

// conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


//todosLosDivs.forEach((element , Indice) => {
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
var parrafo=  document.createElement("p");
var texto = document.createTextNode(todosLosDivs[valor].textContent);
parrafo.append(texto);
seccion.append(parrafo);

}}
seccion.append(hr);


//});

//conseguir elementos por su clase CSS

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName ('amarillo');




for(div in divsAmarillos){
    if (divsAmarillos[div].className == "amarillo"){   //pasar value
        divsAmarillos[div].style.background = "yellow";

    }

}

var div;

for(div in divsRojos){
    if (divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";

    }

}

// query selector

var id = document.querySelector("#encabezado"); //para una sola etiqueta
id.style.backgroundColor = "green";

console.log(id)
//console.log(caja);


