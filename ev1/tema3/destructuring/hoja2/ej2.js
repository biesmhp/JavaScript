addEventListener('load',inicio,false);
var numero1, numero2;

function inicio(){
  inputForm=document.getElementById('permutar');
  inputForm.addEventListener('click',permuta,false);
  // Extraemos los datos
  numero1 = document.getElementById('num1');
  numero2 = document.getElementById('num2');
}

function permuta(){
  [num1.value,num2.value] = [numero2.value, numero1.value];
}
