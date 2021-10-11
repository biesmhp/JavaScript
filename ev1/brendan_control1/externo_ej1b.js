// JavaScript para el ejercicio 1b
// Do While
function fDoWhile(){
  do {
    var numero = prompt("Introduce un número del 1 al 5");
    if (numero>=1&&numero<=5) {
      alert("El numero introducido es "+numero+" y está comprendido en nuestro rango (1-5)");
    }else{
      alert("No es un número dentro del rango.");
    }
  }while (!(numero>=1&&numero<=5));
}
