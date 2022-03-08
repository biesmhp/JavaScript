addEventListener('load', inicio, false);

function inicio() {
    // Inicialización elementos HTML
    let arrayCarneObjetos = document.getElementsByName("carne");
    let objetoPan = document.getElementById("pan");
    let arrayIngredientesObjetos = document.getElementsByName("ingredientes");
    let inputSubtotalCarne = document.getElementById("subtotalCarne");
    let inputSubtotalIngredientes = document.getElementById("subtotalIngredientes");
    let inputSubtotalPan = document.getElementById("subtotalPan");

    //    Inicializacion botones
    let botonCalcularCarne = document.getElementById("calcularCarneBoton");
    let botonCalcularIngredientes = document.getElementById("calcularIngredientesBoton");
    let botonCalcularPan = document.getElementById("calcularPanBoton");
    let botonTotal = document.getElementById("total");

    // Eventos botones
    botonCalcularCarne.addEventListener("click", function () {
        [inputSubtotalCarne.value, contadorCarne] = calcularPrecioCarne(arrayCarneObjetos, precioCarneArray);
        }, false)
    botonCalcularIngredientes.addEventListener("click", function () {
        [inputSubtotalIngredientes.value, arrayIngredientesSelected] = calcularPrecioIngredientes(arrayIngredientesObjetos);
        }, false)
    botonCalcularPan.addEventListener("click", function () {
        [inputSubtotalPan.value, contadorPan]= calcularPrecioPan(arrayPan, precioPanArray, objetoPan);
    }, false)
    botonTotal.addEventListener("click", function () {
        alert(`Pedido:
        Tipo Carne -- ${inputSubtotalCarne.value}€
            ${arrayCarne[contadorCarne]}
        Ingredientes -- ${inputSubtotalIngredientes.value}€
            ${arrayIngredientesSelected.join(", ")} 
        Tipo Pan -- ${inputSubtotalPan.value}€
            ${arrayPan[contadorPan]} `);
    })
    // VARIABLES
    let contadorCarne, arrayIngredientesSelected, contadorPan;
    // ARRAYS
    let precioCarneArray = Array(3,2,2.5,4,3.5);
    let precioPanArray = Array(2,4.5,2.5,3);
    let arrayPan = Array("trigo", "centeno", "integral", "crujiente");
    let arrayCarne = Array("ternera", "cerdo", "pollo", "vaca", "mixto");

    
}

function calcularTotal(carne, ingredientes, pan) {
    return parseFloat(carne) + parseFloat(ingredientes) + parseFloat(pan);
}

function calcularPrecioPan(tipoPan, precioPan, objetoPan) {
    let precio = 0;
    let i;
    for (i = 0; i < tipoPan.length; i++) {
        if (tipoPan[i] === objetoPan.value) {
            precio = precioPan[i];
            break;
        }
    }
    return [parseFloat(precio.toFixed(2)), i];
}

function calcularPrecioIngredientes(arrayIngredientesObjetos) {
    let nIngredientes = 0;
    let ingredientesSelected = Array();
    for (let i = 0; i < arrayIngredientesObjetos.length; i++) {
        if (arrayIngredientesObjetos[i].checked === true) {
            ingredientesSelected.push(arrayIngredientesObjetos[i].value)
            nIngredientes++;
        }
    }
    return [parseFloat((nIngredientes * 0.4).toFixed(2)), ingredientesSelected];
}

function calcularPrecioCarne (arrayCarneObjetos, precioCarne) {
    let i;
    for (i = 0; i < arrayCarneObjetos.length; i++) {
        if (arrayCarneObjetos[i].checked === true) {
            return [parseFloat(precioCarne[i].toFixed(2)), i];
        }
    }
     return [0, i];
}
