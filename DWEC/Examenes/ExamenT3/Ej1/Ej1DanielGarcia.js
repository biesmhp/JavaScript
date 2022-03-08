addEventListener("load", inicio, false);

function inicio() {
    let fecha1Input = document.getElementById("inputFecha1");
    let fecha2Input = document.getElementById("inputFecha2");
    let diferenciaBoton = document.getElementById("botonDiferencia");
    let minutosResultado = document.getElementById("textAreaMinutos");
    let horasResultado = document.getElementById("textAreaHoras");
    diferenciaBoton.addEventListener("click", function () {
        if (fechaCorrecta(fecha1Input, fecha2Input)) {
            let minutos, horas;
            [minutos, horas] = calculo(fecha1Input, fecha2Input);
            minutosResultado.value = `${minutos} minutos`;
            horasResultado.value = `${horas} horas`;
        } else {
            minutosResultado.value = `La primera fecha tiene que ser mayor que la segunda`;
            horasResultado.value = `La primera fecha tiene que ser mayor que la segunda`;
        }
    }, false);
}

function fechaCorrecta(fecha1Input, fecha2Input) {
    if (fecha1Input.value > fecha2Input.value) {
        return true;
    }
    return false;
}

function calculo(fecha1Input, fecha2Input) {
    let diaHs = 1000 * 60 * 60;
    let diaMs = 1000 * 60;
    let fecha1 = new Date(fecha1Input.value);
    let fecha2 = new Date(fecha2Input.value);

    return [((fecha1 - fecha2) / diaMs), ((fecha1 - fecha2) / diaHs)];

}