addEventListener('load',inicio,false)
function inicio() {
  evento = document.querySelector("#inpRealizadas")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)
  evento = document.querySelector("#inpCorrectas")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  evento = document.querySelector("#btnInforme")
  evento.addEventListener('click',function (e) {
    let pRealizadas = document.querySelector("#inpRealizadas").value
    let pCorrectas = document.querySelector("#inpCorrectas").value
    if (pRealizadas>=pCorrectas) {
      mostrar(pCorrectas)
    }
  },false)
}

function soloNumeros(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 44) {
    // Números del 0 al 9
    return true
  } else {
    e.preventDefault()
    return false
  }
}

function mostrar(arr) {
  document.querySelector("#vis").innerHTML = arr;
}
