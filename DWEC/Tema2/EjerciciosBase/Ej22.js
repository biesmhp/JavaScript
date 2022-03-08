let suma = 0;
for (i = 0; i < 10; i++) {
    let input = parseInt(prompt("Introduzca un numero:"))
    if (i >= 5) {
        suma += input;
    }
}
alert(`La suma de los ultimas 5 cifras es: ${suma}`);