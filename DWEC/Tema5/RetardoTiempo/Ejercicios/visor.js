addEventListener("load", inicio, false);

function inicio() {
    let imagenes = Array("../../../ExamenT3/Ej4/img/1.jpg", "../../../ExamenT3/Ej4/img/2.jpg",
        "../../../ExamenT3/Ej4/img/3.jpg", "../../../ExamenT3/Ej4/img/4.jpg", "../../../ExamenT3/Ej4/img/5.jpg");
    let onOff = document.getElementById("tipoVisionado");
    let contador = 0;
    let intervalo;
    document.images[0].src = imagenes[contador];

    onOff.addEventListener("click", function () {
        if (onOff.value == "OFF") {
            onOff.value = "ON";
            intervalo = setInterval(() => {
                contador++;
                if (contador === imagenes.length) {
                    contador = 0;
                }
                document.images[0].src = imagenes[contador];
            }, 1000);
        } else {
            onOff.value = "OFF";
            clearInterval(intervalo);
        }
    }, false);
}
