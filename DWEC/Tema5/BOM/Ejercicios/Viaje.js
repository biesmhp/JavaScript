addEventListener("load", inicio, false);

function inicio() {
    let matriz = Array(
        Array("Salidas", "Roma", "Paris", "Londres"),
        Array("Oviedo", 0, 0, 0),
        Array("Madrid", 0, 0, 0),
        Array("Santander", 0, 0, 0),
        Array("Bilbao", 0, 0, 0));
    let salida = document.getElementById("salida");
    let llegada = document.getElementById("llegada");
    let resultado = document.getElementById("resultado");
    let transporte = document.getElementsByName("transporte");
    let mostrar = document.getElementById("ver");
    let hacer = document.getElementById("hacer");

    mostrar.addEventListener("click", function () {
        setTimeout(function(){
            let ventana = window.open("", "Popup", "width=400, height=400");
            ventana.moveTo(screen.width / 2 - 200, screen.height / 2 - 200);
            ventana.document.write(
                `<h1>Resumen del viaje</h1>
            <img src="${document.images[llegada.value].src}"><br>
            Lugar de salida: ${salida.options[salida.selectedIndex].text}<br>
            Lugar de llegada: ${llegada.options[salida.selectedIndex].text}<br>
            Método de transporte: ${getMedioTransporte(transporte)}<br>
            <input type="button" onclick="window.close()" value="Cerrar">`
            );
        }, 2000);
    }, false);

    hacer.addEventListener("click", function () {
        matriz[parseInt(salida.value)+1][parseInt(llegada.value)+1]++;
        resultado.innerHTML = imprimirTabla(matriz);
    }, false);
}

function imprimirTabla(array) {
    let texto = "<table><tr>";
    for (let i = 0; i < array[0].length; i++) {
        texto += `<th>${array[0][i]}</th>`
    }
    texto += "</th>";
    for (let i = 1; i < array.length; i++) {
        texto += "<tr>";
        for (let j = 0; j < array[i].length; j++) {
            texto += `<td>${array[i][j]}</td>`;
        }
        texto += "</tr>";
    }
    return texto;
}

function getMedioTransporte(transporte) {
    for (let i = 0, length = transporte.length; i < length; i++) {
        if (transporte[i].checked) {
            return transporte[i].value;
        }
    }
}
