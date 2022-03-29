addEventListener('load',inicio,false)
function inicio() {
  mostrar()
}

function mostrar() {
  var texto = ``
  for (var i = 0; i <= 30; i++) {
    for (var y = 0; y < i; y++) {
      texto += `${i}`
    }
    texto += `\n\n`
  }
  // console.log(texto);
  document.querySelector("#visualizado").innerText = texto
}
