addEventListener('load',inicio,false)
function inicio() {
  let temporizador = 10
  let encendida = false
  let timer = null
  let visTempo = 0
  if (temporizador<10) {
    visTempo = "0"+temporizador
  }else{
    visTempo = temporizador
  }
  mostrar(visTempo,"#visTemporizador")
  let botones = [
    'black','blue','green','pink','red','yellow'
  ]
  mostrar(mostrarBotones(botones),"#divBotones")

  evento = document.querySelector("#btnIniciar")
  evento.addEventListener('click',function () {
    if (!encendida) {
      timer = setInterval(function () {
        if (temporizador > 0) {
          temporizador = temporizador-1
          let visTempo = 0
          if (temporizador<10) {
            visTempo = "0"+temporizador
          }else{
            visTempo = temporizador
          }
          mostrar(visTempo,"#visTemporizador")
        }else if (temporizador == 0){
          perdiste()
          encendida = false
          clearInterval(timer)
        }
      },1000)
      encendida = true
    }else{
      encendida = false
      clearInterval(timer)
    }
  },false)

  let shuffled = botones
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  evento = document.querySelector(`#btn${shuffled[0]}`)
  evento.addEventListener('click',function () {
    if (encendida) {
      alert('perdida de tiempo')
      mostrar(`Perdida de tiempo`,"#visualizar")
    }
  })
  evento = document.querySelector(`#btn${shuffled[1]}`)
  evento.addEventListener('click',function () {
    if (encendida) {
      temporizador = temporizador+5
      mostrar(`¡Ganas 5 segundos!`,"#visualizar")
    }
  })
  evento = document.querySelector(`#btn${shuffled[2]}`)
  evento.addEventListener('click',function () {
    if (encendida) {
      temporizador = 0
      mostrar(`¡Boom!`,"#visualizar")
    }
  })
  evento = document.querySelector(`#btn${shuffled[3]}`)
  evento.addEventListener('click',function () {
    if (encendida) {
      mostrar(`El botón: ${shuffled[4]} no explota ni desactiva`,"#visualizar")
    }
  })
  evento = document.querySelector(`#btn${shuffled[4]}`)
  evento.addEventListener('click',function () {
    if (encendida) {
      mostrar(`Prueba con otro`,"#visualizar")
    }
  })
  evento = document.querySelector(`#btn${shuffled[5]}`)
  evento.addEventListener('click',function () {
    if (encendida) {
      localStorage.setItem('mejorTiempo',temporizador)
      encendida = false
      clearInterval(timer)
      document.querySelector("#btnIniciar").hidden = true
      mostrar(`¡Lo lograste! Bomba neutralizada.`,"#visualizar")
    }
  })

}

function mostrarBotones(arrBotones) {
  let aMostrar = ``
  for (let i = 0; i < arrBotones.length; i++) {
    aMostrar += `<button type="button" id="btn${arrBotones[i]}"><img src="img/${arrBotones[i]}.png" width="50"></button>`
  }
  return aMostrar
}

function perdiste() {
  document.querySelector("#idBomb").src = "img/explosion.png"
  alert('Ha!')
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  // console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = texto;
  }else{
    document.querySelector(objetivo).innerHTML = texto;
  }
}
