addEventListener("load", inicio, false);

function inicio() {
    let pulsar = document.getElementById("pulsar");
    let p = document.querySelector("p");
    let cambiarValor = document.getElementById("cambiarValor");
    pulsar.addEventListener("click", function () {
        let nombre = p.getAttribute("title");
        if (p.getAttribute("title") === null) {
            nombre = "Atributo vacio";
        }
        alert(nombre);
    }, false);

    cambiarValor.addEventListener("click", function () {
        let titulo = prompt("Introduzca el valor del atributo title:");
        p.setAttribute("title", titulo);
    }, false);
}
