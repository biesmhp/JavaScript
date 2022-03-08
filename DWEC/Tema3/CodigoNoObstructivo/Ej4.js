addEventListener('load', inicio, false);

function inicio() {

    let botonMostrar = document.getElementById("boton");
    botonMostrar.addEventListener("click", operar, false);

}

function operar() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let resultadoCaja = document.getElementById("resultado");
    let n1n2 = 0;
    let selectOperacion = document.getElementById("operacion");
    let valorOperacion = selectOperacion.value;

    switch (valorOperacion) {
        case "suma":
            n1n2 = n1 + n2;
            break;
        case "resta":
            n1n2 = n1 - n2;
            break;
        case "multiplicacion":
            n1n2 = n1 * n2;
            break;
        case "division":
            n1n2 = n1 / n2;
            break;

        default:
            break;
    }
    resultadoCaja.value = n1n2;
}