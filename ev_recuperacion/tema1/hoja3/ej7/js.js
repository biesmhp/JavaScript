// import Cadenita from "./cadenita.class";
addEventListener('load',inicio,false)

function inicio() {
  // arr de Cadenitas
  let arrCadenitas = rellenarCadenas()
  optionsSel(arrCadenitas)

  // Mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    let nodoSel = document.querySelector("#selObjetos")
    let cadenita1 = arrCadenitas[nodoSel.value-1]
    let texto = `La RISTRA del objeto Cadenita: ${cadenita1.ristra()}\n
      En orden inverso: ${cadenita1.reves()}\n
      Con la primera mayúscula y separado por guiones: ${cadenita1.mayus()}`
    mostrar(texto,"#visualizado")
  },false)
}
// Funcion para rellenar el array de objetos Cadenita
function rellenarCadenas() {
  let arrCadenitas = []
  // Bucle pidiendo textos hasta que escriba '0'
  let aux = true
  while (aux) {
    let objIntroducido = prompt("Introduce un texto, '0' para salir")
    if (objIntroducido==0) {
      aux = 0
    }else{
      arrCadenitas.push(new Cadenita(objIntroducido))
    }
  }
  return arrCadenitas
}

// Añadir las opciones al Select
function optionsSel(arrCadenitas) {
  // Añadimos la opciones
  let opciones = ``
  for (var i = 0; i < arrCadenitas.length; i++) {
    opciones += `<option value='${i+1}'>${i+1}</option>`
  }
  document.querySelector("#selObjetos").innerHTML= opciones
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  // console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = texto;
  }else{
    document.querySelector(objetivo).innerText = texto;
  }
}


// La clase (dentro del mismo JS por bloqueo debido a CORS)
class Cadenita {
  constructor(texto) {
    this.texto = texto
    this.longitud = texto.length
  }

  ristra() {
    let arrPalabras = this.texto.split(' ')
    return arrPalabras
  }

  reves() {
    let arrPalabrasReves = this.texto.split(' ')
    return arrPalabrasReves.reverse()
  }

  buscar(string) {
    let arrPalabras = this.texto.split(' ')
    return arrPalabras.includes(string)
  }

  mayus() {
    let arrPalabras = this.texto.split(' ')
    return arrPalabras.map((item) => item.replace(/^\w/, (c) => c.toUpperCase())).join('-')
  }

  toString() {
    return `El texto: '${this.texto}' de ${this.longitud} carácteres.`
  }
}
