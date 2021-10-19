addEventListener('load',inicio,false);

function inicio(){
  // Seleccionamos cuando se activa el evento
  inputForm=document.getElementById('miSelect');
  // Al cambiar el valor de 'miSelect'
  inputForm.addEventListener("change",respuesta,false);
}

function respuesta(){
  var texto = '';
  // Recogemos el contenido del select 'seleccionador', del formulario 'nota'
  let indice = document.nota.seleccionador.selectedIndex;
  texto += "El nIndice del escogido es "+indice;
  let valor = document.nota.seleccionador.options[indice].value;
  texto += ", el valor del escogido es "+valor;
  let textoEscogido = document.nota.seleccionador.options[indice].text;
  texto += ", el texto del escogido es "+textoEscogido;
  alert(texto);
}
