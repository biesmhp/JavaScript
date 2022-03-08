addEventListener("load", inicio, false);

function inicio() {
    let boton = document.getElementById("duplicar");
    boton.addEventListener("click", function () {
        duplicarSection();
    }, false);
}

function duplicarSection() {
    let section = document.body.children[1];
    let sectionDuplicated = section.cloneNode(true);
    document.body.appendChild(sectionDuplicated);
}