addEventListener("load", inicio, false);

function inicio() {
    let abrir = document.getElementById("abrirVentana");
    let cerrar = document.getElementById("cerrarVentana");
    let ventanaRandom = document.getElementById("ventanaRnd");
    let ventanaPosicionada = document.getElementById("ventanaPosicionada");
    let ventanaMover = document.getElementById("moverDerecha");
    let ventanaNormal;

    abrir.addEventListener("click", function () {
        ventanaNormal = window.open("", "_blank", "height=600,width=600");
    }, false);
    cerrar.addEventListener("click", function (){
        ventanaNormal.close();
    }, false);
    ventanaRandom.addEventListener("click", function () {
        let ventanaRnd;
        let x, y;
        x = Math.round(Math.random()*2000);
        y = Math.round(Math.random()*2000);
        ventanaRnd = window.open("", "_blank", `width=400,height=400`);
        ventanaRnd.moveTo(x, y);
    }, false);
    ventanaPosicionada.addEventListener("click", function () {
        let top = Math.round(Math.random()*2000);
        let left = Math.round(Math.random()*2000);
        let ventana = window.open("", "_blank", "width=400,height=400");
        ventana.moveTo(left, top);
        ventana.document.write(`Top: ${top}, Left: ${left}`)
    }, false);
    ventanaMover.addEventListener("click", function () {
        ventanaNormal.moveBy(100, 0);
    }, false);

}