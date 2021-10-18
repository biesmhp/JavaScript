addEventListener('load',inicio,false);
// var num;
// // Debo inicializarlo a 0 para que lo sume correctamente en el contador
// var sumaTotal = 0;

function inicio(){
  inputForm=document.getElementById('operar');
  inputForm.addEventListener('click',operar,false);
}

function operar(){
  numPrimero = parseInt(document.getElementById('num1').value);
  numSegundo = parseInt(document.getElementById('num2').value);

  switch (document.getElementById('operador').value) {
    case 'sumar':
      mostrar(numPrimero+numSegundo);
      break;
    case 'restar':
      mostrar(numPrimero-numSegundo);
      break;
    case 'multiplicar':
      mostrar(numPrimero*numSegundo);
      break;
    case 'dividir':
      mostrar(numPrimero/numSegundo);
      break;
    default:

  }
}

function mostrar(valor){
  document.getElementById('operado').innerHTML= 'El total es: '+valor;
}
