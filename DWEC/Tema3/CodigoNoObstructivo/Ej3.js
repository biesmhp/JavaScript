addEventListener('load', inicio, false);

function inicio() {
    let botonOtro_numero = document.getElementById("otro_numero");
    let botonTotal = document.getElementById("total");
    
    botonOtro_numero.addEventListener("click", añadirNumero, false);
    botonTotal.addEventListener("click", contarNumeros, false)

}
let contador = 0;
function añadirNumero() {
    cajaNumeros = document.getElementById("numero");
    cajaTextArea = document.getElementById("textAreaNumeros");
    let numero = cajaNumeros.value;
    cajaNumeros.value = "";
    cajaTextArea.value += `${numero}, `
    contador++;
}
function contarNumeros() {
    cajaContador = document.getElementById("contadorInput");
    cajaContador.innerHTML = `Hay ${contador} numeros`;
}