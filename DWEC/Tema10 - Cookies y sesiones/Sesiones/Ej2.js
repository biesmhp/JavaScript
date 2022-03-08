addEventListener("load", inicio, false);
var contadorSession = 0;
var contadorLocal, visitas, fondo;

if (localStorage.getItem("clicks") === null) {
    contadorLocal = 0;
} else {
    contadorLocal = parseInt(localStorage.getItem("clicks"));
}
if (localStorage.getItem("visitas") === null) {
    visitas = 1;
    localStorage.setItem("visitas", visitas);
} else {
    visitas = localStorage.getItem("visitas");
    visitas++;
    localStorage.setItem("visitas", visitas);
}
if (localStorage.getItem("fondo") === null) {
    localStorage.setItem("fondo", "FFFFFF");
} else {
    fondo = localStorage.getItem("fondo");
}

function inicio() {
    let clickBoton = document.getElementById("click");
    let contadorBoton = document.getElementById("contador");
    let resetSession = document.getElementById("resetSession");
    let fondo = document.getElementById("fondo");
    let mostrar = document.getElementById("mostrar");
    contadorBoton.value = contadorLocal;
    document.querySelector("span").innerText = visitas;
    document.body.style.backgroundColor = localStorage.getItem("fondo");

    clickBoton.addEventListener("click", function () {
        contadorSession++;
        contadorLocal++;
        sessionStorage.setItem("clicks", contadorSession.toString());
        localStorage.setItem("clicks", contadorLocal.toString());
        contadorBoton.value = contadorSession;
    });
    resetSession.addEventListener("click", function () {
        sessionStorage.removeItem("clicks");
        contadorSession = 0;
        contadorBoton.value = contadorSession;
    })
    fondo.addEventListener("change", function () {
        localStorage.setItem("fondo", this.value);
        document.body.style.backgroundColor = this.value;
    })
    mostrar.addEventListener("click", function () {
        let array = Array();
        for (let i = 0; i < sessionStorage.length; i++) {
            array.push(sessionStorage.key(i) + ": " + sessionStorage.getItem(sessionStorage.key(i)));
        }
        generarContenido(array);
    })

}

function generarContenido(array) {
    try {
        document.body.removeChild(document.querySelector("section"));;
    }catch (e) {
    }
    let section = document.createElement("section");
    for (let i = 0; i < array.length; i++) {
        let p = document.createElement("p");
        p.innerText = array[i];
        section.appendChild(p);
    }
    document.body.appendChild(section);
}