let array = Array(1,2,3,4,5,6,7,8);
let mediaSubArray = calcularMediaSubarray(array, 2,8);
document.write(mediaSubArray);

function calcularMediaSubarray(array, nInicio, nFinal) {
    let arrayAux = array.slice(nInicio, nFinal);
    return arrayAux.reduce((a,b) => a + b, 0) / arrayAux.length;
}