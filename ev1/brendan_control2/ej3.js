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
  // Hace una copia
  let tiradasC = tiradas.slice();
  // Recoge el resultado de informe()
  let resultado = informe(tiradasC);

  // Escribimos los resultados
  vis0.value = resultado[0];
  vis1.value = resultado[1];
  vis2.value = resultado[2];
  vis3.value = resultado[3];
  vis4.value = resultado[4];
  vis5.value = resultado[5];
}

function informe(arr){
  let conteo = new Array(0,0,0,0,0,0);
  for (let position in arr) {
    switch (arr[position]) {
      case 0:
        conteo[0]++;
        break;
      case 1:
        conteo[1]++;
        break;
      case 2:
        conteo[2]++;
        break;
      case 3:
        conteo[3]++;
        break;
      case 4:
        conteo[4]++;
        break;
      case 5:
        conteo[5]++;
        break;
      default:
    }
  }
  // 'resultados' será el array que devuelva
  let resultados = conteo.slice();

  // WIP
  // Obtenemos el más frecuente y el que menos
  // Ordena el array
  conteo.sort((a,b)=>{return a-b;});
  console.log("Array ordenado para obtener el mayor y menor "+conteo);
  // Recoge la primera posicion
  let menos = conteo.slice(0,1);
  // Recoge la última posición
  let mas = conteo.slice(5);
  console.log(menos+" y "+mas);
  // WIP

  return resultados;
}
