addEventListener('load',inicio,false);
// variables que usaremos en varias funciones
// var arrayIntroducido = new Array();

function inicio(){
  inputForm=document.getElementById('btnCopia');
  inputForm.addEventListener('click',recogeArray,false);
}

// Recoge el texto introducido en el input y lo devuelve como un array
function recogeArray(){
  // Recoge los datos introducidos
  let datosIntroducidos = document.getElementById('cajaArrayNums').value;
  // Los convierte en array
  let arrayIntroducido = datosIntroducidos.split(',');
  // Filtramos para obtener solo los numeros (los devuelve como un string)
  let arrayFiltrado = arrayIntroducido.filter(isNumber);
  arrayFiltrado = arrayFiltrado.map(function (item) {
    return parseInt(item, 10);
  });
  console.log(arrayFiltrado);
  // Los devuelve
  return arrayFiltrado;
}

function isNumber(dato){
  // console.log(parseInt(dato));
  return parseInt(dato);
}
