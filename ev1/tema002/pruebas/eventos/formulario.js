// Los comentarios pueden no ser 100% acertados
// Prepara las funciones deseadas en la carga de la página
addEventListener('load',inicio,false);

// Se carga con el Listener y se queda a la escucha. Al clickar el elemento indicado se activa 'respuesta()'
function inicio(){
  inputForm=document.getElementById('enviar');
  inputForm.addEventListener('click',respuesta,false);
}

// Recibiendo un parámetro numérico indica si es par o impar
function par(value){
  // Si el resto no es igual a 0 devuelve falso
  if (value%2!=0) {
    return false;
  }else if(value%2==0){
    // Si el resto es igual a 0
    return true;
  }
}

// Llama a la funcion par(param), y muestra PAR o IMPAR según su resultado
function respuesta(){
  var value = document.getElementById('numero').value;
  // alert(value);
  if (par(value)) {
    document.getElementById('mensaje').innerHTML=value+' es PAR';
  }else{
    document.getElementById('mensaje').innerHTML=value+' es IMPAR';
  }
}
