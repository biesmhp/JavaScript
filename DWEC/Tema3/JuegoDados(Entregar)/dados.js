addEventListener('load', inicio, false);

function inicio() {
    const maxTiradas = 7;
    let arrayDadosURL = Array("img/001.jpg", "img/002.jpg", "img/003.jpg", "img/004.jpg", "img/005.jpg", "img/006.jpg");
    let arraySumaInput = document.getElementsByName("sumaCara");
    let tiradaInput = document.getElementById("tirada");
    let usuario = "";
    let tirada = 1;
    let start = false;
    let puntaciones = Array(maxTiradas);
    let clasificacion = {};
    let usuarioBoton = document.getElementById("comenzarBoton");
    let textArea = document.getElementById("textArea");
    usuarioBoton.addEventListener("click", function () {
        if (tirada === 1) {
            usuario = prompt("Introduzca su nombre de usuario");
            puntaciones.fill(0);
            start = true;
            tiradaInput.value = 0;
            for (const arraySumaInputElement of arraySumaInput) {
                arraySumaInputElement.value = 0;
            }
        } else {
            alert("No es la primera tirada. Acabe de tirar los dados antes");
        }
    }, false)
    let botonInput = document.getElementById("inputBoton");
    botonInput.addEventListener("click", function () {
        if (start) {
            tiradaInput.value = tirada;
            if (tirada <= maxTiradas - 2) {
                let sumaTirada = tiradaDados(arrayDadosURL, tirada);
                arraySumaInput[tirada - 1].value = sumaTirada;
                puntaciones[tirada - 1] += sumaTirada;
                clasificacion[usuario] = puntaciones.slice();
                tirada++;
            } else if (tirada <= maxTiradas) {
                let dados = Array();

                for (let i = 0; i < document.images.length; i++) {
                    dados.push(Math.round(Math.random() * 5 + 1));
                    document.images[i].src = arrayDadosURL[dados[i] - 1];
                }
                if (getNDuplicados(dados) === 4 && tirada === maxTiradas - 1) {
                    arraySumaInput[tirada - 1].value = 60;
                    puntaciones[tirada - 1] += 60;
                    clasificacion[usuario] = puntaciones.slice();
                } else if (getNDuplicados(dados) === 5 && tirada === maxTiradas) {
                    arraySumaInput[tirada - 1].value = 80;
                    puntaciones[tirada - 1] += 80;
                    clasificacion[usuario] = puntaciones.slice();
                }
                tirada++;
            } else {
                start = false;
                tirada = 1;
                alert("Tiradas maximas alcanzadas. Se reinician las tiradas. Haga click en 'Empezar a jugar'");
            }
        } else {
            alert("Haga click en 'Empezar a jugar'");
        }
        textArea.value = getClasificacion(clasificacion);
    }, false);
    let mostrarClasificacion = document.getElementById("mostrarBoton");
    mostrarClasificacion.addEventListener("click", function () {
        textArea.value = getClasificacion(clasificacion);
    }, false);
}

function tiradaDados(arrayDadosURL, tirada) {
    let suma = 0;
    for (let i = 0; i < document.images.length; i++) {
        let dadoCara = Math.round(Math.random() * 5 + 1);
        document.images[i].src = arrayDadosURL[dadoCara - 1];
        if (dadoCara === tirada) {
            suma += dadoCara;
        }
    }
    return suma;
}

function getClasificacion(clasificacion) {
    let texto = "";
    let aux = [];
    for (const clasificacionKey in clasificacion) aux.push([clasificacionKey, clasificacion[clasificacionKey]]);

    aux = aux.sort(ordenarClasificacion);

    for (const elemento of aux) {
        texto += `${elemento[0]}: ${elemento[1].reduce((a, b) => a + b)}\n`;
    }
    return texto;
}

function getNDuplicados(array) {
    let contador = 0;
    array = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            contador++;
        }
    }
    return contador + 1;
}

function ordenarClasificacion(a, b) {
    let valorA = a[1].reduce((x, y) => x + y);
    let valorB = b[1].reduce((x, y) => x + y);
    let resultado;
    if (valorA > valorB) {
        resultado = -1;
    } else if (valorA < valorB) {
        resultado = 1;
    } else {
        resultado = 0;
    }
    return resultado;
}