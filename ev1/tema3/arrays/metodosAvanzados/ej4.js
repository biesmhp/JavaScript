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
  // Variable a devolver
  let promedio = 0;
  // Crea una copia del array
  let arrayIntroducidoC = recogeArray().slice();
  // Muestra por consola
  console.log(arrayIntroducidoC);
  if (arrayIntroducidoC.length!=0) {
    // Calculamos el promedio
    for (var position in arrayIntroducidoC) {
      promedio+=parseInt(arrayIntroducidoC[position]);
    }
    promedio = promedio/arrayIntroducidoC.length;
  }
  if (isNaN(promedio)) {
    promedio=0;
  }
  // Lo escribo en su label
  visual(promedio);
  // Devuelve
  return arrayIntroducidoC;
}

function visual(texto){
  // Lo escribo en su label
  document.getElementById('resVisual').innerHTML = texto;
}
