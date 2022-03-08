let array = Array();
for (let i = 0; i < 10; i++) {
    array.push(i+2);
}
array = multi(array);
document.write(array.join("-"));


function porDos(numero) {
    return numero * 2;
}

function multi(array) {
    return array.map(porDos);
}