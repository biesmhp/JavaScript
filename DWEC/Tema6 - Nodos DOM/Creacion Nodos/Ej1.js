addEventListener("load", inicio, false);

function inicio() {
    let boton = document.getElementById("add");
    let contador = 1;
    boton.addEventListener("click", function () {
        addParrafo(contador);
        contador++;
    }, false);
}

function addParrafo(contador) {
    let parrafo = document.createElement("p");
    parrafo.innerText = `Nuevo nodo nº${contador}`;
    let div = document.getElementById("parrafos");
    div.appendChild(parrafo);
}