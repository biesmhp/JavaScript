addEventListener("load", inicio, false);


var posicionActual = 1;

function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "musical.json", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let visor = document.getElementById("visor");
                let cdsArray = JSON.parse(xhr.responseText).catalog.cd;
                console.log(cdsArray[0])
                let atras = document.getElementById("atras");
                let adelante = document.getElementById("adelante");
                let checkboxAutomatico = document.getElementById("automatico");
                let intervaloVisor;
                imprimirInfo(cdsArray);
                adelante.addEventListener("click", function () {
                    avanzarVisor(cdsArray, visor);
                })
                atras.addEventListener("click", function () {
                    posicionActual--;
                    if (posicionActual >= 1) {
                        visor.src = `imagenes/${cdsArray[posicionActual - 1].img}`;
                        imprimirInfo(cdsArray);
                    } else {
                        posicionActual = cdsArray.length;
                        visor.src = `imagenes/${cdsArray[posicionActual - 1].img}`;
                        imprimirInfo(cdsArray);
                    }
                })
                checkboxAutomatico.addEventListener("click", function () {
                    if (this.checked) {
                        intervaloVisor = setInterval(function () {
                            avanzarVisor(cdsArray, visor);
                        }, 1000)
                    } else {
                        clearInterval(intervaloVisor);
                    }
                })
                let buscarBoton = document.getElementById("buscar");
                let year = document.getElementById("year");
                buscarBoton.addEventListener("click", function () {
                    if (year.value != "") {
                        let nCds = cdsArray.length;
                        let cdsFiltrados = Array();
                        for (let i = 0; i < nCds; i++) {
                            if (cdsArray[i].year == year.value) {
                                cdsFiltrados.push(cdsArray[i]);
                            }
                        }
                        cdsArray = cdsFiltrados;
                    } else {
                        cdsArray = JSON.parse(xhr.responseText).catalog.cd;
                    }
                })
            }
        }
    }



}

function avanzarVisor(cdsArray, visor) {
    posicionActual++;
    if (posicionActual <= cdsArray.length) {
        visor.src = `imagenes/${cdsArray[posicionActual - 1].img}`;
        imprimirInfo(cdsArray);
    } else {
        posicionActual = 1;
        visor.src = `imagenes/${cdsArray[posicionActual - 1].img}`;
        imprimirInfo(cdsArray);
    }
}

function imprimirInfo(cdsArray) {
    document.querySelector("div").innerHTML = `Titulo: ${cdsArray[posicionActual - 1].title}<br>
    Artista: ${cdsArray[posicionActual - 1].artist}<br>
    Pais: ${cdsArray[posicionActual - 1].country}<br>
    Compañia: ${cdsArray[posicionActual - 1].company}<br>
    Precio: ${cdsArray[posicionActual - 1].price}$<br>
    Año: ${cdsArray[posicionActual - 1].year}`;
}
