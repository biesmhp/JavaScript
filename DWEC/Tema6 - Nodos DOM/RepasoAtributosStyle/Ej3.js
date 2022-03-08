addEventListener("load", inicio, false);

function inicio() {
    let botonHref = document.getElementById("botonHref");
    botonHref.addEventListener("click", function () {
        let a = document.createElement("a");
        let br = document.createElement("br");
        a.innerHTML = "Enlace";
        a.setAttribute("href", prompt("Introducir un enlace"));
        document.body.insertBefore(br, botonHref);
        document.body.insertBefore(a, br);
    }, false);
}