addEventListener('load',inicio,false)
function inicio() {
  // Creamos las salas
  let salas = matriz(5)
  let num = 0
  // Cargamos las opciones iniciales
  cargarSalas(salas,1)
  cargarEquipos(salas,num)

  // Evento para mostrar los equipos disponibles
  evento = document.querySelector("#selSala")
  evento.addEventListener('change',function (e) {
    cargarEquipos(salas,e.target.selectedIndex)
  })

  // Evento para solicitar el equipo
  evento = document.querySelector("#btnSolicitar")
  evento.addEventListener('click',function (e) {
    let sala = document.querySelector("#selSala").value
    let equipo = document.querySelector("#selEquipo").value
    if (salas[sala][equipo]) {
      salas[sala][equipo] = false
      cargarSalas(salas,sala)
      cargarEquipos(salas,sala)
      let ocupados = parseInt(document.querySelector("#visEquiposOcupados").innerText)
      document.querySelector("#visEquiposOcupados").innerText = ocupados+1
      mostrar(salas,'#visualizado')
    }else{
      alert("Ese equipo está ocupado")
    }
  })

  // Evento para cancelar la solicitud
  evento = document.querySelector("#btnCancelar")
  evento.addEventListener('click',function (e) {
    let sala = document.querySelector("#selSala").value
    let equipo = document.querySelector("#selEquipo").value
    if (!(salas[sala][equipo])) {
      salas[sala][equipo] = true
      cargarSalas(salas,sala)
      cargarEquipos(salas,sala)
      let ocupados = parseInt(document.querySelector("#visEquiposOcupados").innerText)
      document.querySelector("#visEquiposOcupados").innerText = ocupados-1
      mostrar(salas,'#visualizado')
    }else{
      alert("Ese equipo no está ocupado")
    }
  })
}

// Generamos las OPTION del SELECT de salas
function cargarSalas(matriz,sala) {
  let opciones = ``
  for (var i = 0; i < matriz.length; i++) {
    let count = 0
    for (var y = 0; y < matriz[i].length; y++) {
      if (matriz[i][y]) {
        count++
      }
    }
    if (sala==i) {
      opciones += `<option value=${i} selected>Sala${i+1} (${count})</option>`
    }else{
      opciones += `<option value=${i}>Sala${i+1} (${count})</option>`
    }
  }
  // Escribe las opciones en el SELECT de salas
  document.querySelector("#selSala").innerHTML = opciones
}

// Generamos las OPTION del SELECT de equipos
function cargarEquipos(matriz,sala) {
  let opciones = ``
  for (var i = 0; i < matriz[sala].length; i++) {
    if (matriz[sala][i]) {
      opciones += `<option value=${i}>Equipo${i+1}</option>`
    }else{
      opciones += `<option value=${i}>Equipo${i+1}--Ocupado</option>`
    }
  }
  // Escribe las opciones en el SELECT de salas
  document.querySelector("#selEquipo").innerHTML = opciones
}

function mostrar(arr,objetivo) {
  let vis = ``
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      vis += `Sala ${i+1}: `
      for (var y = 0; y < arr[i].length; y++) {
        if (arr[i][y]) {
          vis += `🖥`
        }else{
          vis += `🖱`
        }
      }
      vis += `\n\n `
    }
  }
  document.querySelector(objetivo).innerText = vis;
  console.log(arr);
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
    for (let y = 0; y < 20; y++) {
      arrInt.push(true)
    }
    // Añadimos el array interior a una nueva fila del array multidimensional
    arr.push(arrInt)
  }
  // Devolvemos el array multidimensional
  return arr
}
