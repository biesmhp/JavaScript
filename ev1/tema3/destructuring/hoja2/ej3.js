addEventListener('load',inicio,false);
// Declaramos las variables
var numero1;

function inicio(){
  inputForm=document.getElementById('averiguar');
  inputForm.addEventListener('click',averigua,false);
  // Extraemos los datos
  numero1 = document.getElementById('num1');
}

function averigua(){
  // La funcion sign devuelve 1, -1, 0 o null según el tipo de dato
  let aux = Math.sign(numero1.value);
  // El texto de vuelta
  let texto = '';

  if (aux==1) {
    texto = "El número "+numero1.value+" es positivo";
  }else if (aux==-1) {
    texto = "El número "+numero1.value+" es negativo";
  }else if (aux==0){
    texto = "El número es 0";
  }else if (isNaN(aux)) {
    texto = numero1.value+" no es un número";
  }
  document.getElementById("averiguado").innerHTML = texto;
}
