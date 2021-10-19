addEventListener('load',inicio,false);

function inicio(){
  // Seleccionamos cuando se activa el evento
  inputForm=document.getElementById('colorear');
  // Al pinchar en 'colorear'
  inputForm.addEventListener('click',respuesta,false);
}

function respuesta(){
  // Recogemos el contenido del radio 'colorin', del formulario 'colorado'
  var formularioColores = document.colorado.colorin;
  for (var i = 0; i < formularioColores.length; i++) {
    if(formularioColores[i].checked){
      document.bgColor = formularioColores[i].value;
      break;
    }
  }
}
