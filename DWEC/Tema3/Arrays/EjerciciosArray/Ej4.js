addEventListener('load', inicio, false);

function inicio() {
    /* CREAR ARRAY */
    let aleatorio = cargarArray();
    /* BOTON VISUALIZAR ORIGINAL */
    botonOriginal = document.getElementById("originalBoton");
    botonOriginal.addEventListener("click", function () {
        labelResultado.value = visual(aleatorio);
    }, false);
    /* BOTON LIMPIAR ARRAY */
    botonLimpieza = document.getElementById("limpiezaBoton");
    botonLimpieza.addEventListener("click", function () {

    }, false);
    /* BOTON VISUALIZAR OTRO ARRAY */
    botonNuevo = document.getElementById("nuevoBoton");
    labelResultado = document.getElementById("resultadoLabel");
    botonNuevo.addEventListener("click", function () {
        aleatorio = cargarArray();
        labelResultado.value = visual(aleatorio);
    }, false);
    
}

function visual(array) {
    let arrayAux = Array();
    array.forEach(element => {
        arrayAux += element + " ";
    });
    return arrayAux;
}

function cargarArray() {
    let array = Array(15);
    for (let i = 0; i < 15; i++) {
        array.push(parseInt(Math.random() * 20));
    }
    return array;
}

function limpiezaNumerica(array) {
    array.forEach(element => {
        
    });
}