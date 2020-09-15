// BOM BROWSER OBJETCT MODEL
function getBom(){
console.log (window.innerHeight);  // ALTURA  screen.widt
console.log (window.innerWidth) // ANCHURA  scren.heiyh
console.log (window.location)  // la URL 

}

function redirect(url) {
        window.location.href = url;

}

function ventana (url){
        window.open(url,"","width=400,height=400"); 

}




getBom()