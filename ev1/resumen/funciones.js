// Añadir el .js tras el html mediante eventos
addEventListener('load',inicio,false);

// Funcion inicial, llamada al cargar la página gracias al addEventListener()
function inicio() {
  // Input de texto genérico
  // Recogemos la caja en una variable global
  texto = document.getElementById("inputText");

  // A cada botón le asignamos una función
  btnForm=document.getElementById('btnAddTextLabel');
  btnForm.addEventListener('click',mostrarTextoLabel,false);

  btnForm=document.getElementById('btnAddTextInput');
  btnForm.addEventListener('click',mostrarTextoInput,false);

  // Input para trabajar con arrays
  // Recogemos la caja en una variable global
  lista = document.getElementById("inputArr");

  // A cada botón le asignamos una función
  btnForm=document.getElementById('btnAddArr');
  btnForm.addEventListener('click',mostrarArr,false);
}
// Input de texto genérico
// Función intermedia para asignar parámetros
function mostrarTextoLabel() {
  mostrarLabel(texto.value);
}
// Función intermedia para asignar parámetros
function mostrarTextoInput() {
  mostrarInput(texto.value);
}

// Input para trabajar con arrays
function mostrarArr() {
  let arrConvertido = stringToArr(lista.value,",");
  mostrarLabel(arrConvertido);
}
// Función para separar el contenido de un string por un 'separador' y convertirlo en array
function stringToArr(arr,separador) {
  let res = arr.split(separador);
  // console.log(res);
  return res;
}

// FUNCIONES PARA VISUALIZAR DATOS
// Mostrar contenido en 'visTextlabel'
function mostrarLabel(content) {
  document.getElementById('visTextLabel').innerHTML = content;
}
// Mostrar contenido en un 'input'
function mostrarInput(content) {
  visTextInput.value = content;
}
