addEventListener("load", inicio, false);

function inicio() {
    let secciones = document.querySelectorAll("section");
    let select = document.getElementById("seccion");
    let aumentarFuente = document.getElementById("aumentarFuente");
    let fuenteOriginal = document.getElementById("fuenteOriginal");
    let color = document.getElementById("color");
    let colorOriginal = document.getElementById("colorOriginal");
    let cambiarFuente = document.getElementById("cambiarFuente");

    aumentarFuente.addEventListener("click", function () {
        if (select.value === "3") {
            for (const seccion of secciones) {
                seccion.style.fontSize = "150%";
                /*let style = window.getComputedStyle(seccion, null).getPropertyValue('font-size');
                let currentSize = parseFloat(style);
                seccion.style.fontSize = (currentSize + 1) + 'px';*/
            }
        } else {
            secciones[select.value].style.fontSize = "150%";
            /*let style = window.getComputedStyle(secciones[select.value], null).getPropertyValue('font-size');
            let currentSize = parseFloat(style);
            secciones[select.value].style.fontSize = (currentSize + 1) + 'px';*/
        }
    }, false);

    fuenteOriginal.addEventListener("click", function () {
        if (select.value === "3") {
            for (const seccion of secciones) {
                seccion.style.fontSize = "16px";
            }
        } else {
            secciones[select.value].style.fontSize = "16px";
        }
    }, false);

    color.addEventListener("change", function () {
        if (select.value === "3") {
            for (const seccion of secciones) {
                seccion.style.backgroundColor = color.value;
            }
        } else {
            secciones[select.value].style.backgroundColor = color.value;
        }
    }, false);

    colorOriginal.addEventListener("click", function () {
        if (select.value === "3") {
            for (const seccion of secciones) {
                seccion.style.backgroundColor = "white";
            }
        } else {
            secciones[select.value].style.backgroundColor = "white";
        }
    }, false);

    cambiarFuente.addEventListener("click", function () {
        if (select.value === "3") {
            for (const seccion of secciones) {
                seccion.style.fontFamily = "Arial, Helvetica, sans-serif";
            }
        } else {
            secciones[select.value].style.fontFamily = "Arial, Helvetica, sans-serif";
        }
    }, false);
}