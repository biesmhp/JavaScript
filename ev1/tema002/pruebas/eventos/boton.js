// Cuando carga la página carga la función inicio()
addEventListener('load',inicio,false);

// La función inicio(), al clickarse, llama a la función comprobar()
function inicio(){
  botonValidar=document.getElementById('validar');
  botonValidar.addEventListener('click',comprobar,false);
}

// La función comprobar() ejecuta un alert()
function comprobar(){
  alert("Hola");
}
