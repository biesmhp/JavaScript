addEventListener('load', inicio, false);

function inicio() {
    let departamento = rellenar();
    let resultado = document.getElementById("resultadoTextArea");
    let resultado2 = document.getElementById("resultadoTextArea2");
    visualizar(departamento, resultado);
    let nombre = document.getElementById("nombreInput");
    let mostrarLibres = document.getElementById("mostrarLibresBoton");
    let mostrarTotal = document.getElementById("mostrarTotalBoton");
    mostrarLibres.addEventListener("click", function () {
        resultado2.value = libresPorSala(departamento, nombre.value);
    }, false);
    mostrarTotal.addEventListener("click", function () {
        resultado2.value = totalOcupados(departamento);
    }, false);
}

function rellenar() {
    let departamento = Array();
    for (let i = 0; i < 4; i++) {
        let array = Array();
        array.unshift("Sala IF0" + (i + 1));
        for (let j = 0; j < 20; j++) {
            array.push(Math.round(Math.random()))
        }
        departamento.push(array);
    }
    return departamento;
}

function visualizar(array, resultado) {
    let cadena = "";
    for (let i = 0; i < array.length; i++) {
        cadena += `${array[i][0]}\n`;
        for (let j = 1; j < array[i].length; j++) {
            cadena += `${array[i][j]}\t`;
        }
        cadena += `\n`;
    }
    resultado.value = cadena;
}

function libresPorSala(array, sala) {
    let cadena = "";
    let libres = Array();
    for (let i = 0; i < array.length; i++) {
        if (array[i][0].toLowerCase() === sala.toLowerCase()) {
            cadena += `${array[i][0]} ordenadores libres: `;
            for (let j = 1; j < array[i].length; j++) {
                if (array[i][j] === 0) {
                    libres.push(j);
                }
            }
        }

    }
    cadena += `${libres.join("-")}`;
    return cadena;
}

function totalOcupados(array) {
    let cadena = "";
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        let totalSala = 0;
        cadena += `${array[i][0]} : `;
        for (let j = 1; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                totalSala++;
                total++;
            }
        }
        cadena += `${totalSala}\n`;
    }
    cadena += `TOTAL: ${total} ocupados`;
    return cadena;
}
