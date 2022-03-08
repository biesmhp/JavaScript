let array = Array(1,5,4,7,8,2,15,2);
let arrayCopia = arrayCopiaIncrementado(array);
document.write(arrayCopia.join("-"));


function incrementarArray(numero) {
    return numero + 1;
}

function arrayCopiaIncrementado(array) {
    let arrayCopia = array.slice();
    return arrayCopia.map(incrementarArray);
}