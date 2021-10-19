addEventListener('load',inicio,false);


function inicio(){
  inputForm=document.getElementById('pedir');
  inputForm.addEventListener('click',informacion,false);
}

function informacion(){
  var texto = '';
  var fRadioMasa = document.fPedido.masa.value;
  var fBoxIngredientes = document.fPedido.ingrediente;
  var fDatos = document.fPedido.datos.value;

  // textarea
  texto += "Pedido para: "+fDatos;
  // radio
  texto += "\n Masa: "+fRadioMasa;
  // checkbox
  texto += "\n Ingredientes:";
  for (var i = 0; i < fBoxIngredientes.length; i++) {
    if(fBoxIngredientes[i].checked){
      texto += " "+fBoxIngredientes[i].value;
    }
  }
  // alert(fRadioMasa+fBoxIngredientes+fDatos);
  mostrar(texto);
}

function mostrar(texto){
  console.log(texto);
  document.getElementById('comprobante').innerHTML = texto;
}
