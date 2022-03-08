addEventListener("load", inicio, false);

function inicio() {
    // Objetos HTML
    let amarillo = document.getElementById("amarillo");
    let rojo = document.getElementById("rojo");
    let verde = document.getElementById("verde");
    let cuentaAtras = document.getElementById("cuentaAtras");
    let empezar = document.getElementById("empezar");
    // Variables globales
    let segundos = 10;
    cuentaAtras.innerText = segundos.toString();
    finalizar = false;
    let cronometro;
    let desactivacion = Math.round(Math.random()) * 2;
    getCableCorrecto(desactivacion);

    empezar.addEventListener("click", function () {
        if (!finalizar) {
            cronometro = setInterval(function () {
                if (segundos <= 0) {
                    explotar(cronometro);
                } else {
                    if (finalizar) {
                        explotar(cronometro);
                    } else {
                        segundos--;
                        cuentaAtras.innerText = segundos.toString();
                    }
                }
            }, 1000);
        }
    }, false);

    verde.addEventListener("click", function () {
        let cable = 0;
        desactivarCable(cronometro, desactivacion, cable);
        rojo.disabled = true;
        amarillo.disabled = true;
        verde.disabled = true;
    }, false);

    amarillo.addEventListener("click", function () {
        let cable = 1;
        desactivarCable(cronometro, desactivacion, cable);
        rojo.disabled = true;
        amarillo.disabled = true;
        verde.disabled = true;
    }, false);

    rojo.addEventListener("click", function () {
        let cable = 2;
        desactivarCable(cronometro, desactivacion, cable);
        rojo.disabled = true;
        amarillo.disabled = true;
        verde.disabled = true;
    }, false);
}

function explotar(cronometro) {
    clearInterval(cronometro);
    document.images[0].src = "explosion.gif";
}

function desactivar(cronometro) {
    clearInterval(cronometro);
    document.images[0].src = "exito.jpg";
}

function desactivarCable(cronometro, desactivacion, cable) {
    if (cable === desactivacion) {
        desactivar(cronometro);
    } else {
        explotar(cronometro);
    }
    finalizar = true;
}

function getCableCorrecto(numero) {
    if (numero === 0) {
        alert("Verde");
    } else if (numero === 1) {
        alert("Amarillo");
    } else if (numero === 2) {
        alert("Rojo");
    }

}