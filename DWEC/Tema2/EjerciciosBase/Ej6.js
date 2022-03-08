let suma = 0;
let multiplicacion = 0;
let boolean = true;

for (let i = 0; i < 4; i++) {
    let valor = parseInt(prompt("Introduzca el " + (i + 1) + "º numero"));
    if (boolean) {
        suma = valor;
        multiplicacion = valor;
    } else {
        suma += valor;
        multiplicacion *= valor;
    }
    boolean = false;
}

alert("La suma de todos los valores es: " + suma + " y su producto es: " + multiplicacion);