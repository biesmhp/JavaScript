addEventListener("load", inicio, false);

let arrayConversor = Array(1000, 60, 60, 24, 365);

function inicio() {
    let input = document.getElementById("inputOrigen");
    let origen = document.getElementById("tipoOrigen");
    let destino = document.getElementById("tipoDestino");
    let resultado = document.getElementById("resultadoTextArea");
    let calcular = document.getElementById("calcularBoton");
    calcular.addEventListener("click", function () {
        if (origen.value > destino.value) {
            resultado.value = input.value * convertirTiempo(origen.value, destino.value);
        } else {
            resultado.value = input.value / convertirTiempo(origen.value, destino.value);
        }
    }, false)
}

function convertirTiempo(origen, destino) {
    if (origen !== destino) {
        let subArray = Array();
        if (origen > destino) {
            subArray = arrayConversor.slice(destino, Math.abs(destino - origen));
        } else {
            subArray = arrayConversor.slice(origen, Math.abs(destino - origen));
        }
        return subArray.reduce((a, b) => a * b);
    }
    return 1;
}