addEventListener('load',inicio,false);
var num1, num2, num3, num4;

function inicio(){
  inputForm=document.getElementById('suma');
  inputForm.addEventListener('click',respuesta,false);
}

function respuesta(){
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  num3 = parseInt(document.getElementById('num3').value);
  num4 = parseInt(document.getElementById('num4').value);

  sumado.value = num1+num2+num3+num4;
}
