addEventListener('load', inicio, false);

function inicio() {
    /* Inicializar inputs */
    inputEjemplo1 = document.getElementById("ejemplo1Input");
    inputEjemplo2 = document.getElementById("ejemplo2Input");
    /* Inicializar boton Ejemplo 1 */
    botonEjemplo1 = document.getElementById("ejemplo1Boton");
    botonEjemplo1.addEventListener("click", function () {
        array1 = cargarArray(inputEjemplo1.value);
    }, false);
    /* Inicializar boton Ejemplo 2 */
    botonEjemplo2 = document.getElementById("ejemplo2Boton");
    botonEjemplo2.addEventListener("click", function () {
        array2 = cargarArrayAleatorio(array1.length);
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
    let arrayAux = array2.slice();
    let j = 0;
    for (let i = 0; i < array1.length; i++) {
        arrayAux.splice(j,0,array1[i]);
        j+=2;
    }
    return arrayAux;
}