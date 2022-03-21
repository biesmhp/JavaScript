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
    if (parseInt(pRealizadas)>=parseInt(pCorrectas)) {
      let arrCandidato = [nombre,pRealizadas,pCorrectas]
      let arrNivel = nivel(arrCandidato)
      arrCandidatos.push(arrNivel)
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

// El array cuenta con [0] --> Nombre, [1] --> Preguntas realizadas, [2] --> Preguntas correctas
function nivel(arr) {
  var porcentaje = 0;
  var nivel = 'Fuera de nivel'
  // Obtenemos el porcentaje
  if (arr[1]!=0) {
    porcentaje = arr[2]/arr[1]*100
  }
  switch (true) {
    case (porcentaje>=90):
      nivel = 'Superior';
      break;
      case (porcentaje>=75):
        nivel = 'Medio';
        break;
        case (porcentaje>=50):
          nivel = 'Bajo';
          break;
  }
  // Formamos el nuevo array del candidato valorado
  var arrValorado = []
  arrValorado.push(arr[0])
  arrValorado.push(nivel)
  arrValorado.push(porcentaje)

  return arrValorado
}

function mostrar(arr) {
  var texto = ''
  if (Array.isArray(arr)) {
    // Columnas
    for (let i in arr) {
      texto += `Candidato; ${arr[i][0]}`
        texto += `, Nivel: ${arr[i][1]}, con porcentaje del ${arr[i][2]}%`
      texto += `\n`
    }
  }else{
    texto = "No puede tener más preguntas correctas que realizadas"
  }
  document.querySelector("#vis").innerHTML = texto;
}
