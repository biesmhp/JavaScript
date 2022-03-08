let input = parseInt(prompt("Introduce un numero para realizar su factorial:"));
let resultado = 1;
for (let i = input; i > 0; i--) {
    resultado *= i;
    
}
alert(resultado);