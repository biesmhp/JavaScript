addEventListener("load", inicio, false);

function inicio() {
    let etiquetaResultado = document.getElementById("resultado");
    let texto = "";
    do {
        texto = prompt("Introducir una palabra");
    } while (texto === "");

    etiquetaResultado.innerHTML = letras(texto);
    }



let letras = (texto) => {
    if (texto === texto.toLowerCase()) {
        return `Texto en MINUSCULAS`;
    } else if (texto === texto.toUpperCase()) {
        return `Texto en MAYUSCULAS`;
    } else {
        return `Texto mezclao`;
    }
}
