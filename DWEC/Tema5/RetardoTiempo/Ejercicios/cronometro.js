addEventListener("load", inicio, false);

function inicio() {
    let [horas, minutos, segundos, milesimas] = [0, 0, 0, 0];
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let resume = document.getElementById("resume");
    let reset = document.getElementById("reset");
    let cronometro = document.getElementById("cronometro");
    let reloj = `${horas}:${minutos}:${segundos}:${milesimas}`;
    let temporizador ;
    let control = null;
    start.addEventListener("click", function () {
        if (control === null) {
            temporizador = setInterval(function () {
                milesimas += 2;
                [horas, minutos, segundos, milesimas] = transformTiempo(horas, minutos, segundos, milesimas);
                cronometro.innerText = `${horas}:${minutos}:${segundos}:${milesimas}`;
            }, 10);
            control = 1;
        }
    }, false);

    stop.addEventListener("click", function () {
        clearInterval(temporizador);
        control = 0;
    }, false);

    resume.addEventListener("click", function () {
        if (control === 0) {
            temporizador = setInterval(function () {
                milesimas += 2;
                [horas, minutos, segundos, milesimas] = transformTiempo(horas, minutos, segundos, milesimas);
                cronometro.innerText = `${horas}:${minutos}:${segundos}:${milesimas}`;
            }, 10);
            control = 2;
        }
    }, false);

    reset.addEventListener("click", function () {
        if (control === 0) {
            [horas, minutos, segundos, milesimas] = [0, 0, 0, 0];
            cronometro.innerText = `${horas}:${minutos}:${segundos}:${milesimas}`;
            control = null;
        }
    }, false);

}

function transformTiempo(horas, minutos, segundos, milesimas) {
    if (milesimas >= 100) {
        segundos++;
        milesimas = 0;
    }
    if (segundos >= 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos >= 60) {
        horas++;
        minutos = 0;
    }
    return [horas, minutos, segundos, milesimas];
}
