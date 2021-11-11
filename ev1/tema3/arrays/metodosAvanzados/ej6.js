addEventListener('load',inicio,false);
// variables que usaremos en varias funciones
// var arrayIntroducido = new Array();

function inicio(){
  inputForm=document.getElementById('btnIntroduce');
  inputForm.addEventListener('click',copia,false);
}

// Recoge el texto introducido en el input y lo devuelve como un array
function recogeArray(){
  // Recoge los datos introducidos
  let datosIntroducidos = document.getElementById('cajaArrayNums').value;
  // Los convierte en array
  let arrayIntroducido = datosIntroducidos.split(',');
  // Los devuelve
  return arrayIntroducido;
}

// Crear una copia de un array y devolver la copia
function copia(){
  // Crea una copia del array
  let arrayIntroducidoC = recogeArray().slice();
  // Bucle sumando 1
  for (var position in arrayIntroducidoC) {
    arrayIntroducidoC[position] = parseInt(arrayIntroducidoC[position])+1;
  }
  // Muestra por consola
  console.log(arrayIntroducidoC);
  // Lo visualiza en su label
  visualiza(arrayIntroducidoC);
  // Devuelve
  return arrayIntroducidoC;
}

function visualiza(arr){
  // Lo escribo en su label
  document.getElementById('resVisual').innerHTML = arr.join('-');
}
