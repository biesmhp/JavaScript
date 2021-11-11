addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnRellenar');
  inputForm.addEventListener('click',rellenarInputs,false);
}

function rellenarInputs(){
  let arrCajas = document.getElementsByTagName('input');
  // Esto no funciona porque pone el último input también (que es el botón)
  // for (var position in arrCajas) {
  //   arrCajas[position].value=position;
  // }
  for (var i = 0; i < arrCajas.length-1; i++) {
    arrCajas[i].value=i;
  }
}
