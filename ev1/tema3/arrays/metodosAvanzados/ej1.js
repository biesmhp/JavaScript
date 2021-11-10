addEventListener('load',inicio,false);
// variables que usaremos en varias funciones
// var arrayIntroducido = new Array();

function inicio(){
  inputForm=document.getElementById('btnCopia');
  inputForm.addEventListener('click',copia,false);

  inputForm=document.getElementById('btnCambiar');
  inputForm.addEventListener('click',cambio,false);
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
  let copiaArrayIntroducido = recogeArray().slice();
  // Muestra por consola
  // console.log(copiaArrayIntroducido);

  // Lo escribo en su label
  visualiza(copiaArrayIntroducido);
  // Devuelve
  return copiaArrayIntroducido;
}

function cambio(){
  // Crea una copia del array
  let arr = recogeArray().slice();
  // Recoge los datos del formulario html
  let numInicio = parseInt(document.getElementById('inpInicio').value);
  let numACambiar = parseInt(document.getElementById('inpCuantos').value);
  // Llama a la función con parámetros
  let arrayCambiado = cambiar(arr,numInicio,numACambiar);
  // Muestra por consola
  // console.log(arrayCambiado);

  // Lo escribo en su label
  visualiza(arrayCambiado);
}

// Funcion para seleccionar cuantos datos cambiar
function cambiar(array,inicio,aCambiar){
  // ### previo a la funcionalidad ###
  // Hace una copia del orginal para no modificarlo
  let arrayCambiado = array.slice();
  // Controlo que no pueda cambiar más datos de la longitud propia del array
  if (aCambiar+inicio>arrayCambiado.length) {
    aCambiar = arrayCambiado.length-inicio;
  }
  // Para poder sustituir el número exacto de elementos del array por 0, necesito escribir ese mismo número de 0 en el parámetro
  // de splice(index,howmany,item1,item2...), como no se construir un bucle dentro del parámetro (igual no es posible)
  // he creado un array con 0s igual a la longitud de elementos que quieres sustituir, y simplemente lo añado donde están los eliminados
  let arrayCeros = [];
  for (let i = 0; i < aCambiar; i++) {
    arrayCeros.push(0);
  }
  // Me muestra el array de 0, para controlar que funciona correctamente
  // console.log(arrayCeros);

  // ### La funcionalidad ###
  // Sustituye una cantidad de elementos igual a 'aCambiar' por 0, empezando desde 'inicio'
  // lo que hace es eliminar los elementos que te sobran y añade el array de 0 de esa longitud en el hueco
  arrayCambiado.splice(inicio,aCambiar,...arrayCeros);
  // Devuelve
  return arrayCambiado;
}

function visualiza(arr){
  // Lo escribo en su label
  document.getElementById('resVisual').innerHTML = arr.join('-');
}
