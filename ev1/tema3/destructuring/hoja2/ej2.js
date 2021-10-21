addEventListener('load',inicio,false);
var numero1, numero2;

function inicio(){
  // Extraemos los datos
  numero1 = document.getElementById('num1');
  numero2 = document.getElementById('num2');

  inputForm=document.getElementById('permutar');
  inputForm.addEventListener('click',media,false);
}

function media(){
  // Llamamos a la funcion que intercambia los datos
  [num1.value,num2.value] = permuta(numero1.value,numero2.value);
}

function permuta(numero1,numero2){
  let [a,b] = [numero2, numero1];
  // Esto devuelve los números intercambiados
  return [a,b];
}
