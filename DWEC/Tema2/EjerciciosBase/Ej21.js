let acumulado = 0;
let input = 0;
do {
    input = parseInt(prompt("Introduzca numeros para sumar"));
    if (input != 9999) {
        acumulado += input;
    }
} while (input != 9999);

if (acumulado > 0) {
    alert(`Acumulado positivo: ${acumulado}`);
} else if (acumulado < 0) {
    alert(`Acumulado negativo: ${acumulado}`);
} else {
    alert(`Acumulado igual a ${acumulado}`);
}