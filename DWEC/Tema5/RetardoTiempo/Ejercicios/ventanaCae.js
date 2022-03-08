addEventListener("load", inicio, false);

function inicio() {
    let boton = document.getElementById("ventanaNueva");

    boton.addEventListener("click", function () {
        let ventana = open("", "_blank", "height=400, width=400, top=0");
        ventana.document.write("QUE ME CAIIGOOO");
        let y = 0;
        let bucle = setInterval(function () {
            y += 10;
            if (y <= screen.height-ventana.outerHeight) {
                ventana.moveTo(screen.width / 2 - 400, y);
            } else {
                ventana.close();
                document.write("Llego");
                clearInterval(bucle);
            }
        }, 200);

    }, false);
}