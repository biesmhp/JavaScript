function copia(array) {
    return array.slice();
}

function cambiar(array, nElementos, elementoInicial) {
    let arrayAux = Array(nElementos);
    arrayAux.fill(0);
    return array.splice(elementoInicial, nElementos, arrayAux)
}

function visualizar(array) {
    document.write(array.join("-"));
}

let array = Array(1,2,3,4,5,6,7,8,9,10);

visualizar(array);
document.write("<br>");
let arrayCopia = copia(array);
visualizar(arrayCopia);
document.write("<br>");
cambiar(arrayCopia, 4, 3);
visualizar(arrayCopia);
