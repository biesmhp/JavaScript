addEventListener('load',inicio,false)
function inicio() {
  evento = document.querySelector("#selOperador")
  evento.addEventListener('change',function (e) {
    let valor1 = document.querySelector("#inpNum1").value
    let valor2 = document.querySelector("#inpNum2").value
    mostrar(operar(e.target.value,valor1,valor2))
  })

  evento = document.querySelector("#inpNum1","#inpNum2")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  evento = document.querySelector("#btnReset")
  evento.addEventListener('click',function () {
    document.querySelector("#inpNum1").value = 0;
    document.querySelector("#inpNum2").value = 0;
    document.querySelector("#vis").innerHTML = '';
  })
}

function operar(operador,valor1,valor2) {
  valor1 = parseInt(valor1)
  valor2 = parseInt(valor2)

  switch (operador) {
    case 'mas':
      return valor1+valor2;
    case 'menos':
      return valor1-valor2;
    case 'multiplicar':
      return valor1*valor2;
    case 'dividir':
    if (valor2==0) {
      return 'No dividas entre 0'
    }
      return valor1/valor2;
  }
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
