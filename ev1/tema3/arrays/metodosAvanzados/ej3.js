addEventListener('load',inicio,false);
// variables que usaremos en varias funciones
var arrayIntroducido = new Array();

function inicio(){
  inputForm=document.getElementById('btnIntroduce');
  inputForm.addEventListener('click',recogeArray,false);

  inputForm=document.getElementById('btnMostrar');
  inputForm.addEventListener('click',mostrar,false);
}

// Recoge el texto introducido en el input y lo devuelve como un array
function recogeArray(){
  // Recoge los datos introducidos
  let elementoIntroducido = document.getElementById('inpArray').value;
  // Comprueba que se haya introducido un elemento
  if (elementoIntroducido!="") {
    // Lo mete en el array
    arrayIntroducido.push(elementoIntroducido);
  }
  // Lo muestra en consola
  console.log(arrayIntroducido);
  // Vacia el input
  inpArray.value="";
  // Le ponemos el foco
  document.getElementById("inpArray").autofocus;
}

function numericos(){
  let arrayNumericos = new Array();
  // Rellena el nuevo array con los valores numéricos del original
  for (var position in arrayIntroducido) {
    if (!isNaN(arrayIntroducido[position])) {
      arrayNumericos.push(arrayIntroducido[position]);
    }
  }
  // Muestra por consola
  console.log(arrayNumericos);
  return arrayNumericos;
}

function mostrar(){
  let arrayNumericos = numericos();
  visualiza(" ",arrayNumericos);
}

function visualiza(texto,arr){
  // Lo escribo en su label
  document.getElementById('resArray').innerHTML = texto+arr.join('-');
}
