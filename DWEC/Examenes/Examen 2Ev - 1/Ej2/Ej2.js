addEventListener("load", inicio, false);

function inicio() {
    let caracteres = 8;
    let puntos = 0;
    document.querySelector("#cajaTexto").addEventListener("keypress", function (e) {
        if (e.keyCode === 46 && puntos === 0) {
            caracteres--;
            puntos++;
        } else if (e.keyCode < 48 || e.keyCode > 57) {
            e.preventDefault();
        } else {
            if (caracteres <= 0) {
                e.preventDefault();
            } else {
                caracteres--;
            }
        }

    }, false);
    document.querySelector("#cajaTexto").addEventListener("keydown", function (e) {
        if (e.keyCode === 8 && caracteres < 8) {
            caracteres++;
        }
    })
}

// 46, 190