addEventListener('load',inicio,false)
function inicio() {
  // Solo números
  evento = document.querySelector("#inpDias")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  // Sumar días
  evento = document.querySelector("#btnAddDias")
  evento.addEventListener('click',function (e) {
    // Recogemos el nodo del input de los días
    let dias = document.querySelector("#inpDias")
    let nuevoDia = sumDias(dias.value)
    mostrar(nuevoDia,"#visualizado")
  },false)

  // Restar días
  evento = document.querySelector("#btnSubDias")
  evento.addEventListener('click',function (e) {
    // Recogemos el nodo del input de los días
    let dias = document.querySelector("#inpDias")
    let nuevoDia = subDias(dias.value)
    mostrar(nuevoDia,"#visualizado")
  },false)
}

// Sumar días
function sumDias(num) {
  let fecha = Date.now()
  fecha = new Date(fecha+daysToMilliseconds(num))
  return fecha
}
// Restar días
function subDias(num) {
  let fecha = Date.now()
  fecha = new Date(fecha-daysToMilliseconds(num))
  return fecha
}
// Convertir días en milisegundos
function daysToMilliseconds(days) {
  // 👇️        hour  min  sec  ms
  return days * 24 * 60 * 60 * 1000;
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = texto;
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
