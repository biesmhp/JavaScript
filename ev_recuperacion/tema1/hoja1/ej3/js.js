addEventListener('load',inicio,false)
function inicio() {
  arrCandidatos = []
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
    let nombre = document.querySelector("#inpNombre").value
    let pRealizadas = document.querySelector("#inpRealizadas").value
    let pCorrectas = document.querySelector("#inpCorrectas").value
    let arrCand = [nombre,pRealizadas,pCorrectas]
    if (parseInt(pRealizadas)>=parseInt(pCorrectas)) {
      arrCandidatos.push(arrCand)
      mostrar(arrCandidatos)
    }else{
      mostrar()
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
  var texto = ''
  if (Array.isArray(arr)) {
    // Columnas
    for (let i in arr) {
      texto += `Candidato: ${arr[i][0]}`
        texto += `, preguntas correctas de las realizadas: ${arr[i][2]}/${arr[i][1]}`
      texto += `\n`
    }
  }else{
    texto = "No puede tener más preguntas correctas que realizadas"
  }
  document.querySelector("#vis").innerHTML = texto;
}
