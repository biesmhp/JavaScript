const numeros = [2,4,6,8,10,12,13,14,18,20,30];

console.log("Array original: "+numeros);

var cNumeros = numeros.slice();

console.log("Array copiado: "+cNumeros);

function menores10(numElement){
  if (numElement<10) {
    return numElement;
  }
}

function cuadradosDeLosMenoresDe10(arr){
  let arrFilteredm10 = arr.filter(menores10);
  console.log("Array filtrado con los números menores de 10: "+arrFilteredm10);
  let arrFiltered = arrFilteredm10.map(
    function (element){
      return element*element;
    }
  );
  console.log("Resultado a devolver: "+arrFiltered);
  return arrFiltered;
}

function mostrar(){
  let res = cuadradosDeLosMenoresDe10(cNumeros);
  document.getElementById('visResultado').innerHTML = "Los números menores de 10 al cuadrado del array son: "+res;
}
