addEventListener("load", inicio, false);

function inicio() {
    let abrirVentana = document.getElementById("abrirVentana");
    let progressBar = document.getElementById("progressBar");

    abrirVentana.addEventListener("click", function () {
        progressBar.style.display = "block";
        let intervalo = setInterval(function () {
            if (progressBar.value < 100) {
                progressBar.value += 10;
            } else {
                window.open("", "_blank");
                progressBar.value = 0;
                progressBar.style.display = "none";
                clearInterval(intervalo);
            }
        }, 1000);

    }, false);
}