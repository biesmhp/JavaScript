addEventListener('load', inicio, false);
var divVisualizar

function inicio() {
    divVisualizar = document.querySelector("#visualizar")

    document.addEventListener("keypress", sacarEventos, false)
}

function sacarEventos(e) {

    divVisualizar.innerHTML ="Key " + e.key +"\n"+"\n"

    divVisualizar.innerHTML +=String.fromCharCode(e.charCode)
}