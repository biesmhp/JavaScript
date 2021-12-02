// Añadir el .js tras el html mediante eventos
addEventListener('load',inicio,false);

function inicio() {
  // Inputs

  // A cada botón le asignamos una función
  // Este botón formaba parte de las comprobaciones iniciales
  // btnForm=document.getElementById('btnRellenar');
  // btnForm.addEventListener('click',rellenarStock,false);

  btnForm=document.getElementById('btnVisualizar');
  btnForm.addEventListener('click',visualizar,false);

  btnForm=document.getElementById('btnBusqueda');
  btnForm.addEventListener('click',busqueda,false);

  btnForm=document.getElementById('btnVenta');
  btnForm.addEventListener('click',venta,false);
}

// Ejercicio 1
// Rellenar el stock de forma aleatoria
function rellenarStock() {
  // El array multidimensional que devolveremos (columnas)
  let mazTornillos = [];
  for (let i = 0; i < 3; i++) {
    // Cada linea de ese array multidimensional (filas)
    let arrayTornillos = [];
    for (let y = 0; y < 4; y++) {
      // Rellenamos el stock con numeros aleatorios, del 0 al 100 (un total de 101 numeros)
      arrayTornillos.push(parseInt(Math.random()*101));
    }
    mazTornillos.push(arrayTornillos);
  }
  // console.log(matrizTornillos);
  return mazTornillos;
}

// Ejercicio 2
// Visualizar la matriz
function visualizar() {
  // Defino la matriz como una variable global para poder usarla en cualquier parte
  matrizDeTornillos = rellenarStock();
  visualStock(matrizDeTornillos);
}
function visualStock(matriz) {
  // console.log(matriz);
  for (var i = 0; i < 3; i++) {
    for (var y = 0; y < 4; y++) {
      document.getElementById('vis'+i+y).innerHTML=matriz[i][y];
    }
  }
}

// Ejercicio 3a
// Función intermedia para meter parámetros
function busqueda() {
  // Obtenemos los datos de los selects
  let material = document.getElementById('selMateriales').value;
  let cabeza = document.getElementById('selRanura').value;
  let cantidad = busquedaDirecta(matrizDeTornillos,material,cabeza);
  // console.log(cantidad);
  visTornillos.value=cantidad;
}
// Devuelve el numero en la posición de la matriz
function busquedaDirecta(arr,material,cabeza) {
  let cantidad = arr[material][cabeza];
  return cantidad;
}

// Ejercicio 3b
// Función
function venta() {
  // Obtenemos los datos de los selects
  let material = document.getElementById('selMateriales').value;
  let cabeza = document.getElementById('selRanura').value;
  // Obtenemos la cantidad deseada por el usuario
  let cantidad = 0;
  let aux = true;
  do {
    cantidad = prompt("¿Cuantos tornillos quiere retirar?");
    // Comprobamos que sea una cantidad válida
    if (busquedaDirecta(matrizDeTornillos,material,cabeza)>=cantidad&&cantidad>=0) {
      aux = false;
    }
  } while (aux);
  // Restamos la cantidad a la matriz, si es una cantidad válida
  matrizModificada = resto(cantidad,material,cabeza);
  // Reescribo el codigo en pantalla con las funciones hechas anteriormente
  visualStock(matrizModificada);
  return matrizModificada;
}

function resto(cantidad,material,cabeza) {
  matrizDeTornillos[material][cabeza]=matrizDeTornillos[material][cabeza]-parseInt(cantidad);
  return matrizDeTornillos;
}
