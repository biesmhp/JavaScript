addEventListener("load", inicio, false);

arrayPalabras = Array("Javascript", "NodeJS", "Framework", "Backend");
palabra = "";
function inicio() {
    let botonAleatorio = document.getElementById("botonAleatorio");
    let botonBorrar = document.getElementById("botonBorrar");
    botonAleatorio.addEventListener("click", function () {
        elegirPalabra();
        generarPalabra();
        botonAleatorio.disabled = true;
        botonBorrar.disabled = false;
    }, false);
    botonBorrar.addEventListener("click", function () {
        let div = document.querySelector(".deletreo");
        document.body.removeChild(div);
        botonAleatorio.disabled = false;
        botonBorrar.disabled = true;
    }, false);
}

function elegirPalabra() {
    let rnd = Math.round(Math.random()*(arrayPalabras.length-1));
    palabra = arrayPalabras[rnd];
}

function generarPalabra() {
    let div = document.createElement("div");
    div.setAttribute("class", "deletreo");
    document.body.appendChild(div);
    for (const letra of palabra) {
        div.appendChild(generarLabel(letra));
    }
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
}

function generarLabel(letra) {
    let label = document.createElement("label");
    label.setAttribute("style", "border: black 1px solid; margin: 1em; padding: 0.5em");
    label.innerHTML = letra;
    return label;
}