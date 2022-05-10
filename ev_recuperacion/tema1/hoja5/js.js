// import ClienteBanco from "./ClienteBanco.class";
addEventListener('load',inicio,false)

function inicio() {
  // Penalizaciones
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar('hola',"#visualizado")
  },false)
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
