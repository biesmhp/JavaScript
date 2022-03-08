let array = Array(0,88,5,47,3,21,4);
let mayor, menor;
[menor, mayor] = extremo(array);
document.write(`El numero mayor es: ${mayor} y el menor es: ${menor}`);

function extremo(array) {
    array.sort((a, b) => a - b);
    return [array[0], array[array.length-1]];
}