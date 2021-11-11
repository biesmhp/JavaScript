addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnPrompt');
  inputForm.addEventListener('click',dentro,false);
}

function dentro(){
  let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
  let color = prompt('Escoge un color');
  console.log(color);
  let bool = false;
  for (var position in colores) {
    if (colores[position]==color.toLowerCase()) {
      bool = true;
    }
  }
  if (bool) {
    alert(color+' es un color dentro del array. ¡Enhorabuena!');
  }else{
    alert(color+' no es un color dentro del array. Prueba otra vez.');
  }
}
