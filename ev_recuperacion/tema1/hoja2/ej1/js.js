addEventListener('load',inicio,false)
function inicio() {
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(Math.floor(Math.random()*4+3))
  })
}

function mostrar(texto) {
  document.querySelector("#visualizado").innerHTML = texto;
}
