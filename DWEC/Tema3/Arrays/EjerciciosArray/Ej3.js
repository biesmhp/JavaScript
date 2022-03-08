addEventListener('load', inicio, false);

function inicio() {
    /* Inicializar inputs */
    inputEjemplo1 = document.getElementById("ejemplo1Input");
    inputEjemplo2 = document.getElementById("ejemplo2Input");
    /* Inicializar boton Ejemplo 1 */
    botonEjemplo1 = document.getElementById("ejemplo1Boton");
    selectEjemplo1 = document.getElementById("lengthEjemplo1");
    botonEjemplo1.addEventListener("click", function () {
        array1 = cargarArray(inputEjemplo1.value);
        if (parseInt(selectEjemplo1.value) !== array1.length) {
            alert(`No coincide el tamaño del array introducido y el seleccionado`);
            inputEjemplo1.value = "";
            inputEjemplo1.focus();
            array1 = null;
        }
    }, false);
    /* Inicializar boton Ejemplo 2 */
    botonEjemplo2 = document.getElementById("ejemplo2Boton");
    selectEjemplo2 = document.getElementById("lengthEjemplo2");
    botonEjemplo2.addEventListener("click", function () {
        array2 = cargarArrayAleatorio(selectEjemplo2.value);
        inputEjemplo2.value = array2.join(",");
    }, false);
    /* Inicializar boton concatenar */
    botonConcatenar = document.getElementById("concatenarBoton");
    botonConcatenar.addEventListener("click", function () {
        let arrayFinal = intercalarArrays(array1, array2);
        alert(`${arrayFinal.join("-")}`);
    }, false);
    /* Inicializar arrays */
    let array1 = Array();
    let array2 = Array();

}

function cargarArray(texto) {
    return texto.split(",");
}

function cargarArrayAleatorio(arrayLength) {
    let arrayAux = Array();
    for (let i = 0; i < arrayLength; i++) {
        arrayAux.push(parseInt(Math.random() * 100));
    }
    return arrayAux;
}

function intercalarArrays(array1, array2) {
    let arrayAux = Array();
    if (array1.length <= array2.length) {
        let i = 0;
        for (i = 0; i < array1.length; i++) {
            arrayAux.push(array1[i]);
            arrayAux.push(array2[i]);
        }
        for (let j = i; j < array2.length; j++) {
            arrayAux.push(array2[j]);
        }
    } else {
        let i = 0;
        for (i = 0; i < array2.length; i++) {
            arrayAux.push(array1[i]);
            arrayAux.push(array2[i]);
        }
        for (let j = i; j < array1.length; j++) {
            arrayAux.push(array1[j]);
        }
    }
    return arrayAux;
}