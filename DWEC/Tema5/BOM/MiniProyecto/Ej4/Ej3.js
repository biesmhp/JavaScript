addEventListener("load", inicio, false);

function inicio() {
    let sitio1 = document.getElementById("sitio1");
    let sitio2 = document.getElementById("sitio2");
    let mensaje = document.getElementById("mensaje");

    sitio1.addEventListener("click", function () {
        let contador = 5;
        let intervalo = setInterval(() => {
            mensaje.innerHTML = "<p>Hemos cambiado de ubicacion esta pagina.</p>" +
                `<p>En breves momentos sera redireccionado... ${contador}</p>`;
            contador--;
            if (contador < 0) {
                clearInterval(intervalo);
                window.open("http://google.es", "_blank", "height=400, width=400");
                mensaje.innerHTML = "";
            }
        }, 1000);
    }, false);

    sitio2.addEventListener("click", function () {
        let contador = 5;
        let intervalo = setInterval(() => {
            mensaje.innerHTML = "<p>Hemos cambiado de ubicacion esta pagina.</p>" +
                `<p>En breves momentos sera redireccionado... ${contador}</p>`;
            contador--;
            if (contador < 0) {
                clearInterval(intervalo);
                window.location.assign("http://google.es");
            }
        }, 1000);
    }, false);
}