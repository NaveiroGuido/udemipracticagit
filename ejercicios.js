/*
1.Pida 6 numeros por pantalla y los meta por un array
2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola.
3.Ordenar el array y mostrarlo
4. Invertir su orden y mostrarlo. 
5.Mostrar cuantos elementos tiene el array. 
6.Busqueda de un valor introducido por el usuario, si esta en el array y nos diga su indice.
*/
// pedir 6 numeros
//var numero = new Array(6)

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array " +textoCustom+ "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index) => {
        document.write("<li>"+elemento+"</li><br/>");
});
    document.write("</ul>");
}

var numeros=[]
for(var i = 0; i <= 5 ;i++){
    //numeros[i] = parseInt(prompt("introduce un numero",0));
    numeros.push(parseInt(prompt("introduce un numero",0)));
} 

//mostrar en el cuerpo de la pagina
/*document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero,index) => {
    document.write("<strong>"+numero+"</strong><br/>")  MANERA ANTERIOR 
    
});*/

//mostrar el array por la consola5
console.log(numeros); 

numeros.sort(function(a,b){return a-b});  //de menor a mayor y descendente de b-a
mostrarArray(numeros,'ordenado');

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido '); //mostrar al reves

//cuantos elementos tiene el array , contar indice.

document.write("<h1> El array tiene" + numeros.length+" Elementos </h1>");

//busqueda

var busqueda = parseInt(prompt("Busca un numero",0));
var posicion = numeros.findIndex(numero=>numero==busqueda);

if(posicion && posicion != -1 ){

document.write("<h1>Encontrado</h1>");
document.write("<h1>Posicion de la busqueda:"+ posicion+" </h1>");

}else{

    document.write("<h1> NO Encontrado</h1>");
}


//HR ERA PAL RENGLONCITO