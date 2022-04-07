addEventListener('load',inicio,false)
function inicio() {
  let listaPalabras = []
  // Añadir el array
  evento = document.querySelector("#btnAddLista")
  evento.addEventListener('click',function (e) {
    // Recogemos el nodo del input de palabra
    let palabra = document.querySelector("#inpPalabra")
    // La añadimos al array
    palabra.value!='' ? listaPalabras.push(palabra.value) : null
    // Vaciamos y damos foco al input
    palabra.value = ''
    palabra.focus()
  },false)

  // Primera palabra
  evento = document.querySelector("#btnPrimeraPalabra")
  evento.addEventListener('click',function (e) {
    mostrar(`Primera palabra introducida: ${listaPalabras.slice(0,1)}`,"#visualizado")
  },false)

  // Última palabra
  evento = document.querySelector("#btnUltimaPalabra")
  evento.addEventListener('click',function (e) {
    mostrar(`Última palabra introducida: ${listaPalabras.slice(listaPalabras.length-1)}`,"#visualizado")
  },false)

  // Recuento de palabras
  evento = document.querySelector("#btnRecuento")
  evento.addEventListener('click',function (e) {
    mostrar(`Número de palabras introducidas: ${listaPalabras.length}`,"#visualizado")
  },false)

  // Mostrar palabras por orden alfabético
  evento = document.querySelector("#btnAlfabetico")
  evento.addEventListener('click',function (e) {
    let listaPalabrasOrdenada = listaPalabras.slice()
    listaPalabrasOrdenada.sort((a,b) => a.length-b.length)
    mostrar(`Lista por orden alfabético: ${listaPalabrasOrdenada}`,"#visualizado")
  },false)

  // Mostramos el array original
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(listaPalabras,"#visualizado")
  },false)
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
