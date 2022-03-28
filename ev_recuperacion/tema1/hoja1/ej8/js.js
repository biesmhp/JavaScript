addEventListener('load',inicio,false)
function inicio() {

  // Evento (bucle con While)
  evento = document.querySelector("#btnWhile")
  evento.addEventListener('click',function (e) {
    let aux = true
    while (aux) {
      let numeroW = parseInt(prompt("Introduce un número entre 1 y 5"))
      if (numeroW>=1 && numeroW<=5) {
        aux = false;
        mostrar(numeroW)
      }
    }
  },false)

  // Evento ("falso bucle" con botón e input)
  evento = document.querySelector("#btnInput")
  evento.addEventListener('click',function (e) {
    let inputNumero = document.querySelector("#inpNumber")
    let numberI = parseInt(inputNumero.value)
    if (numberI>=1 && numberI<=5) {
      mostrar(numberI)
    }else{
      inputNumero.value = '';
      inputNumero.focus()
    }
  })

}

function mostrar(numero) {
  document.querySelector("#visualizado").innerHTML = `El número introducido es: ${numero}`;
}
