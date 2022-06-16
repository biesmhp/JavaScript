addEventListener('load',inicio,false)

// Array inicial con las frases
const arrFrases = [
  'la liebre es más rápida que la hormiga',
  'el conejo sale de la madriguera',
  'hoy es el examen final de desarrollo en entorno cliente',
  'leo cuidadosamente los enunciados',
  'pregunto cualquier duda que me surja'
]

function inicio() {
  // Ejercicio 1, convertir una frase aleatoria en su propio array de palabras
  const arrFrase = arrFrases[parseInt(Math.random()*arrFrases.length)].split(" ")
  // console.log(arrFrase)

  // Ejercicio 2, desordenar la frase elegida
  let fraseDesordenada = desordenar(arrFrase)
  // console.log(fraseDesordenada)

  // Ejercicio 3, mostrar el array de palabras desordenado
  let cajaInputs = document.querySelector("#inpDatos")
  // con esto añadimos cada palabra al documento
  fraseDesordenada.forEach(item =>
    cajaInputs.appendChild(addSpan(item))
  )
  evento = document.querySelectorAll(".palabra")
  for (let item of evento) {
    item.addEventListener('mouseover',function (e) {
      item.style.backgroundColor = "blue"
    },false)
    item.addEventListener('mouseout',function (e) {
      item.style.backgroundColor = "inherit"
    },false)
    // Ejercicio 4, al pulsar una palabra, esta se mueve un hueco a su izquierda
    item.addEventListener('click',function (e) {
      // Seleccionamos el elemento de su izquierda si hay alguno
      let huecoIzquierda = item.previousElementSibling != null ? item.previousSibling : false
      let aux = item.textContent
      // Si hay elemento a la izquierda los intercambiamos
      if (huecoIzquierda) {
        // El seleccionado cambia su texto al mismo que el de su izquierda
        item.textContent = huecoIzquierda.textContent
        // El de la izquierda pasa a tener el texto del seleccionado
        huecoIzquierda.textContent = aux
      }
    },false)
  }

  // Ejercicio 5, botón para comprobar
  let liComprobacion = document.querySelector("#comprobacion")
  liComprobacion.appendChild(addBoton("btnComprobar","Comprobar"))

  // Ejercicio 6, al pulsar comprobar llama a su función
  let btnComprobar = document.querySelector("#btnComprobar")
  btnComprobar.addEventListener('click',function (e) {
    let palabras = document.querySelectorAll(".palabra")
    let arrCreado = []
    for (let element of palabras) {
      arrCreado.push(element.textContent)
    }
    // Ejercicio 7, recogemos el resultado de la función comprobar y si es falso ponemos la frase en rojo
    let comprobacion = comprobar(arrFrase,arrCreado)
    let cajaVisualizado = document.querySelector("#visualizado")
    cajaVisualizado.appendChild(addFrase(arrFrase,comprobacion))
    // Ejercicio 8, quitamos el botón de comprobación
    btnComprobar.disabled = true
    btnComprobar.value = `${btnComprobar.value} (disabled)`
  })
}

// Ejercicio 2, función desordenar, @param array @return array desordenado
function desordenar(arr) {
  let arrDesordenado = arr
                        .map(value => ({ value, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ value }) => value)
  return arrDesordenado
}

// Ejercicio 3, crea un span para cada palabra, luego les daremos efectos
function addSpan(palabra) {
  let cajita = document.createElement("span")
  cajita.setAttribute("class","palabra")
  let cajitaText = document.createTextNode(palabra)
  cajita.appendChild(cajitaText)
  return cajita
}

// Ejercicio 5, añadir el botón de comprobación
function addBoton(id,value) {
  let boton = document.createElement("input")
  boton.setAttribute("type","button")
  boton.setAttribute("id",id)
  boton.setAttribute("value",value)
  return boton
}

// Ejercicio 6, comprobar que las dos frases sean iguales
function comprobar(fraseOriginal,fraseCreada) {
  return fraseOriginal.join(" ") === fraseCreada.join(" ") ? true : false
}

// Ejercicio 7, añadir la frase correcta
function addFrase(arrFrase,correcion) {
  let visFrase = document.querySelector("#frase") ? document.querySelector("frase") : document.createElement("span")
  visFrase.setAttribute("id","frase")
  correcion ? visFrase.style.backgroundColor = "green" : visFrase.style.backgroundColor = "red"
  let visFraseText = document.createTextNode(arrFrase.join(" "))
  visFrase.appendChild(visFraseText)
  return visFrase
}
