addEventListener('load',inicio,false);
// ############# Rellena el array original #############
var arrayOriginal = new Array();
// Vacio el array por si existe algo previamente
arrayOriginal.splice(0, arrayOriginal.length);
// Rellena el array con numeros aleatorios (15)
for (var i = 0; i < 15; i++) {
  arrayOriginal.push(parseInt(Math.random()*20));
}
console.log(arrayOriginal);
// ############# Fin del array original #############
// Declaro variables que usaré después
var arrayNuevo = new Array();

function inicio(){
  inputForm=document.getElementById('btnOriginal');
  inputForm.addEventListener('click',visualizarArrayOriginal,false);

  inputForm=document.getElementById('btnNuevo');
  inputForm.addEventListener('click',visualizarArrayNuevo,false);

  inputForm=document.getElementById('btnLimpiar');
  inputForm.addEventListener('click',limpieza,false);
}

function visualizarArrayOriginal(){
  // Lo escribe en el LABEL
  visual(arrayOriginal);
}

function visualizarArrayNuevo(){
  // Vacio el array por si existe algo previamente
  arrayNuevo.splice(0, arrayNuevo.length);
  // Rellena el nuevo array
  for (var i = 0; i < 15; i++) {
    arrayNuevo.push(parseInt(Math.random()*20));
  }
  // Lo visualiza por consola
  console.log(arrayNuevo);
  // Lo escribe en el LABEL
  visual(arrayNuevo);
}

function limpieza(){
  // Llama a la función con parámetro ###solo afecta al array original###
  let arraySinDuplicados = eliminarRepetidos(arrayOriginal);
  // Lo muestra en consola
  console.log(arraySinDuplicados);
  // Lo escribe en el LABEL
  visual(arraySinDuplicados);
}

function eliminarRepetidos(array){
  return array.filter((value, index) => (
    array.indexOf(value) === index
  ));
}

function visual(array){
  // Escribe el array en el label
  document.getElementById('cajaArray').innerHTML = '--Aquí aparecerá el Nuevo array--';
  document.getElementById('cajaArray').innerHTML = array;
}
