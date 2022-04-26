// import Cadenita from "./cadenita.class";
addEventListener('load',inicio,false)

function inicio() {
  // Filtrar la velocidad máxima para que solo coja números
  evento = document.querySelector("#inpVelMax")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  let autos = []
  let auto1 = new Auto('seat','gris',300,'foto')
  autos.push(auto1)
  // Crear auto
  evento = document.querySelector("#btnAddAuto")
  evento.addEventListener('click',function (e) {
    let nodeModelo = document.querySelector("#inpModelo")
    let nodeColor = document.querySelector("#inpColor")
    let nodeVelMax = document.querySelector("#inpVelMax")
    let nodeImagen = document.querySelector("#inpImagen")
    let auto = new Auto(nodeModelo.value,nodeColor.value,nodeVelMax.value,nodeImagen.value)
    autos.push(auto)
  },false)

  // Mostrar
  evento = document.querySelector("#btnMostrarAutos")
  evento.addEventListener('click',function (e) {
    mostrar(autos,"#visualizado")
    // let cardAuto = ``
    // for (var i = 0; i < autos.length; i++) {
    //   cardAuto += `
    //     <div id="${i}">
    //       <input type="radio" name="autos" value="${i}">
    //       <input type="text" value="${autos[i].modelo}" readonly>
    //       <input type="text" value="${autos[i].color}" readonly>
    //       <input type="text" value="${autos[i].varVelocidad()}" readonly>
    //       <div class="lateral">
    //         <button type="button" class="btnArrancar">Arrancar</button>
    //         <button type="button" class="btnAcelerar">Acelerar</button>
    //         <button type="button" class="btnFrenar">Frenar</button>
    //       </div>
    //     </div>
    //   `
    // }
    // cardAuto += `</span>`
    let container = document.querySelector("#visAutos");
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    // Visualiza las tarjetas (cards) de cada auto
    autos.forEach(res => {
      container = document.querySelector("#visAutos");
      let card = document.createElement("div");
      card.setAttribute("class","card")
      // Modelo
      let model = document.createElement('p');
      model.setAttribute("class","modelo")
      let modelContent = document.createTextNode('Modelo:' + res.modelo + ', ')
      model.appendChild(modelContent)
      card.appendChild(model);
      // Color
      let color = document.createElement('p');
      color.setAttribute("class","color")
      let colorDesc = document.createTextNode('Color:' + res.color + ', ');
      color.appendChild(colorDesc)
      card.appendChild(color);

      let date = document.createTextNode('velocidad:' + res.varVelocidad());
      card.appendChild(date);

      container.appendChild(card);
    });
    // mostrar(cardAuto,"#visAutos")
  },false)

  // WIP
  evento = document.querySelectorAll(".btnArrancar")
  console.log(evento);
  for (var i = 0; i < evento.length; i++) {
    evento[i].addEventListener('click',function (e) {
      let elegido = document.querySelectorAll("input[type=radio]")
      console.log(elegido);
    },false)
  }
  // 👆 dont work yet

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
    document.querySelector(objetivo).innerHTML = texto;
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


// La clase (dentro del mismo JS por bloqueo debido a CORS)
class Auto {
  constructor(modelo,color,velMax,imagen) {
    this.modelo = modelo
    this.color = color
    this.velMax = velMax
    this.velocidad = 0
    this.encendido = false
    this.imagen = imagen ? imagen : undefined
  }

  varVelocidad() {
    return this.velocidad
  }

  acelerar(sum) {
    if (this.encendido) {
      let aumento = sum ? sum : 10
      this.velocidad = this.velocidad+aumento > this.velMax ? this.velMax : this.velocidad+aumento
      return this.varVelocidad()
    }else{
      return `Auto apagado`
    }
  }

  frenar(res) {
    if (this.encendido) {
      let aumento = res ? res : 10
      this.velocidad = this.velocidad-aumento < 0 ? 0 : this.velocidad-aumento
      return this.varVelocidad()
    }else{
      return `Auto apagado`
    }
  }

  arrancar() {
    // Enciende o apaga el auto
    if (this.encendido) {
      this.encendido = false
    }else{
      this.encendido = true
    }
  }

  toString() {
    return `El auto: '${this.modelo}' de color ${this.color}, con velocidad máxima de ${this.velMax}.`
  }
}
