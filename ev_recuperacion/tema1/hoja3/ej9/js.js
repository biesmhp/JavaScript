// import Cadenita from "./cadenita.class";
addEventListener('load',inicio,false)

function inicio() {
  let auto1 = new Auto('seat','gris',300,'foto')
  // Mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(auto1.frenar(30),"#visualizado")
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
class Auto {
  constructor(modelo,color,velMax,imagen) {
    this.modelo = modelo
    this.color = color
    this.velMax = velMax
    this.velocidad = 0
    this.encendido = false
    this.imagen = imagen
  }

  varVelocidad() {
    return this.velocidad
  }

  acelerar(sum) {
    let aumento = sum ? sum : 10
    this.velocidad = this.velocidad+aumento > this.velMax ? this.velocidad : this.velocidad+aumento
    return this.varVelocidad()
  }

  frenar(res) {
    let aumento = res ? res : 10
    this.velocidad = this.velocidad-aumento < 0 ? this.velocidad : this.velocidad-aumento
    return this.varVelocidad()
  }

  toString() {
    return `El auto: '${this.modelo}' de color ${this.color} con velocidad máxima de ${this.velMax}.`
  }
}
