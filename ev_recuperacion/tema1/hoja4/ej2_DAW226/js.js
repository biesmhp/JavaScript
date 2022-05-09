// import Habitahos from "./Habitahos.class";
addEventListener('load',inicio,false)

function inicio() {
  // Crea un hospital de 3 plantas y 6 habitaciones por planta
  let arrHospital = crearHospital(3,12)
  // console.log(arrHospital);
  mostrarHospital(arrHospital)

  // Hover libre
  evento = document.querySelectorAll("button")
  for (let ev of evento) {
    ev.addEventListener('mouseover',function (e) {
      console.log(e.srcElement.parentElement.id);
      // mostrar(e.srcElement.parentElement.id,"#visualizado")
    },false)
    ev.addEventListener('click',function (e) {
      e.srcElement.className == 'libre' ? e.srcElement.className = 'ocupado' : e.srcElement.className = 'libre'
      // Obtengo los dos números en un array
      let eID = e.srcElement.parentElement.id.replace(/\D/g,'-').split('-').filter(element => element != '')
      // console.log(`Planta: ${eID[0]}, Habitación: ${eID[1]}`);
      createFormulario(eID[0],eID[1])
    },false)
  }


}

function createFormulario(planta,habitacion) {
  // Eliminamos lo anterior si lo hubiese
  let nodo = document.querySelector("#cajaFormulario")
  // let child = nodo.lastElementChild
  // while (child) {
  //   nodo.removeChild(child)
  //   child = nodo.lastElementChild
  // }
  // Generamos el formulario (en realidad es solo un fieldset porque no queremos que se envie a ningún sitio)
  let fieldset = document.createElement("fieldset")
  // Le añadimos una leyenda
  let legend = document.createElement("legend")
  legend.innerText = `pla${planta}hab${habitacion}`
  fieldset.appendChild(legend)
  // Creamos los inputs del fieldset
  // ### input Codigo de paciente
  let inputCodigo = document.createElement("input")
  inputCodigo.setAttribute('type','text')
  inputCodigo.setAttribute('placeholder','Código del paciente')
  // ### input Foto
  // ### boton Enviar
  let botonEnviar = document.createElement("button")
  botonEnviar.setAttribute('id',`${planta},${habitacion}`)
  // evento del botón
  botonEnviar.addEventListener('click',function (e) {
    // console.log(e.srcElement.id);
    let nodoHabitacion = document.querySelector(`#pla${planta}hab${habitacion}`).firstChild
    console.log(nodoHabitacion);
    nodoHabitacion.className == 'ocupado' ? nodoHabitacion.className == 'libre' : nodoHabitacion.className == 'ocupado'
  })
  let botonText = document.createTextNode('Asignar')
  botonEnviar.appendChild(botonText)
  fieldset.appendChild(botonEnviar)
  // Añadimos los inputs al fieldset
  fieldset.appendChild(inputCodigo)
  // Añadimos el 'formulario' al HTML
  nodo.appendChild(fieldset)
  return false
}

function crearHospital(plantas,habitaciones) {
  let arrHospital = []
  for (let i = 0; i < plantas; i++) {
    arrHospital.push([])
    for (let y = 0; y < habitaciones; y++) {
      arrHospital[i].push(false)
    }
  }
  return arrHospital
}

// Funciones de visualización del hospital
function mostrarHospital(arr) {
  // Eliminamos la tabla anterior si la hubiese
  let nodo = document.querySelector("#tablaVis")
  let child = nodo.lastElementChild
  while (child) {
    nodo.removeChild(child)
    child = nodo.lastElementChild
  }
  // Generamos la nueva tabla
  let tabla = document.createElement("table")
  // Creamos su cabecera
  let cabeceraTabla = createCabecera(arr)
  // Creamos su cuerpo
  let cuerpoTabla = createCuerpo(arr)
  // Añadimos la cabecera y el cuerpo a la tabla
  tabla.appendChild(cabeceraTabla)
  tabla.appendChild(cuerpoTabla)
  // Añadimos la tabla al HTML
  return document.querySelector("#tablaVis").appendChild(tabla)
}
// Parte de la tabla
function createCabecera(arrHospital) {
  // Cabecera de la tabla
  let cabeceraTabla = document.createElement("thead")
  cabeceraTabla.setAttribute("class", "cabeceraTabla")
  // TODO bucle
  let lineaCabecera = document.createElement("tr")
  let nombre = document.createElement("th")
  let nombreText = document.createTextNode("Planta")
  nombre.appendChild(nombreText)
  lineaCabecera.appendChild(nombre)
  let habitaciones = document.createElement("th")
  habitaciones.setAttribute("colspan", arrHospital[0].length)
  let habitacionesText = document.createTextNode("Habitaciones")
  habitaciones.appendChild(habitacionesText)
  lineaCabecera.appendChild(habitaciones)
  cabeceraTabla.appendChild(lineaCabecera)
  return cabeceraTabla
}
// Parte de la tabla
function createCuerpo(arrHospital) {
  // Cuerpo de la tabla
  let cuerpoTabla = document.createElement("thead")
  cuerpoTabla.setAttribute("class", "cuerpoTabla")
  // Añadimos los datos según nuestro array de objetos
  for (let i = 0; i < arrHospital.length; i++) {
    let lineaCuerpo = document.createElement("tr")
    let dato = document.createElement("td")
    let datoText = document.createTextNode(i)
    dato.appendChild(datoText)
    lineaCuerpo.appendChild(dato)
    arrHospital[i].forEach((elemento, y) =>{
      let dato = document.createElement("td")
      dato.setAttribute("id", `pla${i}hab${y}`)
      let boton = document.createElement("button")
      boton.setAttribute('class',arrHospital[i][y] == false ? 'libre' : 'ocupado')
      let datoText = document.createTextNode(y)
      boton.appendChild(datoText)
      dato.appendChild(boton)
      lineaCuerpo.appendChild(dato)
    })
    // Añadimos los datos al cuerpo
    cuerpoTabla.appendChild(lineaCuerpo)
  }
  return cuerpoTabla
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  // console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = ''
    for (var i = 0; i < texto.length; i++) {
      document.querySelector(objetivo).innerText += `${texto[i]}\n`;
    }
  }else{
    document.querySelector(objetivo).innerHTML = texto;
  }
}


// La clase (dentro del mismo JS por bloqueo debido a CORS)
class Habitahos {
  constructor(nPlanta,nHabitacion,codPaciente,foto,arrTratamientos) {
    this.nPlanta = nPlanta
    this.nHabitacion = nHabitacion
    this.codPaciente = codPaciente
    this.foto = foto
    this.tratamientos = arrTratamientos
  }


  asignarTratamientos(tratamiento) {
    this.tratamientos.push(tratamiento)
  }

  info() {
    return `Número de planta: ${this.nPlanta}, número de habitación: ${this.nHabitacion}, código de paciente: ${this.codPaciente}\n\n`
  }

  infoTratamientos() {
    return `Tratamientos: ${this.tratamientos}\n\n`
  }

  toString() {
    return this.info()
  }
}
