addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnCopia');
  inputForm.addEventListener('click',copia,false);
}

function copia(){
  // Recoge los datos introducidos
  let datosIntroducidos = document.getElementById('cajaArrayNums').value;
  // Los convierte en array
  let arrayIntroducido = datosIntroducidos.split(',');
  // Crea una copia en una nueva variable
  copiaArrayIntroducido = arrayIntroducido.slice();
  // Muestra por consola
  console.log(copiaArrayIntroducido);
  // Devuelve
  return copiaArrayIntroducido;
}
