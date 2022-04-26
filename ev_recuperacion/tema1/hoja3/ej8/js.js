// import Cadenita from "./fechita.class";
addEventListener('load',inicio,false)

function inicio() {
  let arrFechas = rellenarFechas()
  // Mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(arrFechas,"#visualizado")
    console.log(arrFechas);
  },false)

  // Sumar días
  evento = document.querySelector("#btnSumaDias")
  evento.addEventListener('click',function (e) {
    let dias = document.querySelector("#inpNum").value
    // let arrFechasPlus = arrFechas.map(item => {item.sumadias(dias); console.log(item)})
    mostrar(arrFechas,"#visualizado")
  },false)

  // Restar meses
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(arrFechas,"#visualizado")
  },false)
}

function rellenarFechas() {
  let arrFechas = []
  // Bucle pidiendo fechas hasta que escriba '0'
  let aux = true
  while (aux) {
    let objIntroducido = prompt("Introduce una fecha: año-mes-día, '0' para salir")
    if (objIntroducido==0) {
      aux = 0
    }else if (objIntroducido != null) {
      let fecha = new Date(objIntroducido)
      arrFechas.push(new Fechita(fecha))
    }
  }
  return arrFechas
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  // console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = ''
    for (var i = 0; i < texto.length; i++) {
      document.querySelector(objetivo).innerText += `${texto[i]}\n`;
    }
  }else{
    document.querySelector(objetivo).innerText = texto;
  }
}


// La clase (dentro del mismo JS por bloqueo debido a CORS)
class Fechita {
  constructor(fecha) {
    this.fecha = fecha
    this.año = fecha.getFullYear()
    this.mes = fecha.getMonth()
    this.dia = fecha.getDate()
  }

  sumadias(num) {
    let nFecha = this.fecha.getMilliseconds()
    let miliD = this.daysToMilliseconds(num)
    nFecha = new Date(nFecha+miliD)
    return new Fechita(nFecha)
  }

  restaMeses(num) {
    let nFecha = this.fecha.getMilliseconds()
    let miliD = this.monthsToMilliseconds(num)
    nFecha = new Date(nFecha-miliD)
    return new Fechita(nFecha)
  }

  // Convertir días en milisegundos
  daysToMilliseconds(days) {
    // 👇️        hour  min  sec  ms
    return days * 24 * 60 * 60 * 1000
  }
  // Convertir meses en milisegundos
  monthsToMilliseconds(meses) {
    // 👇️       months hour  min  sec  ms
    return meses * 12 * 24 * 60 * 60 * 1000
  }

  ver() {
    return `Fecha: ${this.fecha}\n Día ${this.dia} del mes ${this.mes+1} del ${this.año}\n\n`
  }

  toString() {
    return this.ver()
  }
}
