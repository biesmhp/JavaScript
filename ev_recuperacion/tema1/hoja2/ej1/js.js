addEventListener('load',inicio,false)
function inicio() {
  // Creamos un número aleatorio entre 3 y 6
  let randomNum = Math.floor(Math.random()*4+3)
  // Creamos las dos matrices
  let maz1 = matriz(randomNum)
  let maz2 = matriz(randomNum)

  // Evento para mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    // Las visualizamos
    mostrar(maz1,'#visualizado1')
    mostrar(maz2,'#visualizado2')
    // Mostramos el resto de botones
    document.querySelector("#btnSumar").hidden = false
    document.querySelector("#btnRestar").hidden = false
  })

  // Evento de sumado
  evento = document.querySelector("#btnSumar")
  evento.addEventListener('click',function (e) {
    document.querySelector("#operador").innerText = `+`
    mostrar(mazSum(maz1,maz2),'#resultado1','sum');
  })

  // Evento de restado
  evento = document.querySelector("#btnRestar")
  evento.addEventListener('click',function (e) {
    document.querySelector("#operador").innerText = `-`
    mostrar(mazRes(maz1,maz2),'#resultado1','res');
  })
}

// Suma de matrices
function mazSum(maz1,maz2) {
  let matrizSumada = []
  for (var i = 0; i < maz1.length; i++) {
    let arrInt = []
    for (var y = 0; y < maz1.length; y++) {
      arrInt.push(maz1[i][y]+maz2[i][y])
    }
    matrizSumada.push(arrInt)
  }
  return matrizSumada
}

// Resta de matrices
function mazRes(maz1,maz2) {
  let matrizRestada = []
  for (var i = 0; i < maz1.length; i++) {
    let arrInt = []
    for (var y = 0; y < maz1.length; y++) {
      arrInt.push(maz1[i][y]-maz2[i][y])
    }
    matrizRestada.push(arrInt)
  }
  return matrizRestada
}

// Creación de matriz
function matriz(num) {
  // Array multidimensional (matriz)
  let arr = []
  // Lo recorremos
  for (let i = 0; i < num; i++) {
    // Creamos el array interior
    let arrInt = []
    // Lo recorremos y lo rellenamos con números aleatorios
    for (let y = 0; y < num; y++) {
      arrInt.push(Math.floor(Math.random()*10+1))
    }
    // Añadimos el array interior a una nueva fila del array multidimensional
    arr.push(arrInt)
  }
  // Devolvemos el array multidimensional
  return arr
}

function mostrar(texto,objetivo,sumOres) {
  let vis = ``
  if (sumOres=='sum') {
    vis += `Sumado \n`
  }else if (sumOres=='res'){
    vis += `Restado \n`
  }
  if (Array.isArray(texto)) {
    for (var i = 0; i < texto.length; i++) {
      vis += `${texto[i]} \n`
    }
  }
  document.querySelector(objetivo).innerText = vis;
  console.log(texto);
}
