

var categorias = ['accion', 'terror ', 'comedia'] ;
var peliculas = ['la verdad', 'lavida', 'gran'] ;

var cine = [categorias,peliculas] ;
//peliculas.sort te ordena por orden alfabetico el array
//peliculas.reverse darle la vuelta al array arrancaria con gran

//console.log (cine[0] [1]);   //pongo 0 por que categorias es 0 y luego que elemento quiero dentro de cat
                            // si tendria [1] [3] seria deasntro de peli el objeto 3

                            
var elemento = "";
do{
      elemento = prompt("introduce tu pelicula:");
        peliculas.push(elemento);
} while (elemento != "ACABAR");

peliculas.pop(); //eliminia el ultimo elemeneto de un arrayGui
    

//peliculas.push("batman"); //agrego al array 


// peliculas[0]=undefined; en la ubicacion 0 me pone el elemento en undefined

/*var indice = peliculas.indexOf('gran torino');
console.log(indice); esto te dice la ubicacion del string que quieras eliminar con pop*/

var indice = peliculas.indexOf('gran')
    if(indice > -1){
        peliculas.splice(indice,1)

    }
    console.log(peliculas);

    var peliculasstring = peliculas.join(); // para pasar el array a string

    console.log(peliculasstring)


    var cadena = "HOla, como , andas, cara , de , pollo"; //separados igual

    var cadena_array = cadena.split(", ") //de string a array

    console.log(cadena_array)

