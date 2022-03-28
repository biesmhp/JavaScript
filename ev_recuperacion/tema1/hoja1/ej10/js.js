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
    let pares = parImpar(arrNumerosEnteros)
    mostrar(pares, arrNumerosEnteros.length-pares)
    // Reseteamos la caja
    valor.value = ''
    valor.focus()
  },false)


}

function parImpar(arr) {
  let count = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
      count++
    }
  }
  return count
}

function mostrar(val1,val2) {
  document.querySelector("#visualizado").innerHTML = `Hay ${val1} números pares y ${val2} números impares`;
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
