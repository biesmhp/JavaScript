addEventListener('load',inicio,false);
var num;
// Debo inicializarlo a 0 para que lo sume correctamente en el contador
var sumaTotal = 0;

function inicio(){
  inputForm=document.getElementById('otro');
  inputForm.addEventListener('click',otroNumero,false);

  inputForm=document.getElementById('suma');
  inputForm.addEventListener('click',total,false);
}

function otroNumero(){
  num = parseInt(document.getElementById('num1').value);
  sumaTotal += num;
  document.getElementById('numeros').innerHTML+=num+', ';
  num1.value = 0;
}

function total(){
  document.getElementById('sumado').innerHTML= 'El total es: '+sumaTotal;
}
