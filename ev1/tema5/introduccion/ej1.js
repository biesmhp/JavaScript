var minus = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

function mayusPyF(arr){
  var mayus = [];
  for (var position in arr) {
    let primeraL = arr[position].slice(0,1).toUpperCase();
    let finalL = arr[position].slice(-1).toUpperCase();
    let contenido = arr[position].slice(1,-1);
    // console.log(contenido);
    // console.log(primeraL);
    // console.log(finalL);
    // console.log(arr[position]);
    mayus.push(primeraL.concat(contenido.concat(finalL)));
  }
  return mayus;
}

console.log(mayusPyF(minus));
