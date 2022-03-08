let array = Array(1,5,4,7,8,2,15,2);
let arrayNuevo = array.map(incrementarArray);
document.write(arrayNuevo.join("-"));

function incrementarArray(numero) {
    return numero + 1;
}

