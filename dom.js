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

var contenidoenTexto = todosLosDivs [2].textContent;

//todosLosDivs.forEach((element , Indice) => {
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
var parrafo=  document.createElement("p");
var texto = document.createTextNode(todosLosDivs[valor].textContent);
parrafo.appendChild(texto);
document.querySelector('#miseccion').appendChild(parrafo);

}}

//});

//conseguir elementos por su clase CSS

//console.log(caja);


