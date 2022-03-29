addEventListener('load',inicio,false)
function inicio() {

  // evento, añadir jugador y mostrar el resto
  evento = document.querySelector("#btnAddPlayer")
  evento.addEventListener('click',function (e) {
    let nombre = document.querySelector("#inpNombre").value
    addPlayer(nombre)
    document.querySelector("#cajaJugador").hidden = true
    document.querySelector("#cajaDados").hidden = false
  },false)

  // evento, tirada de dados
  evento = document.querySelector("#btnRollDice")
  evento.addEventListener('click',function (e) {
    let tiradasDOM = document.querySelector("#numTiradas")
    let numTiradas = tiradasDOM.textContent-1
    tiradasDOM.textContent = numTiradas
    if (numTiradas<=0) {
      tiradasDOM.hidden = true
      btnRollDice.hidden = true
    }
    mostrarTirada(tirada())
  },false)
}

function addPlayer(nick) {
  if (nick==''||nick===null) {
    nick = 'Ejemplo'
  }
  localStorage.setItem(nick,[])
}

function mostrarTirada(arr) {
  let texto = ``
  for (var i = 0; i < arr.length; i++) {
    texto += `Dado ${i+1}: ${arr[i]} \n`
  }
  document.querySelector("#visTirada").innerText = texto
}

function tirada() {
  let tiradasInd = []
  for (var i = 0; i < 5; i++) {
    tiradasInd.push(Math.floor(Math.random()*6+1))
  }
  return tiradasInd
}
