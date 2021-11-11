// addEventListener('load',inicio,false);
//
// function inicio(){
//   inputForm=document.getElementById('resArray');
//   inputForm.addEventListener('click',ver,false);
// }
// Generamos el array
var arrNormal = new Array();
for (var i = 0; i < 10; i++) {
  arrNormal.push(i*2);
}
// Lo visualizamos en consola
console.log(arrNormal);

function ver(){
  visualiza('Array normal: ',arrNormal);
}

function visualiza(texto,arr){
  // Lo escribo en su label
  document.getElementById('resArray').innerHTML = texto+arr.join('-');
}

function multiplicar(){
  multi(arrNormal);
}

function multi(arr){
  let arrDuplicado = new Array();
  for (let position in arr) {
    arrDuplicado.push(arr[position]*2);
  }
  console.log(arrDuplicado);
  visualiza('Array con los elementos duplicados: ',arrDuplicado);
}
