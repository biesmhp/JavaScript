addEventListener('load',inicio,false)

function inicio() {
  let arrMaterias = []/*createMaterias(['biologia','tecnologia','matematicas','filosofia'])*/
  let fraseTecnologia = new Frase('tecnologia','Una presa hidráulica es una * de energía *', ['fuente','renovable','contaminante'])
  let fraseBiologia = new Frase('biologia','A las curvas de un * se les llama *', ['río','meandro','afluente'])
  let fraseMatematicas = new Frase('matematicas','El número * es un número *', ['pi','racional','entero'])
  arrMaterias = [fraseTecnologia,fraseBiologia,fraseMatematicas]
  addSelect(arrMaterias,'#selMaterias')

  // Visualización
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    // Recogemos el nodo del select y guardamos el valor escogido por el usuario
    let selectNode = document.querySelector("#selMaterias")
    let indexElegido = arrMaterias.findIndex(frase => frase.materia == selectNode.value)
    // Mostrar la frase con huecos
    let frase = arrMaterias[indexElegido].frase
    let fraseHuecos = frase.split(' ').map((element,index) => element == '*' ? `<button id='btn${index}' class='hueco'>${'___'}</button>` : element)
    mostrar(fraseHuecos,"#visFrase")
    // Método para mezclar/barajar un array
    let shuffledPalabras = arrMaterias[indexElegido].palabras
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .map((element,index) => `<button class='palabra' id='btn${element}'>${element}</button>`)
    // Mostrar las palabras entremezcladas
    mostrar(shuffledPalabras,"#visPalabras")
    // ### WIP### Mostrar el botón de solución
    let fraseNode = document.querySelector("#visFrase")
    let botonCorregir = document.createElement("button")
    botonCorregir.setAttribute('innerText','hola')
    fraseNode.appendChild(botonCorregir)
    // #######
    // Evento para colocar las palabras en los huecos
    evento = document.querySelectorAll(".palabra")
    for (var palabra of evento) {
      palabra.addEventListener('click',function (e) {
        evento2 = document.querySelectorAll(".hueco")
        for (let hueco of evento2) {
          hueco.addEventListener('click', function (o) {
            o.srcElement.innerText = e.srcElement.innerText
          })
        }
      },false)
    }

  },false)
}

function addSelect(arr,objetivo) {
  let select = document.querySelector(objetivo)
  for (let materia of arr) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value",materia.materia)
    opcion.setAttribute("label",materia.materia)
    select.appendChild(opcion)
  }
}

function createMaterias(arr) {
  let arrMaterias = []
  for (let i of arr) {
    let materia = new Materia(i)
    arrMaterias.push(materia)
  }
  return arrMaterias
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = ''
    for (let i = 0; i < texto.length; i++) {
      document.querySelector(objetivo).innerHTML += `${texto[i]}\n`;
    }
  }else{
    document.querySelector(objetivo).innerHTML = texto;
  }
}

class Materia {
  constructor(materia) {
    this.materia = materia
  }

  toString() {
    return `Materia: ${this.materia}`
  }
}

class Frase extends Materia {
  constructor(materia,frase,palabras) {
    super(materia)
    this.frase = frase
    this.palabras = palabras
  }

  toString() {
    return super.toString() +`, Frase: ${this.frase}, Palabras: ${this.palabras}`
  }
}
