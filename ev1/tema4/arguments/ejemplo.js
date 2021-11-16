document.write(sumAll(2,4));
document.write('<br>');
document.write(sumAll(1,2,3,4,'m',5));
document.write('<br>');
document.write(sumAll(100,200,300));
document.write('<br>');
let cadena = new Array('hola',3,'prueba');
document.write(encadenar('-','hola',3,'prueba'));

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])) {
      console.log(arguments[i]);
      sum += arguments[i];
    }
  }
  return sum;
}

function encadenar(separador){
  let resultado = [];
  for (var i = 1; i < arguments.length; i++) {
    resultado.push(arguments[i]);
  }
  return resultado.join(separador);
}

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
