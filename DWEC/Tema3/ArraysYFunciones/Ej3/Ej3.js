addEventListener('load', inicio, false);

function inicio() {
    let arrayOriginal = Array();
    let inputCaja = document.getElementById("caja");
    let inputResultado = document.getElementById("resultado");
    let botonMostrar= document.getElementById("mostrarBoton");
    botonMostrar.addEventListener("click", function () {
        arrayOriginal.push(inputCaja.value);
        let arrayNumerico = getValoresNumericos(arrayOriginal);
        inputResultado.value = arrayNumerico.join("-");
    })

}

function getValoresNumericos(array) {
    let arrayAux = Array();
    for (let element of array) {
        if (!isNaN(element)) {
            arrayAux.push(element);
        }
    }
    return arrayAux;
}