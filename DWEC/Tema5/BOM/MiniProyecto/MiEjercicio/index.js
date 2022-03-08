addEventListener("load", inicio, false);

function inicio() {
    let navegador = document.getElementById("navegador");
    if (window.navigator.userAgent.includes("Chrome")) {
        document.images[0].src = "chrome.jpg";
        navegador.innerHTML = "Google Chrome"
    } else if(window.navigator.userAgent.includes("Firefox")) {
        document.images[0].src = "firefox.jpg";
        navegador.innerHTML = "Mozilla Firefox"
    }

    document.getElementById("boton").addEventListener("click", () => {
        window.location.assign("pag2.html");
    }, false);

}