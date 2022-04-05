addEventListener('load',inicio,false)
function inicio() {
  // Inicializa el nick que tendrá el jugador
  let jugador = ''

  // evento, añadir jugador y mostrar el resto
  evento = document.querySelector("#btnAddPlayer")
  evento.addEventListener('click',function (e) {
    let nombre = document.querySelector("#inpNombre").value
    jugador = addPlayer(nombre)
    // Oculta el formulario para introducir el usuario y muestra el botón de las tiradas
    document.querySelector("#cajaJugador").hidden = true
    document.querySelector("#cajaDados").hidden = false
    // Añade el nombre del jugador a las cajas donde debe verse
    let arrJugadorVis = document.querySelectorAll(".jugador")
    for (var i = 0; i < arrJugadorVis.length; i++) {
      arrJugadorVis[i].innerText = jugador
    }
    // Muestra la tabla
    document.querySelector("#tablaRes").hidden = false
  },false)

  // evento, tirada de dados
  evento = document.querySelector("#btnRollDice")
  evento.addEventListener('click',function (e) {
    // Muestra el número de tiradas restantes
    let tiradasDOM = document.querySelector("#numTiradas")
    let numTiradas = tiradasDOM.textContent-1
    tiradasDOM.textContent = numTiradas
    // Si no le quedan tiradas desaparece el botón y toda la caja
    if (numTiradas<=0) {
      document.querySelector("#cajaDados").hidden = true
    }
    // Genera el array con la tirada
    let arrTirada = tirada()
    // Lo visualiza
    mostrarTirada(arrTirada)
    tablaTiradas(arrTirada,jugador,numTiradas)
  },false)
}

function addPlayer(nick) {
  if (nick==''||nick===null) {
    nick = 'Ejemplo'
  }
  if (localStorage.getItem(nick)==null) {
    localStorage.setItem(nick,new Array(8))
  }
  return nick
}

// Visualiza una tabla con las mejores puntuaciones de un jugador
function tablaTiradas(arr,nick,num) {
  num = 8-num
  let count = 0
  // Rellenar el contenido de la tabla
  // Creamos los nodos
  let fila = document.createElement("tr")
  let columnaDesc = document.createElement("td")
  let columnaPuntos = document.createElement("td")
  let columnaPMax = document.createElement("td")

  // Contamos los aciertos (los unos en la primera, los doses en la segunda...)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]==num&&arr[i]<=5) {
      count++
    }
  }
  // Rellenamos la columna de descripción
  switch (num) {
    case 1:
    columnaDesc.innerText = `Unos (${count})`
    break;
    case 2:
    columnaDesc.innerText = `Doses (${count})`
    break;
    case 3:
    columnaDesc.innerText = `Treses (${count})`
    break;
    case 4:
    columnaDesc.innerText = `Cuatros (${count})`
    break;
    case 5:
    columnaDesc.innerText = `Cincos (${count})`
    break;
    case 6:
    columnaDesc.innerText = `Seises (${count})`
    break;
    case 7:
    columnaDesc.innerText = `Poker`
    break;
    case 8:
    columnaDesc.innerText = `Repoker`
    break;
  }
  // Recogemos el valor del almacenamiento local del jugador correspondiente
  let anteriorRecord = recogerArray(nick)
  // Rellenamos la columna de puntos y puntos máximos para las 6 primeras filas
  if (num<=6) {
    // Valor total de esa tirada
    let valorM = count*num
    // Añadimos los valores al almacenamiento local si han superado el anterior record de ese usuario
    if (anteriorRecord[num-1]<valorM) {
      anteriorRecord[num-1] = valorM
      localStorage.setItem(nick,anteriorRecord)
    }
    // Rellenamos la columna de puntos
    columnaPuntos.innerText = `${valorM}`
    // Rellenamos la columna de Puntos Máximos
    columnaPMax.innerText = `${anteriorRecord[num-1]=='' ? 0 : anteriorRecord[num-1]}/${num*5}`
  }else if (num>=7) {
    // Recogemos la puntuación si ha hecho poker o repoker en sus respectivas tiradas
    let puntua = 0
    for (let i = 0; i < arr.length; i++) {
      let numRepetido = arr.filter(x => x===i).length
      // Si es la tirada 7 y ha hecho poker
      if (numRepetido>=4&&num==7) {
        puntua = 60
      }
      // Si es la tirada 8 y ha hecho repoker
      if (numRepetido>=5&&num==8) {
        puntua = 80
      }
    }
    // Rellenamos la columna de puntos
    columnaPuntos.innerText = `${puntua}`
    // Añadimos los valores al almacenamiento local si han superado el anterior record de ese usuario
    if (puntua!=0) {
      anteriorRecord[num-1] = puntua
      localStorage.setItem(nick,anteriorRecord)
    }
    // Volvemos a recoger los valores del localStorage
    let maxPoker = recogerArray(nick)
    // Rellenamos la columna de Puntos Máximos
    if (num==7) {
      columnaPMax.innerText = `${maxPoker[num-1]==60 ? 60 : 0}/${60}`
    }else if (num==8) {
      columnaPMax.innerText = `${maxPoker[num-1]==80 ? 80 : 0}/${80}`
    }
  }
  // Añadir las filas y columnas a la tabla
  fila.appendChild(columnaDesc)
  fila.appendChild(columnaPuntos)
  fila.appendChild(columnaPMax)
  return document.querySelector("#tablaResultados").appendChild(fila)
}

// Extraer el array del localStorage
function recogerArray(nick) {
  // Recogemos el valor del almacenamiento local del jugador correspondiente
  let arr = localStorage.getItem(nick)
  arr = arr.split(',')
  return arr
}

function mostrarTirada(arr) {
  let texto = ``
  for (var i = 0; i < arr.length; i++) {
    texto += `<span>Dado ${i+1}: <img src='dados/dice-${arr[i]}.svg' width=30 hight=30></span> \n`
  }
  return document.querySelector("#visTirada").innerHTML = texto
}

function tirada() {
  let tiradasInd = []
  for (var i = 0; i < 5; i++) {
    tiradasInd.push(Math.floor(Math.random()*6+1))
  }
  // Evento especial, dados ROJOS
  let count = 0;
  for (var i = 0; i < tiradasInd.length; i++) {
    if (tiradasInd[i]==1||tiradasInd[i]==3) {
      count++
    }
  }
  // if (count==5) {
    let cuerpo = document.querySelector("body")
    cuerpo.setAttribute('style', 'color: red');
    cuerpo.setAttribute('style', 'background: red');
  // }

  // Fin de evento
  return tiradasInd
}
