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
  // alert(numero1.value);
  let aux = Math.sign(numero1.value);
  // Recogemos
  if (aux==1) {
    alert("positivo");
  }else if (aux==-1) {
    alert("negativo");
  }else if (aux==0){
    alert("es 0");
  }else if (isNaN(aux)) {
    alert("No es un número");
  }
  document.getElementById("averiguado").innerHTML = texto;
}
