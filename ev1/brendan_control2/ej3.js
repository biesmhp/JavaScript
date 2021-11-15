addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnTirada');
  inputForm.addEventListener('click',tirada,false);

  inputForm=document.getElementById('btnVisual');
  inputForm.addEventListener('click',visual,false);

  inputForm=document.getElementById('btnEstadistica');
  inputForm.addEventListener('click',visual_estadistica,false);
}

// Acumulador de las tiradas
const tiradas = [];
// console.log("Tiradas: "+tiradas);

// Parte 1 - TIRADA
function tirada(){
  let resultado = parseInt(Math.random()*6);
  tiradas.push(resultado);
  visTirada.value = resultado;
  return resultado;
}

// Parte 2 - VISUAL
function visual(){
  ver(tiradas);
}

function ver(arr){
  visTiradas.value = arr.join('-');
}

// Parte 3 - INFORME
function visual_estadistica(){
  informe(tiradas);
  console.log(tiradas);
}

function informe(arr){
  
  return [n0,n1,n2,n3,n4,n5,mas,menos];
}
