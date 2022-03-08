addEventListener("load", inicio, false);

function inicio() {
    let resolucion = document.getElementById("resolucion");

    document.getElementById("volver").addEventListener("click", function () {
        window.history.back();
    }, false);
    resolucion.innerHTML += `${window.screen.width}x${window.screen.height}p`;
}