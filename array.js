
// arrays, arreglos, Matrices

var nombre  = "Victor Robles";
var nombres = ["victor", "Juan", "Jose", "Fabio" , "true"] ;

var lenguajes  = new Array ("php", "Js", "go", "java");
/*
console.log(nombres[3]);
console.log (lenguajes[2]);


console.log (nombres.length);

var elemento = parseInt(prompt("que elemento del array quieres",0)); //tomar el elemnto que quieras
if(elemento >= nombres.length){          //a ver si el numero es correcto por los datos que tiene
    alert("introduce el numero correcto menor que" + nombres.length)

}else{
    alert (nombres[elemento]);

}

*/

document.write ("<h1> Lenguajes de programacion </h1>");

document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write ("<li>"+ lenguajes [i] +"</li>");
}
*/
/*
lenguajes.forEach((elemento,indice,arr)=>{  //parametros for each (dato del array, lugar donde esta y array completo es algo del mismo for each esto)
    console.log(arr)
    document.write ("<li>"+indice+"-"+ elemento +"</li>");

})
*/


for ( let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");  //si yo no pondria [] solo capturaria el indice = los numeros del array
}



document.write ("</ul>");

// BUSQUEDAS

var busqueda = lenguajes.find(lenguaje => lenguaje == "php");
console.log(busqueda); // ENCONTRAR EL OBJETO QUE QUIERO y Si PONGO FINDINDEX ENCUENTRO EL INDICE

var precios = [10, 20 , 30 ]

var busqueda2 = precios.some(precio => precio >= 20); //busqueda de numeros para mayor igual etc