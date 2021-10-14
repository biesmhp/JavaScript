
addEventListener('load',inicio,false);

var value = document.getElementById('numero').value;

function inicio(){
  inputForm=document.getElementById('enviar');
  inputForm.addEventListener('click',respuesta,false);
}


function par(value){

  if (value%2!=0) {
    // document.getElementById('mensaje').innerHTML=value+' es IMPAR';

    return false;
  }else{
    // document.getElementById('mensaje').innerHTML=value+' es PAR';
    return true;
  }
}

function respuesta(){
  if (par(value)) {
    document.getElementById('mensaje').innerHTML=value+' es IMPAR';
  }else{
    document.getElementById('mensaje').innerHTML=value+' es PAR';
  }
}
