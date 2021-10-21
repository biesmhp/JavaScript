addEventListener('load',inicio,false);
var nombre, apellidos;

function inicio(){
  inputForm=document.getElementById('visor');
  inputForm.addEventListener('click',respuesta,false);
  // Correccion
  // Extraemos los datos
  nombre = document.getElementById('nombre');
  apellidos = document.getElementById('apellidos');
}

function respuesta(){
  // En lugar de extraer aqui los datos, los extraemos en el inicio()
  document.getElementById('mensaje').innerHTML=nombre.value+' '+apellidos.value;
}
