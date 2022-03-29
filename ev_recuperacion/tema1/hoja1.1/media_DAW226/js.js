addEventListener('load',inicio,false)
function inicio() {
  // Array de números enteros
  var arrNumerosEnteros = [9,2,4,5,6,7,7,8,4,3,3,5,7]
  console.log(arrNumerosEnteros);

  // Evento, soloNumeros inicio
  evento = document.querySelector("#inpInicio")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)
  // Evento, soloNumeros final
  evento = document.querySelector("#inpFinal")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  // Evento, array
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    let inicio = document.querySelector("#inpInicio").value
    let final = document.querySelector("#inpFinal").value
    if (inicio>final||inicio>arrNumerosEnteros.length||inicio=='') {
      inicio = 0
    }
    if (final>arrNumerosEnteros.length||final=='') {
      final = arrNumerosEnteros.length
    }
    mostrar(mediaFiltrada(arrNumerosEnteros,inicio,final))
  },false)


}

function mediaFiltrada(arr,inicio,final) {
  let total = 0
  let count = 0

    for (var i = inicio; i <= final; i++) {
      count++
      total += arr[i]
    }

  return total/count
}

function mostrar(val) {
  document.querySelector("#visualizado").innerHTML = `El valor promedio dentro del rango especificado es: ${val}`;
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
