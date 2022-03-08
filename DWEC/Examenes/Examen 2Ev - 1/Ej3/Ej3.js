addEventListener("load", inicio, false);

function inicio() {
    //Inicializacion
    let aciertos = 0;
    let arrayPalabras = Array(
        new Palabra("sal", 0),
        new Palabra("gato", 0),
        new Palabra("perro", 0),
        new Palabra("cocina", 0),
        new Palabra("caballo", 0),
        new Palabra("ordenador", 0),
        new Palabra("armario", 0),
        new Palabra("altavoz", 0)
    );
    for (const palabra of arrayPalabras) {
        palabra.calculo();
        alert("Palabra:" + palabra.palabra + ", puntos: " + palabra.puntos);
    }
    const rnd = Math.round(Math.random()*arrayPalabras.length-1);
    const palabraAzar = arrayPalabras[rnd].palabra;
    for (const elemento of palabraAzar) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.readOnly = true;
        document.body.appendChild(input);
    }
    let inputs = document.querySelectorAll("input");
    document.addEventListener("keypress", function (e) {
        let letraAcertada = "";
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            e.preventDefault();
        } else {
            for (const letra of palabraAzar) {
                if (letra === e.key) {
                    letraAcertada = letra;
                }
            }

            for (let i = 0; i < inputs.length; i++) {
                if (palabraAzar[i] === letraAcertada) {
                    inputs[i].value = letraAcertada;
                    aciertos++;
                }
            }
            if (aciertos === palabraAzar.length) {
                alert("Puntos: " + arrayPalabras[rnd].puntos)
            }
        }
    })
}
// SIN TIEMPO PARA JUGAR DE NUEVO
