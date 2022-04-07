// El ejercicio ha sido un poco lioso, y no tenía claro que métodos debía usar
addEventListener('load',inicio,false)
function inicio() {
  // Variables a iniciar
  let arrAlumnosO
  let count = 0
  let arrN

  // Añadir el array
  evento = document.querySelector("#btnAddLista")
  evento.addEventListener('click',function (e) {
    // El input recibido debe ser una lista separada por comas (con replace nos aseguramos de quitar los espacios si los hubiese)
    arrAlumnosO = document.querySelector("#inpAlumnos").value.replace(/\s/g, '').split(',')
    arrN = arrAlumnosO.slice()
    document.querySelector("#cajaSorteo").hidden = false
    document.querySelector("#cajaArray").hidden = true
    document.querySelector("#numIntentos").innerText = arrN.length
    document.querySelector("#inpVisAlumnos").value = arrN
  },false)

  // Sorteo
  evento = document.querySelector("#btnSortear")
  evento.addEventListener('click',function (e) {
    // Obtenemos un elemento del array al azar
    let elegido = sorteo(arrN)
    // Obtenemos el index de ese elemento
    let elegidoIndex = arrN.indexOf(elegido)
    // Eliminamos ese elemento del array
    arrN.splice(elegidoIndex,1)
    document.querySelector("#inpVisAlumnos").value = arrN
    // Visualizamos el nuevo array para el usuario, así como sus intentos restantes
    document.querySelector("#numIntentos").innerText = arrN.length
    if (arrN.length == 0) {
      arrN = arrAlumnosO.slice()
    }
    // Visualizamos el elemento elegido para el usuario
    mostrar(elegido)
    count++
  },false)

  // Sorteo
  evento = document.querySelector("#btnSalir")
  evento.addEventListener('click',function (e) {
    alert(count)
    document.querySelector("#cajaSorteo").hidden = true
    document.querySelector("#cajaArray").hidden = false
    count = 0
  },false)
}

// Recibe un array y devuelve un elemento al azar del array
function sorteo(arr) {
  return arr[Math.floor((Math.random()*arr.length))]
}

// Visualiza la respuesta en el HTML
function mostrar(texto) {
  document.querySelector("#visualizado").innerHTML = texto;
}
