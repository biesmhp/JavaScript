let input = prompt("Introducir números separados por comas");
alert(separarNumeros(input).join("--"));

function separarNumeros(input) {
    return input.split(",");
}