addEventListener('load',inicio,false)
function inicio() {
  evento = document.querySelector("#inpNum1")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  evento = document.querySelector("#inpNum1")
  evento.addEventListener('change',function (e) {
    let valor1 = document.querySelector("#inpNum1").value
    if(numCifras(valor1,3)){
      mostrar(sumadora(valor1.charAt(0),valor1.charAt(1),valor1.charAt(2)))
    }else{
      mostrar('Debe tener menos de 4 cifras')
    }
  },false)
}

// Devuelve la suma de las cifras del numero {valor} si el numero {valor} contiene menos o igual de cifras que el valor del segundo parámetro {num}
function numCifras(valor,num) {
  var numCifras = 0
  for (var posicion in valor) {
    numCifras++
  }
  if (numCifras <= num) {
    return true
  }else{
    return false
  }
}

function sumadora() {
  let inicial = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]!='') {
      inicial += parseInt(arguments[i])
    }
  }
  return inicial;
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

function mostrar(texto) {
  document.querySelector("#vis").innerHTML = texto;
}
