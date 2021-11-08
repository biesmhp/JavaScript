addEventListener('load',inicio,false);
var numeros1,numeros2;
var arrayDeNumeros1=[];
var arrayDeNumeros2=[];

function inicio(){
  // Extraemos los datos
  numeros1 = document.getElementById('arrayNums1');
  numeros2 = document.getElementById('arrayNums2');


  inputForm=document.getElementById('ejemplo1');
  inputForm.addEventListener('click',cargarArray1,false);

  inputForm=document.getElementById('ejemplo2');
  inputForm.addEventListener('click',cargarArray2,false);

  inputForm=document.getElementById('concatenar');
  inputForm.addEventListener('click',concatena,false);
}

function cargarArray1(){
  numeros1 = document.getElementById('arrayNums1').value;
  arrayDeNumeros1 = numeros1.split(',');
  console.log(arrayDeNumeros1);
}

function cargarArray2(){
  let longitud = arrayDeNumeros1.length;
  for (var i = 0; i < longitud; i++) {
    arrayDeNumeros2.push(parseInt(Math.random()*100));
  }
  console.log(arrayDeNumeros2);
  arrayNums2.value = arrayDeNumeros2;
}

function concatena(){
  let arrayConcatenado = [];
  for (let x in arrayDeNumeros1) {
    arrayConcatenado.push(arrayDeNumeros1[x]);
    arrayConcatenado.push(arrayDeNumeros2[x]);
  }
  console.log(arrayConcatenado);
  document.getElementById('concatenado').innerHTML = arrayConcatenado;
}
