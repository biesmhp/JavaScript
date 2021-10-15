
addEventListener('load',inicio,false);



function inicio(){

  inputForm=document.getElementById('enviar');
  inputForm.addEventListener('click',respuesta,false);
}


function par(value){
  // Si el resto no es igual a 0 devuelve falso
  if (value%2!=0) {
    return false;
  }else if(value%2==0){
    // Si el resto es igual a 0
    return true;
  }
}

function respuesta(){
  var value = document.getElementById('numero').value;
  // alert(value);
  if (par(value)) {
    document.getElementById('mensaje').innerHTML=value+' es PAR';
  }else{
    document.getElementById('mensaje').innerHTML=value+' es IMPAR';
  }
}
