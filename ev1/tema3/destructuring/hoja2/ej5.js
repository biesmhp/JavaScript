addEventListener('load',inicio,false);
// Declaramos las variables
var numero1;

function inicio(){
  inputForm=document.getElementById('factorial');
  inputForm.addEventListener('click',intermedia,false);
  // Extraemos los datos
  numero1 = document.getElementById('num1');
}

function intermedia(){
  // let resultado = factoriza(numero1.value);
  document.getElementById("factor").innerHTML = factoriza(numero1.value);
}

// La funcion factoriza(numero) devuelve el resultado factorial de un numero
function factoriza(numeroFactorial){
  // Inicializado a 1 para usarse en multiplicaciones
  let producto = 1;
  if (!isNaN(numeroFactorial)) {
    // Este bucle calcula el factorial del número introducido
    for (var i = numeroFactorial; i > 0; i--) {
      producto = producto * i;
    }
    return producto;
  }else{
    alert("Introduce un número, por favor");
  }
}
