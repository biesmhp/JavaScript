addEventListener('load',inicio,false)


function inicio() {
  let arrJaulas = rellenarJaulas(15)
  // console.log(arrJaulas);
  let selNode = document.querySelector("#selJaulas")
  addSelect(arrJaulas,selNode)

  let evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function () {
    let jaula = document.querySelector("#selJaulas").value

    mostrar(arrJaulas[jaula],"#visualizado")
  },false)
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
    opcion.setAttribute("label",i+1)
    opcion.setAttribute("class","jaulas")
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
      let total = this.numAnimales + nAnimales
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
    return `Especie: ${this.especie == "" ? "ninguna" : this.especie}. Número de aniamles en la jaula: ${this.numAnimales}/${this.maxAnimales}`
  }
}
