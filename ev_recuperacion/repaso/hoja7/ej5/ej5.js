addEventListener('load',inicio,false)


function inicio() {
  let arrJaulas = rellenarJaulas(15)

  // Crear un select con las jaulas
  let selNode = document.querySelector("#selJaulas")
  addSelect(arrJaulas,selNode)
  // WIP
  // Crear un radio con las jaulas (WIP: e imagenes)
  let radioNode = document.querySelector("#cajaJaulas")
  // addRadio(arrJaulas,radioNode)

  let evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function () {
    let jaula = document.querySelector("#selJaulas").value
    mostrar(arrJaulas[jaula],"#visualizado")
    document.querySelector("#error").innerHTML = ""

    // Creamos los botones para usar los métodos de la jaula
    controlDeJaula(arrJaulas,jaula)
  },false)
}

function controlDeJaula(arr,jaula) {
  let cajaEspecie = document.querySelector("#cajaEspecie")
  cajaEspecie.innerHTML = ""
  let cajaAnimales = document.querySelector("#cajaAnimales")
  cajaAnimales.innerHTML = ""

  // Input de la especie
  let nodeInpEspecie = document.createElement("input")
  nodeInpEspecie.setAttribute("id","inpEspecie")
  nodeInpEspecie.setAttribute("type","text")
  nodeInpEspecie.setAttribute("placeholder","Especie")
  cajaEspecie.appendChild(nodeInpEspecie)

  // Botón para elegir la especie
  let nodeBtnElegir = document.createElement("input")
  nodeBtnElegir.setAttribute("id","btnElegir")
  nodeBtnElegir.setAttribute("type","button")
  nodeBtnElegir.setAttribute("value","Marcar")
  nodeBtnElegir.addEventListener('click',function () {
    if (!arr[jaula].especieJaula(nodeInpEspecie.value)) {
      mostrar("La jaula debe estar vacia","#error")
    } else {
      mostrar(arr[jaula],"#visualizado")
    }
  })
  cajaEspecie.appendChild(nodeBtnElegir)

  // Input del número de animales
  let nodeInpNumAnimales = document.createElement("input")
  nodeInpNumAnimales.setAttribute("id","inpNumAnimales")
  nodeInpNumAnimales.setAttribute("type","text")
  nodeInpNumAnimales.setAttribute("placeholder","Número de animales")
  nodeInpNumAnimales.addEventListener('keypress',function(e) {
    soloNumeros(e)
  })
  cajaAnimales.appendChild(nodeInpNumAnimales)

  // Botón para meter animales
  let nodeBtnMeter = document.createElement("input")
  nodeBtnMeter.setAttribute("id","btnMeter")
  nodeBtnMeter.setAttribute("type","button")
  nodeBtnMeter.setAttribute("value","Meter")
  nodeBtnMeter.addEventListener('click',function () {
    if (arr[jaula].especie == "") {
      mostrar("Debes seleccionar el tipo de especie primero","#error")
    }else if (!arr[jaula].meterAnimales(nodeInpNumAnimales.value)) {
      mostrar("No caben tantos animales en la jaula","#error")
    } else {
      mostrar(arr[jaula],"#visualizado")
    }
  })
  cajaAnimales.appendChild(nodeBtnMeter)

  // Botón para sacar animales
  let nodeBtnSacar = document.createElement("input")
  nodeBtnSacar.setAttribute("id","btnSacar")
  nodeBtnSacar.setAttribute("type","button")
  nodeBtnSacar.setAttribute("value","Sacar")
  nodeBtnSacar.addEventListener('click',function () {
    if (!arr[jaula].sacarAnimales(nodeInpNumAnimales.value)) {
      mostrar("No hay tantos animales en la jaula","#error")
    } else {
      mostrar(arr[jaula],"#visualizado")
    }
  })
  cajaAnimales.appendChild(nodeBtnSacar)

  mostrar(arr[jaula],"#visualizado")
}

function rellenarJaulas(num) {
  let arrJaulas = []
  for (let i = 0; i < num; i++) {
    arrJaulas[i] = new Jaula()
  }
  return arrJaulas
}

function addSelect(arr,objetivo) {
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value",i)
    opcion.setAttribute("label",`Jaula: ${i}`)
    opcion.setAttribute("class","jaulas")
    objetivo.appendChild(opcion)
  }
  return objetivo ? true : false
}

function addRadio(arr,objetivo) {
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("input")
    opcion.setAttribute("type","radio")
    opcion.setAttribute("name","jaulaRadio")
    opcion.setAttribute("id",`jaula${i}`)
    objetivo.appendChild(opcion)
  }
  return objetivo ? true : false
}

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

function soloNumeros(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    // Números del 0 al 9
    return true
  } else {
    e.preventDefault()
    return false
  }
}

class Jaula {
  constructor(especie) {
    this.especie = especie == undefined ? "" : especie
    this.numAnimales = 0
    this.maxAnimales = 10
  }

  // Devuelve true si hay la cantidad necesaria para retirar o false de lo contrario
  sacarAnimales(nAnimales){
    let restantes = this.numAnimales - nAnimales
    let posible = restantes >= 0 ? true : false
    this.numAnimales = posible ? restantes : this.numAnimales
    return posible
  }

  // Devuelve true si hay el espacio suficiente o false de lo contrario
  meterAnimales(nAnimales){
    let posible = this.especie != "" ? true : false
    if (posible) {
      let total = this.numAnimales + parseInt(nAnimales)
      posible = total <= this.maxAnimales ? true : false
      this.numAnimales = posible ? total : this.numAnimales
    }
    return posible
  }

  // Cambia el tamaño de la jaula (si es posible)
  tamañoJaula(nAnimales){
    let posible = nAnimales >= this.numAnimales ? true : false
    this.maxAnimales = posible ? nAnimales : this.maxAnimales
    return posible
  }

  // Cambia la especie de la jaula (si es posible)
  especieJaula(especie){
    let posible = this.numAnimales == 0 ? true : false
    this.especie = posible ? especie : this.especie
    return posible
  }

  toString() {
    return `Especie: ${this.especie == "" ? "ninguna" : this.especie}. Número de animales en la jaula: ${this.numAnimales}/${this.maxAnimales}`
  }
}
