




const cantidad1 = document.getElementById("cantidad1");
const resultado = document.getElementById("resultado")

function prueba1(element){
    formateo(element)
    var prueba2 = parseFloat(accounting.unformat(cantidad1.value))
    resultado.value=accounting.formatMoney(prueba2,"Q",2,",",".")
}
 





const inventario_inicial = document.getElementById("inventario_inicial");
const compras = document.getElementById("compras");
const resultado1 = document.getElementById("resultado1");

function mercaderia_disponible(){
    var mercaderia= parseFloat(accounting.unformat(inventario_inicial.value))+parseFloat(accounting.unformat(compras.value));
    resultado1.value=accounting.formatMoney(mercaderia,"Q",2,",",".")
    mercaderiadisponible.value=accounting.formatMoney(mercaderia,"Q",2,",",".")
}







const mercaderiadisponible= document.getElementById("mercaderiadisponible");
const inventariofinal = document.getElementById("inventariofinal");
const resultado2 = document.getElementById("resultado2");

function gananciabruta(){
    
    var datos = parseFloat(accounting.unformat(mercaderiadisponible.value))-parseFloat(accounting.unformat(inventariofinal.value));
    resultado2.value=accounting.formatMoney(datos,"Q",2,",",".")  
}
 


const ganancia_bruta=document.getElementById("ganancia_bruta");
function ventas(){
    var datos1= parseFloat(accounting.unformat(cantidad1.value))-parseFloat(accounting.unformat(resultado2.value));
    ganancia_bruta.value=accounting.formatMoney(datos1,"Q",2,",",".")
    bruta.value=accounting.formatMoney(datos1,"Q",2,",",".")   
}

const ogastos=document.getElementById("gastos");
function prueba3(element){
    formateo(element)
    
}






const depreciaciones = document.getElementById("depreciaciones");
const cuentasincobrables = document.getElementById("cuentasincobrables");
const gastosdeventas = document.getElementById("gastosdeventas");
const otrosgastos=document.getElementById("otrosgastos");
const resultado3 = document.getElementById("resultado3");

function gastosdeoperacion(){
    var gastos = parseFloat(accounting.unformat(depreciaciones.value))+parseFloat(accounting.unformat(cuentasincobrables.value))+parseFloat(accounting.unformat(gastosdeventas.value))+parseFloat(accounting.unformat(otrosgastos.value));
    resultado3.value=accounting.formatMoney(gastos,"Q",2,",",".")
    ogastos.value=accounting.formatMoney(gastos,"Q",2,",",".")
    console.log("depreciaciones" +depreciaciones.value)
    console.log("cuentasincobrables"+cuentasincobrables.value)
    console.log("gastosdeventas"+ gastosdeventas.value)
    console.log("otrosgastos" + otrosgastos.value)
    console.log("resultado3" + resultado3.value)

}



const bruta = document.getElementById("bruta");
const gastos = document.getElementById("resultado3");
const gastosdeadministracion=document.getElementById("gastosdeadministracion");
const resultado5 = document.getElementById("resultado5");

function gananciadelperiodo(){
 var gananciadelperiodo=parseFloat(accounting.unformat(bruta.value))-parseFloat(accounting.unformat(resultado3.value))-parseFloat(accounting.unformat(gastosdeadministracion.value));
 resultado5.value=accounting.formatMoney(gananciadelperiodo,"Q",2,",",".")
 console.log("bruta "+bruta.value)
 console.log("resultado3 "+resultado3.value)
 console.log("gastosdeadministracion "+ gastosdeadministracion.value)
 console.log("resultado5 "+resultado5.value)
}


function formateo
(elemento){
    elemento.value=accounting.formatMoney(elemento.value,"Q",2,",",".")

}

document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
});
 

