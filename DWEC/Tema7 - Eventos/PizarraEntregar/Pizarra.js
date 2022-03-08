addEventListener("load", inicio, false);
color = "black";

function inicio() {
    //VARIABLES
    let aux = true;
    let nCasillas;
    let estadoDibujo = true;

    // PROMT INICIAL EN BUCLE
    do {
        nCasillas = parseInt(prompt("Introducir el numero de casillas por cada lado. Min 4, Max 50"));
        if (nCasillas >= 4 && nCasillas <= 100 && !isNaN(nCasillas)) {
            aux = false;
        }
    } while (aux);

    // ELEMENTOS HTML
    let modoRejilla = document.getElementById("modoRejilla");
    let contenedor = document.querySelector(".contenedor");
    let borrar = document.getElementById("borrarDibujo");
    let colorInput = document.getElementById("color");
    let goma = document.getElementById("goma");
    let dibujarBoton = document.getElementById("dibujar");
    let cambiarNcasillasBoton = document.getElementById("cambiarNcasillasBoton");
    let cambiarNcasillasInput = document.getElementById("cambiarNcasillas");
    //Variable Color
    colorInput.value = color;

    // CREAR PIZARRA
    for (let i = 0; i < nCasillas; i++) {
        for (let j = 0; j < nCasillas; j++) {
            let casilla = document.createElement("div");
            casilla.className = "casilla";
            casilla.style.width = `${800 / nCasillas}px`;
            casilla.style.height = `${800 / nCasillas}px`;

            casilla.addEventListener("click", pintar, false);

            contenedor.addEventListener("mousedown", function () {
                casilla.addEventListener("mouseenter", pintar, false);
            }, false);

            contenedor.addEventListener("mouseup", function () {
                casilla.removeEventListener("mouseenter", pintar, false);
            }, false);
            contenedor.appendChild(casilla);
        }
    }

    //EVENTOS
    //Cambiar dimensiones del tablero
    cambiarNcasillasBoton.addEventListener("click", function () {
        document.body.removeChild(contenedor);
        contenedor = document.createElement("div");
        contenedor.className = "contenedor";
        contenedor.setAttribute("style", "width: 800px; height: 800px; border: black 1px solid");
        document.body.insertBefore(contenedor, document.querySelector(".configuracion"));
        for (let i = 0; i < cambiarNcasillasInput.value; i++) {
            for (let j = 0; j < cambiarNcasillasInput.value; j++) {
                let casilla = document.createElement("div");
                casilla.className = "casilla";
                casilla.style.width = `${800 / cambiarNcasillasInput.value}px`;
                casilla.style.height = `${800 / cambiarNcasillasInput.value}px`;

                casilla.addEventListener("click", pintar, false);

                contenedor.addEventListener("mousedown", function () {
                    casilla.addEventListener("mouseenter", pintar, false);
                }, false);

                contenedor.addEventListener("mouseup", function () {
                    casilla.removeEventListener("mouseenter", pintar, false);
                }, false);
                contenedor.appendChild(casilla);
            }
        }
        modoRejilla.checked = false;
    }, false);

    //Activar y desactivar el modo rejilla
    modoRejilla.addEventListener("change", function () {
        let divCasilla = document.getElementsByClassName("casilla");
        for (const elemento of divCasilla) {
            if (this.checked === true) {
                elemento.classList.add("color");
            } else {
                elemento.classList.remove("color");
            }
        }
    })

    //Cambiar color del pincel
    colorInput.addEventListener("input", function () {
        if (estadoDibujo) {
            color = colorInput.value;
        }
    }, false);

    //Activar modo pincel
    dibujarBoton.addEventListener("click", function () {
        estadoDibujo = true;
        color = colorInput.value;
        goma.disabled = false;
        dibujarBoton.disabled = true;
        document.images[0].src = "pincel.png";
    });

    //Activar modo goma
    goma.addEventListener("click", function () {
        color = "white";
        document.images[0].src = "goma.png";
        goma.disabled = true;
        dibujarBoton.disabled = false;
        estadoDibujo = false;
    })

    //Borrar pizarra
    borrar.addEventListener("click", function () {
        let casillas = document.querySelectorAll(".casilla");
        for (const casilla of casillas) {
            casilla.style.backgroundColor = "white";
        }
    }, false);
}

//FUNCIONES
function pintar() {
    this.style.backgroundColor = color;
}