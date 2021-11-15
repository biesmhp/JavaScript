addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnTirada');
  inputForm.addEventListener('click',tirada,false);
}

// Acumulador de las tiradas
const tiradas = [];
console.log("Tiradas: "+tiradas);

function tirada(){
  let resultado = parseInt(Math.random()*6);
  console.log("Resultado de la tirada: "+resultado);
  tiradas.push(resultado);
  console.log("Tiradas: "+tiradas);
  return resultado;
}
