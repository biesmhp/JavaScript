addEventListener('load',inicio,false)
function inicio() {
  // Array de números enteros
  var arrNumerosEnteros = []

  // Evento, solo números
  evento = document.querySelector("#inpNumero")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  // Evento, añadir número al array
  evento = document.querySelector("#btnAddNum")
  evento.addEventListener('click',function (e) {
    let valor = document.querySelector("#inpNumero")
    arrNumerosEnteros.push(parseInt(valor.value))
  },false)


}

function mostrar(val,texto) {
  document.querySelector("#visualizado").innerHTML = `${texto} <strong>${val}</strong>`;
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
