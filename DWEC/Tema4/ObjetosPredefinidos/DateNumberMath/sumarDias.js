addEventListener("load", inicio, false);

function inicio() {
    let fechaInput = document.getElementById("inputFecha");
    let sumaBoton = document.getElementById("botonSuma");
    let resultado = document.getElementById("textAreaResultado");
    sumaBoton.addEventListener("click", function () {
        let fechaFinal = sumarFecha(fechaInput);
        resultado.value = `La fecha final es:\n${fechaFinal.toLocaleDateString()}`;
    }, false);

}

function sumarFecha(fechaInput) {
    let fecha = new Date(fechaInput.value);
    let diasExtra = parseInt(prompt("Introduzca el numero de dias a sumar"));
    let dia = fecha.getDate();
    dia += diasExtra;
    return new Date(fecha.getFullYear(), fecha.getMonth(), dia);
}
