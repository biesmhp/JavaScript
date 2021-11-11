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
  // Muestra por consola
  console.log(arrayIntroducidoC);
  let inicio = document.getElementById('inpInicio').value;
  let cuantos = document.getElementById('inpCuantos').value;
  let promedioRango = calcPromedio(arrayIntroducidoC,inicio,cuantos);
  // console.log('promedio Rango: '+promedioRango);

  // Lo escribo en su label
  visual(promedioRango);
  // Devuelve
  return arrayIntroducidoC;
}

function calcPromedio(arr,ini,cant){
  inicio = parseInt(ini);
  cantidad = parseInt(cant);
  // Variable a devolver
  let promedio = 0;
  console.log(arr);
  // Bucle
  if (arr.length > 0 && cantidad > 0) {
    let count = 0;
    // Calculamos el promedio
    for (var i = inicio; i < arr.length && i-inicio < cantidad; i++) {
      promedio+=parseInt(arr[i]);
      count++;
    }
    promedio = promedio/count;

  }
  // Si han introducido texto y no números
  if (isNaN(promedio)) {
    promedio=0;
  }
  return promedio;
}

function visual(texto){
  // Lo escribo en su label
  document.getElementById('resVisual').innerHTML = texto;
}
