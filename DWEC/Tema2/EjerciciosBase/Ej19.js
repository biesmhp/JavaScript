let nPares = 0;
let nImpares = 0;
for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt("Introduce un numero:"));
    if (input % 2 == 0) {
        nPares++;
    } else {
        nImpares++;
    };
}
alert(`Pares: ${nPares}. Impares: ${nImpares}`);