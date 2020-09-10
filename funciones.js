
/*
function levadura (){
return "te falta la levadura salame";

}
console.log(levadura())

elemento = document.getElementById('op1')
console.log("lo mas fundamentale es la" + "elemento");
    
class Vino { 
    constructor (variedad, nombre, region,enologo,edad)
 {
    this.variedad = variedad
    this.nombre = nombre
    this.region = region
    this.enologo = enologo    
    this.edad = edad
   
    } 
}

      
var vino1 = new Vino ("merlot", "tempusalba" , "Maipu", "biondolillo", "2014")

function vinasi(){
    console.log ("Mi variedad es"+ variedad + "mi nombre es" + nombre 
+ "de la region"+ region + "mi enologo es"+ enologo + "y mi edad es" +edad)}




function holaMundo(texto){
    var hola_mundo = "texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log (hola_mundo)
}
var numero = 13;
var texto = "hola mundo soy una variable global";
holaMundo(texto); 


//transformacion de textos
var numero = 444;
var texto1 = "hola quiace";
var texto2 = "hola quiace gato";

var dato =numero.toString();        // PASAR ALGO A STRING
    dato2 = texto1.toUpperCase(); //MAYUSCULA
    dato3 = texto2.toLowerCase(); //MINUSCULA

console.log (dato3)

// calcular longitud

var nombre=" ";

console.log(nombre.length); // si no tiene letras no va. Caracteres

// concatenar - unir textos

//var textoTotal = texto1+" "+texto2;
var textoTotal =texto1.concat(" "+ texto2 + "putito")
console.log (textoTotal)


var numero = 444;
var texto1 = "hola quiace hola gato hola sisi sos re gato hola";
var texto2 = "hola quiace gato";

var busqueda  = texto1.indexOf("e") //buscar caracter
console.log(busqueda)

var busqueda2 = texto1.lastIndexOf ("a") //ultimo caracter
console.log (busqueda2);

var busqueda3 = texto1.search("hola") //es lo mismos que indexof

var busqueda4 = texto1.match("hola") // devuelve en un array con tuti
console.log (busqueda4);

var busqueda5 = texto1.match(/hola/gi) //devuelve en un array con eso que busques cuantas veces se repita
console.log (busqueda5);

var busqueda5 = texto1.substr(3,9) // devuelve lo que busques de tal caracter a otro.
console.log (busqueda5) // arranca en 0 siempre desde el 3, 9 en adelante

var busqueda6 = texto1.charAt("33") // selecciono una letra concreta de mi string
console.log (busqueda6);

var busqueda7 = texto1.startsWith("hola") // da T o F con lo que arranque el string
console.log (busqueda7)

var busqueda8 = texto1.endsWith("hola") // da T o F con lo que termine el string
console.log (busqueda8)


var busqueda9 = texto1.includes("hola") // da T o F si la palabra esta en el string CASESENSITIVE
console.log (busqueda9)
// REEMPLAZO DE TEXTO
var numero = 444;
var texto1 = "hola quiace hola gato hola sisi sos re gato hola";
var texto2 = "hola quiace gato";

var busqueda  = texto1.replace("re", "salame") //reemplaza un carecter que hay por otro. 1 vez
console.log(busqueda)

var busqueda2  = texto1.slice(14, 19) //Devuelve del caracter que le pase hasta el final.
console.log(busqueda2)
var busqueda3  = texto1.split(" ") //mete el string en un array y lo separa por el parametro que lede
console.log(busqueda3)

var busqueda  = texto1.trim() //corto los espacios que hay adelante y atras.
console.log(busqueda)
*/


//PLANTILLAS  

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS")

//var texto  = "Mi nombre es " +nombre+ " mis apellidos son: "+apellidos;
// el ${} es para meter la variable dentro de la plantilla 
var texto= `
        <h1> HOla que tal </h1>
        <h3> Mi nombre es: ${nombre} </h3>          
        <h3> Mi apellido es: ${apellidos} </h3>

`;

document.write(texto);