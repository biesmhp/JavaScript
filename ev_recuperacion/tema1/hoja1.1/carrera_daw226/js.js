addEventListener('load',inicio,false)
function inicio() {
  // Array original
  let arrCompetidores = ['Karla', 'Cándido', 'Isabel', 'Paula', 'Carlos', 'Aníbal']
  arrCon = arrCompetidores.slice()

  // Evento, array
  evento = document.querySelector("#btnVisualizar")
  evento.addEventListener('click',function (e) {
    visual(arrCon)
    console.log(arrCon);
    document.querySelector("#cajaVisualizar").hidden = true
    document.querySelector("#cajaBotones").hidden = false
  },false)

  // evento, Paula adelanta a Isabel
  evento = document.querySelector("#btnPaulaAIsabel")
  evento.addEventListener('click',function (e) {
    arrCon.slice(visual(adelanta(arrCon,'Paula','Isabel')))
    console.log(arrCon);
    document.querySelector("#btnPaulaAIsabel").hidden = true
  },false)

  // evento, Aníbal es descalificado
  evento = document.querySelector("#btnAnibalFuera")
  evento.addEventListener('click',function (e) {
    arrCon.slice(visual(elimina(arrCon,'Aníbal')))
    console.log(arrCon);
    document.querySelector("#btnAnibalFuera").hidden = true
  },false)

  // evento, se añaden Yessica y Alejandro después de Karla
  evento = document.querySelector("#btnAddYessicaAlejandro")
  evento.addEventListener('click',function (e) {
    arrCon.slice(visual(add2(arrCon,'Yessica','Alejandro','Karla')))
    console.log(arrCon);
    document.querySelector("#btnAddYessicaAlejandro").hidden = true
  },false)

  // evento, se añaden Yessica y Alejandro después de Karla
  evento = document.querySelector("#btnAddMarta")
  evento.addEventListener('click',function (e) {
    arrCon.unshift('Marta')
    visual(arrCon)
    console.log(arrCon);
    document.querySelector("#btnAddMarta").hidden = true
  },false)
}

function visual(arr) {
  let texto = ``
  for (let i = 0; i < arr.length; i++) {
    texto += `${i+1}: ${arr[i]}`
    texto += `\n`
  }
  document.querySelector("#visualizado").innerText = texto
}

function adelanta(arr,avanza,atrasa) {
  let antiguaPosicion
  let nuevaPosicion
  for (var i = 0; i < arr.length; i++) {
    // Recogemos la posición del competidor que queda atras
    if (arr[i]==atrasa) {
      nuevaPosicion = i
    }
    // Recogemos la posición del competidor que adelanta
    if (arr[i]==avanza) {
      antiguaPosicion = i
    }
  }
  // Nos aseguramos de que el jugador que adelanta avance posiciones y que no pueda invertirse el flujo
  if (nuevaPosicion<antiguaPosicion) {
    // Añade 'avanza' a la posición 'atrasa', y elimina el valor que ocupaba ese lugar
    arr.splice(nuevaPosicion,1,avanza)
    // Elimina 'atrasa' y
    arr.splice(antiguaPosicion,1,atrasa)
  }
  return arr
}

function elimina(arr,nombre) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==nombre) {
      arr.splice(i,1)
    }
  }
  return arr
}

function add2(arr,nombre1,nombre2,posicion) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==posicion) {
      posicion = i+1
    }
  }
  arr.splice(posicion,0,nombre1,nombre2)
  return arr
}
