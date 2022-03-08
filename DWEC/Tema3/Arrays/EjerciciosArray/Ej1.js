addEventListener('load', inicio, false);

function inicio() {
    inputNumeros = document.getElementById("enterosInput");
    botonCargar = document.getElementById("cargarBoton");
    botonCargar.addEventListener("click", cargarArray, false);
    botonCalcular = document.getElementById("calcularBoton");
    botonCalcular.addEventListener("click", function(){
        let suma, media, mayor, menor;
        [suma, media, mayor, menor] = calculos(cargarArray());
        inputSuma.value = suma;
        inputMedia.value = media;
        inputMayor.value = mayor;
        inputMenor.value = menor;
    })
    inputSuma = document.getElementById("sumaInput");
    inputMedia = document.getElementById("mediaInput");
    inputMayor = document.getElementById("mayorInput");
    inputMenor = document.getElementById("menorInput");

}



function cargarArray() {
    return inputNumeros.value.split(",");
}
function calculos(arrayNumeros) {
    
    let arrayAux = Array();
    arrayNumeros.forEach((element, key) => {
        arrayAux[key] = parseInt(element);
    });
    arrayAux.sort(function(a, b){return b-a});
    let suma = 0;
    let media = 0;
    let mayor = 0;
    let menor = 0;
    arrayAux.forEach(element => {
        suma += element;
    });
    media = suma / arrayAux.length;
    mayor = arrayAux[0];
    menor = arrayAux[arrayNumeros.length-1];
    return [suma, media, mayor, menor];
}