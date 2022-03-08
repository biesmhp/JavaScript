// Evento para ejecutar js una vez cargue la pagina entera
addEventListener('load', inicio, false);
// Funcion que se ejecuta al cargar la pagina
function inicio() {
    // Asignacion de eventos
    let inputCaja = document.getElementById("numero");
    inputCaja.value = factorial(inputPrompt);
}
// Resto del codigo
let inputPrompt = parseInt(prompt("Introduzca un numero para hacer su factorial"));

function factorial(numero) {
        let resultado = 1;
        let contador = numero;
        for (let i = 0; i < numero; i++) {
            resultado *= contador;
            contador--;
        }
        return resultado;
    }