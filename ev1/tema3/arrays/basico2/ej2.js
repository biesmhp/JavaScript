addEventListener('load',inicio,false);
var numeros;
var arrayDeNumeros=[];

function inicio(){
  // Extraemos los datos
  numeros = document.getElementById('arrayNums');


  inputForm=document.getElementById('ejemplo1');
  inputForm.addEventListener('click',cargarArray1,false);

  inputForm=document.getElementById('ejemplo2');
  inputForm.addEventListener('click',cargarArray2,false);

}

function cargarEnArray(){
  numeros = document.getElementById('arrayNums').value;
  // alert(numeros);
  // La funcion string.split divide un string según el elemento indicado y lo recopila en un array
  arrayDeNumeros = numeros.split(',');
  if (Array.isArray(arrayDeNumeros)) {
    console.log(arrayDeNumeros);
  } else {
    console.log('No es un array');
  }
}

function calc(){
  let resultados = calculo(arrayDeNumeros);
  for (let posicion in resultados) {
    console.log(resultados[posicion]);
  }
  document.getElementById('sumaEs').innerHTML = "La suma es: "+resultados[0];
  document.getElementById('mediaEs').innerHTML = "La media es: "+resultados[1];
  document.getElementById('mayorEs').innerHTML = "El mayor es: "+resultados[2];
  document.getElementById('menorEs').innerHTML = "El menor es: "+resultados[3];
}

function calculo(aNums){
  // Suma
  let sum=0;
  for (let x in aNums) {
    sum += parseInt(aNums[x]);
  }
  // console.log(sum);

  // Media
  let media=0;let count = 0;
  for (let x in aNums) {
    media += parseInt(aNums[x]);
    count++;
  }
  media=media/count;
  // console.log(media);

  // Mayor
  let mayor=parseInt(aNums[0]);
  for (let x in aNums) {
    if (mayor<aNums[x]) {
      mayor=parseInt(aNums[x]);
    }
  }
  // console.log(mayor);

  // Menor
  let menor=parseInt(aNums[0]);
  for (let x in aNums) {
    if (menor>aNums[x]) {
      menor=parseInt(aNums[x]);
    }
  }
  // console.log(menor);
  return [sum,media,mayor,menor];
}
