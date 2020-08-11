// Determinacion de la nota definitiva
function calculo (){
var c1 = parseFloat(document.getElementById("N1").value);
var c2 = parseFloat(document.getElementById("N2").value);
var c3 = parseFloat(document.getElementById("N3").value);
var c4 = parseFloat(document.getElementById("N4").value);
var c5 = parseFloat(document.getElementById("N5").value);
var e1 = parseFloat(document.getElementById("N6").value);
var e2 = parseFloat(document.getElementById("N7").value);
var e3 = parseFloat(document.getElementById("N8").value);
var es1 = parseFloat(document.getElementById("N9").value);
var es2 = parseFloat(document.getElementById("N10").value);
var es3 = parseFloat(document.getElementById("N11").value);
var es4 = parseFloat(document.getElementById("N12").value);
var es5 = parseFloat(document.getElementById("N13").value);

// Constantes de nuestro sistema de evaluación
const p_cognitivo = 0.5;
const p_etico=0.25;
const p_estetico= 0.25;

// Determinacion del aporte porcentual de cada competencia en función de nuestro sistema de evaluacion
var total_cognitivo =  ((c1+c2+c3+c4+c5)/5)*p_cognitivo;
var total_etico = ((e1+e2+e3)/3)*p_etico;
var total_estetico = ((es1+es2+es3+es4+es5)/5)*p_estetico;

var nota_definitiva = total_cognitivo+total_etico+total_estetico;


document.getElementById("resultado").innerHTML = "Su nota total del curso es:" + nota_definitiva;

}


