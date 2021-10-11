// JavaScript para el ejercicio 3a


// Ejercicio3a
function cuantos100300(){
  // Introducir los sueldos
  // Sueldo1
  do {
    var sueldo1 = prompt("Introduce el sueldo");
    if (!isNaN(sueldo1)&&sueldo1>=100&&sueldo1<=500) {
      // alert("El numero introducido es "+sueldo1);
      var bool = false;
    }else{
      alert("Introduce un sueldo entre 100 y 500");
      var bool = true;
    }
  }while (bool);
  // Sueldo2
  do {
    var sueldo2 = prompt("Introduce el sueldo");
    if (!isNaN(sueldo2)&&sueldo2>=100&&sueldo2<=500) {
      // alert("El numero introducido es "+sueldo2);
      var bool = false;
    }else{
      alert("Introduce un sueldo entre 100 y 500");
      var bool = true;
    }
  }while (bool);
  // Sueldo3
  do {
    var sueldo3 = prompt("Introduce el sueldo");
    if (!isNaN(sueldo3)&&sueldo3>=100&&sueldo3<=500) {
      // alert("El numero introducido es "+sueldo3);
      var bool = false;
    }else{
      alert("Introduce un sueldo entre 100 y 500");
      var bool = true;
    }
  }while (bool);
  // Sueldo4
  do {
    var sueldo4 = prompt("Introduce el sueldo");
    if (!isNaN(sueldo4)&&sueldo4>=100&&sueldo4<=500) {
      // alert("El numero introducido es "+sueldo4);
      var bool = false;
    }else{
      alert("Introduce un sueldo entre 100 y 500");
      var bool = true;
    }
  }while (bool);
  // Sueldo5
  do {
    var sueldo5 = prompt("Introduce el sueldo");
    if (!isNaN(sueldo5)&&sueldo5>=100&&sueldo5<=500) {
      // alert("El numero introducido es "+sueldo5);
      var bool = false;
    }else{
      alert("Introduce un sueldo entre 100 y 500");
      var bool = true;
    }
  }while (bool);

  // Contador para recoger
  var counter = 0;

  // Determinar cuales están en el margen comprendido entre 100 y 300 euros
  if (sueldo1>=100&&sueldo1<=300) {
    counter++;
  }
  if (sueldo2>=100&&sueldo2<=300) {
    counter++;
  }
  if (sueldo3>=100&&sueldo3<=300) {
    counter++;
  }
  if (sueldo4>=100&&sueldo4<=300) {
    counter++;
  }
  if (sueldo5>=100&&sueldo5<=300) {
    counter++;
  }
  alert(counter+" son los empleados que cobran entre 100 y 300 euros.");
}
