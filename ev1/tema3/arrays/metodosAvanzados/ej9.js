addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnConvertir');
  inputForm.addEventListener('click',convertir,false);
}

function convertir(){
  let arrIntroucido = document.getElementById('arrCaja').value.split(',');
  console.log(arrIntroucido);
  visualiza(arrIntroucido);
}

function visualiza(arr){
  // Lo escribo en su label
  document.getElementById('resArray').innerHTML = 'Convertido en Array: ['+arr+']';
}
