addEventListener("load", inicio, false);

function inicio() {
    let p = document.querySelector("p");
    let botonMostrar = document.querySelector("a");
    let pContent = p.innerText;
    let pShort = pContent.slice(0, pContent.length/2) + "...";
    botonMostrar.addEventListener("click", function () {
        if (botonMostrar.innerText === "Mostrar Mas") {
            p.innerText = pContent;
            botonMostrar.innerText = "Mostrar Menos";
        } else {
            p.innerText = pShort;
            botonMostrar.innerText = "Mostrar Mas";
            document.body.appendChild(botonMostrar);
        }
    }, false);
}