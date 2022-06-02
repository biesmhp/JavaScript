addEventListener('load',inicio,false)

function inicio() {
  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function () {
    let hilo = document.querySelector("#inpString").value
    let [stringConIndice,longitud] = agregarIndice(hilo)
    mostrar(stringConIndice,"#visualizado1")
    mostrar(`La nueva longitud del array es de: ${longitud}`,"#visualizado2")
  },false)
}

function agregarIndice(string) {
  let stringModificado = string.split("").map((elemento, index) => elemento+index).join("")
  return [stringModificado,stringModificado.length]
}

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
