addEventListener('load',inicio,false);
var nombre, apellidos;

function inicio(){
  inputForm=document.getElementById('visor');
  inputForm.addEventListener('click',respuesta,false);
}

function respuesta(){
  nombre = document.getElementById('nombre').value;
  apellidos = document.getElementById('apellidos').value;

  document.getElementById('mensaje').innerHTML=nombre+' '+apellidos;
}
