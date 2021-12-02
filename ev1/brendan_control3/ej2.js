addEventListener('load',inicio,false);
verificacion = false;

function inicio() {
  texto = document.getElementById('inputPalindromo');

  btnForm=document.getElementById('btnVerificar');
  btnForm.addEventListener('click',verificar,false);

  btnForm=document.getElementById('btnPalindromo');
  btnForm.addEventListener('click',palindromo,false);
}
// Función de verificación
function verificar() {
  if (texto.value!="") {
    verificacion = true;
  }
}

// Función intermediaria
function palindromo() {
  if (verificacion) {
    if (pali(texto.value)) {
      visPalindromo.value = "¡Es palíndromo! Wiii";
    }else{
      visPalindromo.value = "No es un palíndromo :(";
    }
  }else{
    alert("No has introducido y verificado el texto");
  }
}
// Determina si es palíndromo y devulve un booleano
function pali(texto) {
  let aux = false;
  let textoMinusculas = texto.toLowerCase();
  // Declaramos la variable donde guardaremos el string sin espacios
  var sinEspacios = "";
  // No recuerdo como usar .trim() para eliminar automaticamente los espacios así que lo he hecho a mano
  for (let position in textoMinusculas) {
    if (textoMinusculas.charAt(position)!=" ") {
      sinEspacios+=textoMinusculas.charAt(position);
    }
  }
  console.log(sinEspacios);
  // Texto del reves
  var revertido = "";
  // Invierto el array
  for (let i = 0; i < sinEspacios.length; i++) {
    revertido+=sinEspacios.charAt(sinEspacios.length-1-i);
    // console.log(revertido);
  }
  // console.log(revertido);
  if (revertido==sinEspacios) {
    aux = true;
  }
  return aux;
}
