// import Cadenita from "./fechita.class";
addEventListener('load',inicio,false)

function inicio() {
  // Mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    let fecha1 = new Fechita(new Date(53252636373747))
    let texto = ``
    texto += fecha1
    texto += `\n ${fecha1.sumadias(5)}`
    mostrar(texto,"#visualizado")
  },false)
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  // console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = texto;
  }else{
    document.querySelector(objetivo).innerText = texto;
  }
}


// La clase (dentro del mismo JS por bloqueo debido a CORS)
class Fechita {
  constructor(fecha) {
    this.fecha = fecha
    this.año = fecha.getYear()
    this.mes = fecha.getMonth()
    this.dia = fecha.getDay()
  }

  sumadias(num) {
    let fecha = this.fecha
    return fecha
  }

  restaMeses() {

  }

  toString() {
    return `Fecha: ${this.fecha}\n Día ${this.dia} del mes ${this.mes+1} del año ${this.año}`
  }
}
