let minus = Array("lunes",  "martes", "miercoles", "jueves", "viernes", "sabado", "domingo");
let mayus = Array();
for (const diaSemana of minus) {
    let primera = diaSemana.charAt(0);
    let ultima = diaSemana.charAt(diaSemana.length-1);
    let palabra = primera.toUpperCase() + diaSemana.substring(1, diaSemana.length-1) + ultima.toUpperCase();
    mayus.push(palabra);
}
document.write(mayus.toString()+"<br>");

let texto = "por cien cañones por banda poema de Espronceda";
let target = "Espronceda";
texto = texto.replace(target, ". "+target);
document.write(texto);