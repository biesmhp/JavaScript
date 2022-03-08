addEventListener('load', inicio, false);

function inicio() {
    let textoInput = document.getElementById("inputTexto");
    let visualizarBoton = document.getElementById("visualizarFrase");
    let textArea1 = document.getElementById("textArea1");
    let textArea2 = document.getElementById("textArea2");
    let arrayFrases = Array();
    visualizarBoton.addEventListener("click", function () {
        arrayFrases = getSubstrArray(textoInput.value, ".");
        let nFrases = arrayFrases.length;
        let texto = `Hay ${arrayFrases.length} frases\n`;
        for (let i = 0; i < nFrases; i++) {
            let palabras = getPalabras(arrayFrases[i]);
            texto += `En la ${i+1} frase hay ${palabras.length-1}\n`;
        }
        textArea1.value = texto;
    }, false);
    let elegirFraseInput = document.getElementById("elegirFrase");
    let deletrearInput = document.getElementById("deletrearInput");
    deletrearInput.addEventListener("click", function () {
        let fraseElegida = arrayFrases[parseInt(elegirFraseInput.value)];
        let palabraElegida = prompt(`Elija una palabra:\n${fraseElegida}`);
        let palabraArray = Array();
        for (let i = 0; i < palabraElegida.length; i++) {
            palabraArray.push(palabraElegida[i]);
        }
        palabraArray.reverse();
        alert(palabraArray.join("-"));
    })
}

function getSubstrArray(texto, delimitador) {
    let inicial = -1;
    let arrayFrases = Array();
    do {
        let final = texto.indexOf(delimitador, inicial+1);
        if (final === -1) {
            break;
        }
        arrayFrases.push(texto.substring(inicial+1, final));
        inicial = final;
    } while (inicial !== -1)

    return arrayFrases;
}
function getPalabras(array) {
    let palabras = Array();
    for (const arrayElement of array) {
        palabras.push(getSubstrArray(arrayElement, " "));
    }
    return palabras;
}
