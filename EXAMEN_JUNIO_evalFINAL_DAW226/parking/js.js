addEventListener('load',inicio,false)

function inicio() {
  // Ejercicio 1, aparece un gráfico
  let cajaDatos = document.querySelector("#inpDatos")
  let cajaVisual = document.querySelector("#visualizado")
  let parking = createParking(4, 10)
  cajaVisual.appendChild(addParking(parking,"idParking"))

  // Ejercicio 2 y 3, al pulsar una plaza libre/ocupada des/guardo la matricula y cambio la imagen
  evento = document.querySelectorAll(".plaza")
  for (let plaza of evento) {
    plaza.addEventListener('click',function(e) {
      let posicion = plaza.id.split("").filter(item => !isNaN(item))
      parking = cambio(parking,posicion)
    })
    // Ejercicio 4, mostrar los datos de la plaza
    plaza.addEventListener('mouseenter',function(e) {
      let visPlaza = document.querySelector("#plaza")
      let visMatricula = document.querySelector("#matricula")
      mostrar(`Nº de Plaza: ${plaza.id}`,visPlaza,true)
      mostrar(`Matricula: ${plaza.title}`,visMatricula,true)
    })
  }

  // Ejercicio 5, listados
  // 5a
  let plazasOcupadas = document.querySelector("#btnTotales")
  plazasOcupadas.addEventListener('click',function(e) {
    let total = ocupadasTotales(parking)
    let nodeOcupadas = document.querySelector("#ocupadas")
    plazasOcupadas.value = `Plazas Ocupadas (${total})`
  },false)
  // 5b
  let cajaSel = document.querySelector("#comprobacion2")
  let selPlanta = addSelect(parking,cajaSel,"selPlanta")
  let plazasLibres = document.querySelector("#btnLibresPlanta")
  plazasLibres.addEventListener('click',function(e) {
    let libPlanta = libresPlanta(parking,selPlanta.value)
    plazasLibres.value = `Plazas libres (${libPlanta}) en planta ${selPlanta.value}`
  },false)
  // 5c
  let cajaSel2 = document.querySelector("#comprobacion3")
  let selPlaza = addSelect(parking,cajaSel2,"selPlaza2")
  let plazasLibres2 = document.querySelector("#btnLibresPlaza")
  plazasLibres2.addEventListener('click',function(e) {
    let libPlaza = libresPlaza(parking,selPlaza.value)
    plazasLibres2.value = `Plazas libres (${libPlaza}) con plaza ${selPlaza.value}`
  },false)

}

// Ejercicio 1, creamos el array bidimensional del parking
function createParking(plantas,aparcamientos) {
  let parking = []
  for (let i = 0; i < plantas; i++) {
    let planta = []
    for (let y = 0; y < aparcamientos; y++) {
      planta.push(false)
    }
    parking.push(planta)
  }
  return parking
}
// Para visualizar un array
function addParking(arr,id) {
  let table = document.querySelector(`#${id}`) ? document.querySelector(`#${id}`) : document.createElement("table")
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  for (let i = 0; i < arr.length; i++) {
    let linea = document.createElement("tr")
    linea.setAttribute("class","planta")
    for (let y = 0; y < arr[i].length; y++) {
      let dato = document.createElement("td")
      dato.setAttribute("id",`planta${i}plaza${y}`)
      dato.setAttribute("class","plaza")
      dato.setAttribute("title","Esta plaza está vacía")
      // let datoText = document.createTextNode(arr[i][y] ? "Verdadero" : "Falso")
      // dato.appendChild(datoText)
      let imagen = document.createElement("img")
      imagen.setAttribute("src","img/parkingvacio.jpg")
      imagen.setAttribute("width","100")
      imagen.setAttribute("heigth","100")

      dato.appendChild(imagen)
      linea.appendChild(dato)
    }
    table.appendChild(linea)
  }
  return table
}

// Ejercicio 2 y 3, cambio de imagen y matricula
function cambio(arr,posicion) {
  let plaza = document.querySelector(`#planta${posicion[0]}plaza${posicion[1]}`)
  plaza.removeChild(plaza.lastChild)

  let mensajeVacio = "Esta plaza está vacía"

  let imagen = document.createElement("img")
  let aux = arr[posicion[0]][posicion[1]]
  if (!aux) {
    let matricula = prompt("Introduce la matricula")
    plaza.title = matricula
    imagen.setAttribute("src","img/parkingocupado.jpg")
    arr[posicion[0]][posicion[1]] = true
  }else{
    imagen.setAttribute("src","img/parkingvacio.jpg")
    plaza.title = mensajeVacio
    arr[posicion[0]][posicion[1]] = false
  }
  imagen.setAttribute("width","100")
  imagen.setAttribute("heigth","100")
  plaza.appendChild(imagen)
  return arr
}

// Ejercicio 4
function mostrar(aMostrar,objetivo,sobreescribir) {
  // console.log(texto);
  if (objetivo.tagName=="INPUT") {
    sobreescribir ? objetivo.value = aMostrar : objetivo.value += aMostrar
  }else if (Array.isArray(aMostrar)) {
    sobreescribir ? objetivo.innerText = '' : objetivo.innerText += '\n'
    for (var i = 0; i < aMostrar.length; i++) {
      objetivo.innerText += `${aMostrar[i]}\n`;
    }
  }else{
    sobreescribir ? objetivo.innerHTML = aMostrar : objetivo.innerHTML += aMostrar
  }
}

// Ejercicio 5, plazas totales ocupadas
// Para mostrar un select con las opciones escogidas
function addSelect(arr,objetivo,id) {
  let select = document.querySelector(`#${id}`) ? document.querySelector(`#${id}`) : document.createElement("select")
  while (select.firstChild) {
    select.removeChild(select.lastChild)
  }
  arguments.length >= 3 ? select.setAttribute("id",id) : null
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value",i)
    opcion.setAttribute("label",`${i}`)
    opcion.setAttribute("class","opcionSelect")
    select.appendChild(opcion)
  }
  objetivo.appendChild(select)
  return select
}
// a
function ocupadasTotales(arr) {
  let total = 0
  for (var planta of arr) {
    for (var plaza of planta) {
      plaza ? total++ : false
    }
  }
  return total
}
// b
// recuento de libres en esa planta
function libresPlanta(arr,planta) {
  let total = 0
  for (let plaza of arr[planta]) {
    plaza ? null : total++
  }
  return total
}
// c
// recuento de libres con ese numero de plaza
function libresPlaza(arr,plaza) {
  let total = 0
  for (let planta of arr) {
    for (let i = 0; i < planta.length; i++) {
      if (i == plaza && !planta[i]) {
        total++
      }
    }
  }
  return total
}
