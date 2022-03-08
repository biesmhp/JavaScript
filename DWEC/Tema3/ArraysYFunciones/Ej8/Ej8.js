let colores = Array("azul", "amarillo", "rojo", "verde", "café", "rosa");
let respuesta = prompt("Introduzca un color");
dentroArray(colores, respuesta);

function dentroArray(array, elemento) {
    if (array.indexOf(elemento) !== -1) {
        alert("El color esta registrado");
    } else {
        alert("Error. El color no esta registrado");
    }
}