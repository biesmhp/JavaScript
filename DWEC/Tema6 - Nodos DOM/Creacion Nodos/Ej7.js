addEventListener("load", inicio, false);

function inicio() {
    let botonAddDato = document.getElementById("addDato");
    let textoDato = document.getElementById("dato");
    let select = document.getElementById("select");
    let borrarElementoBoton = document.getElementById("borrarElemento");
    let borrarTodoBoton = document.getElementById("borrarTodo");
    let addBetweenBoton = document.getElementById("addBetweenBoton");
    let addBetweenTexto = document.getElementById("addBetweenTexto");
    let ul = document.body.children[1];

    botonAddDato.addEventListener("click", function () {
        crearOption_Li(textoDato, select, ul);
        deshabilitarBotones(false, borrarElementoBoton, borrarTodoBoton);

    }, false);

    borrarElementoBoton.addEventListener("click", function () {
        borrarUltimo(ul, select, ul.lastElementChild, select.lastElementChild);
        if (select.childElementCount === 0) {
            deshabilitarBotones(true, borrarElementoBoton, borrarTodoBoton);
        }

    }, false);

    borrarTodoBoton.addEventListener("click", function () {
        let aux = true;
        do {
            aux = borrarUltimo(ul, select, ul.lastElementChild, select.lastElementChild);
        } while (aux);
        deshabilitarBotones(true, borrarElementoBoton, borrarTodoBoton);
    }, false);

    addBetweenBoton.addEventListener("click", function () {
        insertarAntesDe(ul, select, textoDato, addBetweenTexto);
        deshabilitarBotones(false, borrarElementoBoton, borrarTodoBoton);
    }, false);
}

function insertarAntesDe(ul, select, texto, etiquetaContenido) {
    let li = crearLi(texto.value);
    let option = crearOption(texto.value, texto.value);
    for (let child of select.children) {
        if (child.innerHTML === etiquetaContenido.value) {
            select.insertBefore(option, child);
            break;
        }
    }
    for (let child of ul.children) {
        if (child.innerHTML === etiquetaContenido.value) {
            ul.insertBefore(li, child);
            break;
        }
    }
}

function deshabilitarBotones(boolean) {
    for (const argument of arguments) {
        argument.disabled = boolean;
    }
}

function borrarUltimo(ul, select, li, option) {
    try {
        ul.removeChild(li);
        select.removeChild(option);
        return true;
    } catch (e) {
        return false;
    }
}

function crearOption_Li(textoDato, select, ul) {
    let option = crearOption(textoDato.value, textoDato.value);
    select.appendChild(option);
    let li = crearLi(textoDato.value);
    ul.appendChild(li);
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
