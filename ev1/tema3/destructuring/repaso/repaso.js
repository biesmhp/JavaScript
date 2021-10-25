addEventListener('load',inicio,false);
// Declaramos variables
var num1, num2, num3, nombre;
var nAlumnosEv = 0;

function inicio(){
  // Extraemos los datos
  num1 = parseInt(document.getElementById('nota1'));
  num2 = parseInt(document.getElementById('nota2'));
  num3 = parseInt(document.getElementById('nota3'));
  nombre = document.getElementById('alumno');
  // Ponemos a la escucha el boton 'resultadoFinal'
  inputForm=document.getElementById('resultadoFinal');
  inputForm.addEventListener('click',intermedia,false);
  // Ponemos a la escucha el boton 'salir'
  inputForm=document.getElementById('salir');
  inputForm.addEventListener('click',salimos,false);
}

function intermedia(){
  // Recoge los valores de las notas
  num1 = parseInt(document.getElementById('nota1').value);
  num2 = parseInt(document.getElementById('nota2').value);
  num3 = parseInt(document.getElementById('nota3').value);
  // Aumentamos el contador de alumnos evaluados
  nAlumnosEv++;
  // Inserta los resultados de la función en sus respectivos INPUTS
  [aprobado.value,notaFinal.value] = calculoNota(nombre, num1, num2, num3);
}

// Calcula la nota media de 3 (notas), devuelve APTO o NO APTO y la media
function calculoNota(nombre, num1, num2, num2){
  // Hacemos el calculo de la media
  let sumatorio = num1+num2+num3;
  let media = sumatorio/3;
  // Devolverá APTO si es un aprobado (mayor o igual a 5), y NO APTO en caso contrario
  if(media>=5) {
    return ["APTO",media.toFixed(2)];
  }else{
    return ["NO APTO",media.toFixed(2)];
  }
}

// Al pulsar salir ejecuta esto, mostrando el número de alumnos evaluados y reseteando el contador
function salimos(){
  alert("El número de alumnos evaluados: "+nAlumnosEv);
  // Contador a 0
  nAlumnosEv = 0;
}
