addEventListener("load", inicio, false);

var nDivs, contador, colorFondo;

if (read_cookie("colorFondo") === null) {
    colorFondo = null;
} else {
    colorFondo = read_cookie("colorFondo")
}
if (read_cookie("contador") === null) {
    set_cookie("contador", 1)
    contador = 1;
} else {
    contador = read_cookie("contador")
    contador++;
    set_cookie("contador", contador)
}

if (read_cookie("nDivs") === null) {
    nDivs = 0;
} else {
    nDivs = read_cookie("nDivs")
}

function inicio() {
    let colorInput = document.getElementById("fondo");
    let guardarInput = document.getElementById("guardar");
    let selectInput = document.getElementById("divs");
    crearDivCajas();


    document.querySelector("span").innerHTML = contador;
    if (read_cookie("color") !== null) {
        document.body.style.backgroundColor = read_cookie("color")
    }

    colorInput.addEventListener("change", function () {
        colorFondo = this.value;
        document.body.style.backgroundColor = this.value;
    }, false);
    guardarInput.addEventListener("click", function () {
        set_cookie("color", colorFondo);
        set_cookie("nDivs", nDivs)
    }, false);
    selectInput.addEventListener("change", function () {
        nDivs = this.selectedIndex+1;
        crearDivCajas();
    }, false);
}

function set_cookie(name, value) {
    document.cookie = name + '=' + value + '; Path=/;';
}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function read_cookie(nombre) {
    let lista = document.cookie.split(";");
    let micookie = Array();
    for (let i in lista) {
        var busca = lista[i].search(nombre);

        if (busca > -1) {
            micookie = lista[i]
        }

    }
    let igual = micookie.indexOf("=");
    try {
        return micookie.substring(igual+1);
    } catch (e) {
        return null;
    }
}

function crearDivCajas() {
    try {
        document.body.removeChild(document.querySelector(".cajas"));
    } catch (e) {
    }
    let divInicial = document.createElement("div");
    divInicial.className = "cajas";
    for (let i = 0; i < nDivs; i++) {
        let caja = document.createElement("div");
        caja.className = "caja";
        divInicial.appendChild(caja);
    }
    document.body.insertBefore(divInicial, document.querySelector("#fondo"))
}
