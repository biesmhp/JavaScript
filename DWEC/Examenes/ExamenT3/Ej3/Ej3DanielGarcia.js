addEventListener('load', inicio, false);

function inicio() {
    let arrayImagenes = Array("img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg");
    let posicionActual = 0;
    let posicionInicial = 0;
    let posicionFinal = 7;
    document.images[posicionActual].src = arrayImagenes[posicionActual];
    let inicio = document.getElementById("inicioBoton");
    let final = document.getElementById("finalBoton");
    let avanzar = document.getElementById("adelanteBoton");
    let atras = document.getElementById("atrasBoton");
    atras.disabled = true;
    inicio.disabled = true;
    avanzar.addEventListener("click", function () {
        if (posicionActual !== posicionFinal) {
            atras.disabled = false;
            inicio.disabled = false;
            document.images[posicionActual].src = "";
            posicionActual++;
            document.images[posicionActual].src = arrayImagenes[posicionActual];
            if (posicionActual === posicionFinal) {
                avanzar.disabled = true;
                final.disabled = true;
            }
        }
    })
    atras.addEventListener("click", function () {
        if (posicionActual !== posicionInicial) {
            avanzar.disabled = false;
            final.disabled = false;
            document.images[posicionActual].src = "";
            posicionActual--;
            document.images[posicionActual].src = arrayImagenes[posicionActual];
            if (posicionActual === posicionInicial) {
                atras.disabled = true;
                inicio.disabled = true;
            }
        }
    })
    inicio.addEventListener("click", function () {
        avanzar.disabled = false;
        final.disabled = false;
        inicio.disabled = true;
        atras.disabled = true;
        document.images[posicionActual].src = "";
        posicionActual = posicionInicial;
        document.images[posicionActual].src = arrayImagenes[posicionActual];
    })
    final.addEventListener("click", function () {
        avanzar.disabled = true;
        final.disabled = true;
        atras.disabled = false;
        inicio.disabled = false;
        document.images[posicionActual].src = "";
        posicionActual = posicionFinal;
        document.images[posicionActual].src = arrayImagenes[posicionActual];
    })
}