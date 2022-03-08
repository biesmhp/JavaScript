let nota1 = parseInt(prompt("Introduzca la primera nota"));
let nota2 = parseInt(prompt("Introduzca la segunda nota"));
let nota3 = parseInt(prompt("Introduzca la tercera nota"));

let notaMedia = (nota1 + nota2 + nota3) / 3;

if (notaMedia >= 7) {
    alert("PROMOCIONA");
} else {
    alert("NO PROMOCIONA");
}