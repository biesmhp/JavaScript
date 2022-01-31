addEventListener('load', inicio, false);
var divVisualizar

function inicio() {
    divVisualizar = document.querySelector("#visualizar")

    document.addEventListener("keydown", sacarEventos, false)
    document.addEventListener("keypress", sacarEventos, false)
    document.addEventListener("keyup", sacarEventos, false)
}

function sacarEventos(e) {

    divVisualizar.innerHTML += e.type +"\n"
    divVisualizar.innerHTML +="Which " + e.which + ", chartCode " + e.charCode + ", keyCode " + e.keyCode +"\n"+"\n"


}