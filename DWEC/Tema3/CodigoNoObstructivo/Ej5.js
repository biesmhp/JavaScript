addEventListener('load', inicio, false);

function inicio() {

    botonPedido = document.getElementById("pedido");
    botonPedido.addEventListener("click", mostrar, false);
    finaInputRadio = document.getElementById("fina");
    normalInputRadio = document.getElementById("normal");

}

function mostrar() {
    let tipoMasa = "";
    if (finaInputRadio.checked == true) {
        tipoMasa = "fina";
    } else {
        tipoMasa = "normal";
    }

    
}