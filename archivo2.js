const nuevodocumento=document.getElementById("nuevodocumento")


function cambio(){
   // $("#archivo").attr("src",nuevodocumento.value)

   

let sign = prompt("insertar texto");

if (sign !="") {
  alert("texto ingresado es "+sign); 
  $("#archivo").attr("src",sign)
}


}