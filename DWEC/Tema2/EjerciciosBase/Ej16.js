let input = 0;
let intentos = 0;
do {
    input = parseInt(prompt("Introduzca numeros"));
    intentos++;
} while (!isNaN(input));
alert(`Numero de intentos: ${intentos}`);