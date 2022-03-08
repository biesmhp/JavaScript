addEventListener("load", inicio, false);

function inicio() {
    let fecha1Input = document.getElementById("inputFecha1");
    let fecha2Input = document.getElementById("inputFecha2");
    let diferenciaBoton = document.getElementById("botonDiferencia");
    let resultado = document.getElementById("textAreaResultado");
    diferenciaBoton.addEventListener("click", function () {
        resultado.value = `Hay ${diferenciaDias(fecha1Input, fecha2Input)} dias de diferencia`;
    }, false);
}

function diferenciaDias(fecha1Input, fecha2Input) {
    let diaMs=1000*60*60*24;
    let fecha1 = new Date(fecha1Input.value);
    let fecha2 = new Date(fecha2Input.value);
    if (fecha1 < fecha2) {
        return ((fecha2 - fecha1) / diaMs);
    }
    //return Math.abs((fecha1 - fecha2)/diaMs);
}

function sumarFecha(fechaInput) {
    let fecha = new Date(fechaInput.value);
    let diasExtra = parseInt(prompt("Introduzca el numero de dias a sumar"));
    let dia = fecha.getDate();
    dia += diasExtra;
    return new Date(fecha.getFullYear(), fecha.getMonth(), dia);
}
