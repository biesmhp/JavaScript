addEventListener("load", inicio, false);

function inicio() {
    let botonAddDato = document.getElementById("addDato");
    let textoDato = document.getElementById("dato");
    let select = document.getElementById("select");
    let ul = document.body.children[1];
    let arrayDatos = Array();
    botonAddDato.addEventListener("click", function () {
        arrayDatos.push(textoDato.value);
        let option = crearOption(arrayDatos[arrayDatos.length-1], arrayDatos[arrayDatos.length-1]);
        select.appendChild(option);
        let li = crearLi(arrayDatos[arrayDatos.length-1]);
        ul.appendChild(li);
    }, false);

}

function crearOption(valor, texto) {
    let option = document.createElement("option");
    option.setAttribute("value", valor);
    option.innerHTML = texto;
    return option;
}

function crearLi(texto) {
    let li = document.createElement("li");
    li.innerHTML = texto;
    return li;
}

