addEventListener("load", inicio, false);
cuadrado = null;
menu = null;
p = null;

function inicio() {
    cuadrado = document.getElementById("cuadrado");
    menu = document.getElementById("menu");
    p = document.querySelector("p");

    cuadrado.addEventListener("mousedown", function () {
        document.addEventListener("mousemove", mover, false);
    });

    cuadrado.addEventListener("dblclick", function () {
        document.removeEventListener("mousemove", mover, false);
        p.innerText = "StandBy"
    });
}

function mover(e) {
    let x, y;
    if (e.pageX >= 1820) {
        x = 1820;
    } else if (e.pageX <= 100) {
        x = 100;
    } else {
        x = e.pageX;
    }
    if (e.pageY <= 100) {
        y = 100;
    } else if (e.pageY >= 840) {
        y = 840;
    } else {
        y = e.pageY;
    }
    cuadrado.setAttribute("style", `left:${x - 100}px; top:${y - 100}px; position: absolute`);
    p.innerText = "Moviendo";
}