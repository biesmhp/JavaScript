addEventListener('load',inicio,false)
function inicio() {
  // Variables a iniciar
  let arrAlumnosO
  let count
  let arrN
  // Sorteo
  evento = document.querySelector("#btnSortear")
  evento.addEventListener('click',function (e) {
    // Si es la primera vez que se ejecuta definimos el arrray
    if (arrAlumnosO === undefined||count == 0) {
      // El input recibido debe ser una lista separada por comas (con replace nos aseguramos de quitar los espacios si los hubiese)
      arrAlumnosO = document.querySelector("#inpAlumnos").value.replace(/\s/g, '').split(',')
      arrN = arrAlumnosO.slice()
      count = arrN.length
      document.querySelector("#inpAlumnos").value = arrAlumnosO
    }else {
      // Sino reducimos la lista
      count--
      console.log(count);
    }
    // Obtenemos un elemento del array al azar
    let elegido = sorteo(arrN)
    // Obtenemos el index de ese elemento
    let elegidoIndex = arrN.indexOf(elegido)
    // Eliminamos ese elemento del array
    arrN.splice(elegidoIndex,1)
    // Visualizamos el nuevo array para el usuario, así como sus intentos restantes
    document.querySelector("#inpAlumnos").value = arrN
    document.querySelector("#numIntentos").innerText = arrN.length
    // Visualizamos el elemento elegido para el usuario
    mostrar(elegido)
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
