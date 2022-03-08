let input = parseInt(prompt("Introduzca su edad"));
let resultado;

if (input > 60) {
    resultado = "Jubilado";
} else if (input >26) {
    resultado = "Adulto";
} else if (input > 12) {
    resultado = "Joven";
} else if (input >= 0) {
    resultado = "Niño";
} else {
    resultado = "Edad no valida";
}
alert (resultado);