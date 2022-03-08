addEventListener("load", inicio, false);

function inicio() {
    let arrayA = document.querySelectorAll("a");
    let addBoton = document.getElementById("addBoton");
    let borrarBoton = document.getElementById("borrarBoton");
    borrarBoton.addEventListener("click", function () {
        for (const arrayAElement of arrayA) {
            arrayAElement.setAttribute("href", "#");
        }
    }, false);
    addBoton.addEventListener("click", function () {
        for (let i = 0; i < arrayA.length; i++) {
            arrayA[i].setAttribute("href", prompt(`Referencia del ${i+1} enlace`))
        }
    }, false);
}