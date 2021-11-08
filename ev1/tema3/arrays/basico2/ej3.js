addEventListener('load',inicio,false);
var numeros1,numeros2,lon1,lon2;
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
  lon1 = longitud1.value;
  for (var i = 0; i < lon1; i++) {
    arrayDeNumeros1.push(parseInt(Math.random()*100));
  }
  arrayNums1.value = arrayDeNumeros1;
  console.log(arrayDeNumeros1);
  console.log(lon1);
}

function cargarArray2(){
  lon2 = longitud2.value;
  for (var i = 0; i < lon2; i++) {
    arrayDeNumeros2.push(parseInt(Math.random()*100));
  }
  arrayNums2.value = arrayDeNumeros2;
  console.log(arrayDeNumeros2);
  console.log(lon2);
}

// Concatena arrays con diferentes longitudes
function concatena(){
  let arrayConcatenado = [];
  if (lon1>lon2) {
    for (let x in arrayDeNumeros1) {
      arrayConcatenado.push(arrayDeNumeros1[x]);
      if (x<lon2) {
        arrayConcatenado.push(arrayDeNumeros2[x]);
      }
    }
  } else {
    for (let x in arrayDeNumeros2) {
      if (x<lon1) {
        arrayConcatenado.push(arrayDeNumeros1[x]);
      }
      arrayConcatenado.push(arrayDeNumeros2[x]);
    }
  }
  console.log(arrayConcatenado);
  document.getElementById('concatenado').innerHTML = arrayConcatenado;
}
