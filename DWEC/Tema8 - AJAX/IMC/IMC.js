addEventListener("load", inicio, false);

function inicio() {
    let infoBoton = document.getElementById("info");
    let resultado = document.querySelector("#resultado");
    let arrayPersonas = Array();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "datos.txt", true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                crearPersonas(xhr, arrayPersonas);
                crearSelect(arrayPersonas);
                mostrarInfoTotal(infoBoton, resultado, arrayPersonas);

            } else {
                alert("ERROR" + xhr.status);
            }
        }
    }

}

function crearSelect(arrayPersonas) {
    for (let i = 0; i < arrayPersonas.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = arrayPersonas[i].nombre;
        document.querySelector("select").appendChild(option);
    }
}

function crearPersonas(xhr, arrayPersonas) {
    let elementos = xhr.responseText.split(",");
    let posicion = 0;
    let nObjetos = elementos.length / 6;
    for (let i = 0; i < nObjetos - 1; i++) {
        let pos1 = posicion++;
        let pos2 = posicion++;
        let pos3 = posicion++;
        let pos4 = posicion++;
        let pos5 = posicion++;
        let pos6 = posicion++;
        let persona = new Persona(elementos[pos1], elementos[pos2], elementos[pos3], elementos[pos4],
            elementos[pos5], elementos[pos6]);
        arrayPersonas.push(persona);
    }
}

function mostrarInfoTotal(infoBoton, resultado, arrayPersonas) {
    let id = document.querySelector("select");
    infoBoton.addEventListener("click", function () {
        let texto = "";
        resultado.innerHTML = texto;
        texto += "<p>" + arrayPersonas[id.selectedIndex].informacion() + "<\p>";
        texto += "<p>" + interpretarIMC(arrayPersonas[id.selectedIndex].calcularIMC()) + "<\p>";
        texto += "<p>" + interpretarEdad(arrayPersonas[id.selectedIndex].mayorEdad()) + "<\p>";
        resultado.innerHTML = texto;
    })
}

function interpretarIMC(imc) {
    let html = "";
    if (imc === -1) {
        html = "<p>Infrapeso</p>"
    } else if (imc === 0) {
        html = "<p>Peso Normal</p>"
    } else {
        html = "<p>Sobrepeso</p>"
    }
    return html;
}

function interpretarEdad(edad) {
    let html = "";
    if (!edad) {
        html = "<p>Es menor de edad</p>"
    } else {
        html = "<p>Es mayor de edad</p>"
    }
    return html;
}