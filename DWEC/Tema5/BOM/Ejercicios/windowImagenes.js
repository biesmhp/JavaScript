addEventListener("load", inicio, false);

function inicio() {
    let imagenes = document.getElementById("imagenes");
    let mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", function () {
        let ventana = window.open("", "_blank", "height=600,width=600");
        ventana.document.write(`<img src="${imagenes.value}">`);
    }, false);
}