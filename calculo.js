// Determinacion de la nota definitiva
function calculo (){
var c1 = parseFloat(document.getElementById("N1").value);
var c2 = parseFloat(document.getElementById("N2").value);
var c3 = parseFloat(document.getElementById("N3").value);
var c4 = parseFloat(document.getElementById("N4").value);
var c5 = parseFloat(document.getElementById("N5").value);
var es1 = parseFloat(document.getElementById("N6").value);
var es2 = parseFloat(document.getElementById("N7").value);
var es3 = parseFloat(document.getElementById("N8").value);
var et1 = parseFloat(document.getElementById("N9").value);
var et2 = parseFloat(document.getElementById("N10").value);
var et3 = parseFloat(document.getElementById("N11").value);
var et4 = parseFloat(document.getElementById("N12").value);
var et5 = parseFloat(document.getElementById("N13").value);

// Constantes de nuestro sistema de evaluación
const p_cognitivo = 0.5;
const p_estetico= 0.25;
const p_etico=0.25;

// Determinacion del aporte porcentual de cada competencia en función de nuestro sistema de evaluacion
var total_cognitivo =  redondeox2((((c1+c2+c3+c4+c5)/5)*p_cognitivo));
var total_estetico = redondeox2(((es1+es2+es3)/3)*p_estetico);
var total_etico = redondeox2(((et1+et2+et3+et4+et5)/5)*p_etico);

var nota_definitiva = total_cognitivo+total_estetico+total_etico;

document.getElementById("rcog").innerHTML = document.getElementById("rcog").innerHTML + " " + total_cognitivo;
document.getElementById("rest").innerHTML = document.getElementById("rest").innerHTML + " " +total_estetico;
document.getElementById("reti").innerHTML = document.getElementById("reti").innerHTML  +" " + total_etico;
document.getElementById("resultado").innerHTML = "Su nota total del curso es:" + nota_definitiva;
} 

// Funcion que comprueba que efectivamene si se haya digitado números o incluso que las celdas no esten vacias
function comprobar_numeros(){
	   cantidad_textos=0;  // guardará la cantidad de celdas con textos o vacias
	for (i=1;i<=13;i++){
		if (!is_numeric(document.getElementById("N" + i).value))  //Hace udos de la funcion is_numeric que arroja true si el valor es numerico, por eso se niega !
         cantidad_textos++
	}
	if (cantidad_textos>0)
      window.alert("No se puede continuar pues se detectan " + cantidad_textos + " celdas vacia o con valores no numéricos");		
      else
      comprobar_rango();
}

// Funcion que devuelve true, si el valor digitado es numerico
function is_numeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}

//Funcion que se encarga de comprobar que los valores númericos estén en el rago del sistema de evaluacion
function comprobar_rango (){
	var cantidad_nulos=0;
	var min=0;
	var max=5;
for (i=1; i<=13;i++){
	if  (parseFloat(document.getElementById("N" + i).value)<min ||  parseFloat(document.getElementById("N"+i).value)>max )
   cantidad_nulos++;		
 }

 if (cantidad_nulos>0)
  window.alert("No es posible realizar el cálculo pues hay " + cantidad_nulos + " valor(es) por fuera del rango del sistema de evaluación");
 else
  calculo();
}

// Funcion que se encarga de redondear a dos cifras decimales
function redondeox2(numero){
	return Math.round(numero*100)/100;
}




// Esta funcion comprueba si las celdas estan vacias, sin embargo la dejaré comentada pues la funcion que comprueba 
// que sea numeros los valores insertados tambien me realza la misma funcion

/*function comprobar_celdas(){
	var cantidad_vacios=0;
	for (i=1;i<=13;i++){
	   if  (document.getElementById("N" + i).value=="")
	   	cantidad_vacios++;
	   }
	 if (cantidad_vacios>0)
	 	window.alert("No se puede continuar pues se detectan " + cantidad_vacios + " celdas vacias, digita notas en cada una de ellas");
}
*/