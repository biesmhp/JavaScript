addEventListener("load", inicio, false);

function inicio() {
    let estadoBoton = [uno, dos, tres, cuatro];
    let contador = 0;
    let boton = document.getElementById("boton");
    boton.addEventListener("click", () => {
        if (contador === estadoBoton.length) {
            contador = 0;
        }
        estadoBoton[contador]();
        contador++;
    }, false);
}

function uno() {
    let ventana = window.open("", "", "width=400, height=400");
    ventana.document.write("La extension del historial es: " + window.history.length.toString());
}

function dos() {
    let ventana = window.open("", "", "width=400, height=400");
    if (window.navigator.userAgent.includes("Chrome")) {
        ventana.document.write("Google Chrome");
    } else if(window.navigator.userAgent.includes("Firefox")) {
        ventana.document.write("Mozilla Firefox");
    }
}

function tres() {
    let ventana = window.open("", "", "width=400, height=400");
    ventana.document.write(`${window.screen.width}x${window.screen.height}p`);
}

function cuatro() {
    window.history.go(0);
}