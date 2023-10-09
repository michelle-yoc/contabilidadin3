




const resultado = document.getElementById("resultado");

function sumadelactivocorriente(){
    var suma=parseFloat(accounting.unformat(cajaybancos.value))+parseFloat(accounting.unformat(inventariofinal.value))+ parseFloat(accounting.unformat(resultado1.value))+ parseFloat(accounting.unformat(suministroinventariofinal.value));
    resultado.value=accounting.formatMoney(suma,"Q",2,",",".")

 

    console.log(suma)
    console.log(cajaybancos.value)
    console.log(resultado1.value)
    console.log(suministroinventariofinal)
}

function prueba1(){
    var prueba2 = parseFloat(accounting.unformat(cantidad1.value))
    resultado.value=accounting.formatMoney(prueba2,"Q",2,",",".")

}
const gastosdeorganizacion=document.getElementById("gastosdeorganizacion");
const suministroinventariofinal=document.getElementById("suministroinventariofinal");
const cajaybancos= document.getElementById("cajaybancos");
 const inventariofinal=document.getElementById("inventariofinal");
const cuentasporcobrar = document.getElementById("cuentasporcobrar");
const provisioncuentasincobrables = document.getElementById("provisioncuentasincobrables");
const resultado1 = document.getElementById("resultado1");
const resultado4=document.getElementById("resultado4");



function residuo(){
    var activoc= parseFloat(accounting.unformat(cuentasporcobrar.value))-parseFloat(accounting.unformat(provisioncuentasincobrables.value));
    resultado1.value=accounting.formatMoney(activoc,"Q",2,",",".")
    
    //residuo.value=activoc;
}



const mobiliario = document.getElementById("mobiliario");
const depreciacionesnocobradas = document.getElementById("depreciacionesnocobradas");
const resultado3 = document.getElementById("resultado3");

function activono_corriente(){
    var activonc= parseFloat(accounting.unformat(mobiliario.value))-parseFloat(accounting.unformat(depreciacionesnocobradas.value));
    resultado3.value=accounting.formatMoney(activonc,"Q",2,",",".")
    activono_corriente.value=accounting.formatMoney(activonc,"Q",2,",",".")
    
}


function sumadg(){
    var sumae15e16=parseFloat(accounting.unformat(resultado3.value))+parseFloat(accounting.unformat(gastosdeorganizacion.value));
    resultado5.value=accounting.formatMoney(sumae15e16,"Q",2,",",".")   
}

function sumadelactivo(){ 
     var sumaf6f13=parseFloat(accounting.unformat(resultado.value))+parseFloat(accounting.unformat(resultado5.value));
     resultado4.value=accounting.formatMoney(sumaf6f13,"Q",2,",",".")
}
const capitalsocial=document.getElementById("capitalsocial");
const utilidadesretenidas=document.getElementById("utilidadesretenidas");
const resultado6=document.getElementById("resultado6");
const resltado7=document.getElementById("resultado7");



function patrimonio(){
    var sumae21e=parseFloat(accounting.unformat(capitalsocial.value))+parseFloat(accounting.unformat(utilidadesretenidas.value));
    resultado7.value=accounting.formatMoney(sumae21e,"Q",2,",",".")
}


function sumacyu(){
      var sumae21e22=parseFloat(accounting.unformat(capitalsocial.value))+parseFloat(accounting.unformat(utilidadesretenidas.value));
      resultado6.value=accounting.formatMoney(sumae21e22,"Q",2,",",".")
}

const resultado8=document.getElementById("resultado8");
const cuentasporpagar=document.getElementById("cuentasporpagar")
const resultado9=document.getElementById("resultado9");

function cuentas(element){
    formateo(element)
    var cuentasc=parseFloat(accounting.unformat(cuentasporpagar.value))
    resultado8.value=accounting.formatMoney(cuentasc,"Q",2,",",".")

}


function sumadelpasivoypatrimonio(){
    var sumadelpyp=parseFloat(accounting.unformat(resultado6.value))+parseFloat(accounting.unformat(resultado8.value))
    resultado9.value=accounting.formatMoney(sumadelpyp,"Q",2,",",".")
     
}

// Aca abajo las funciones para formateo
function formateo
(elemento){
    elemento.value=accounting.formatMoney(elemento.value,"Q",2,",",".")

}

document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
});