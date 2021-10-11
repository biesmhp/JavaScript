// JavaScript para el ejercicio 1a
// While
function fWhile(){
  var numero = prompt("Introduce un número del 1 al 5");
  while (!(numero>=1&&numero<=5)){
    if (numero>=1&&numero<=5) {
      alert("El numero introducido es "+numero+" y está comprendido en nuestro rango (1-5)");
    }else{
      alert("No es un número dentro del rango.");
      var numero = prompt("Introduce un número del 1 al 5");
    }
  }
}
