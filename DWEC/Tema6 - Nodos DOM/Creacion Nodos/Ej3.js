addEventListener("load", inicio, false);

function inicio() {
    let borradoLentoBoton = document.getElementById("borrarLento");
    let borrarTodoBoton = document.getElementById("borrarTodo");
    let textoElemento = document.getElementById("textoElemento");
    let botonEliminarElemento = document.getElementById("botonEliminarElemento");
    borradoLentoBoton.addEventListener("click", function () {
        if (!borradoLento()) {
            crearMensaje("Ya estan todas las imagenes borradas");
            borradoLentoBoton.disabled = true;
        }
    }, false);
    borrarTodoBoton.addEventListener("click", function () {
        borrarTodo();
        crearMensaje("Todas las imagenes borradas");
        borrarTodoBoton.disabled = true;
    }, false);
    botonEliminarElemento.addEventListener("click", function () {
        if (eliminarPorId(textoElemento.value)) {

        } else {
            crearMensaje("No existe la imagen buscada");
        }
    }, false);
}

function eliminarPorId(id) {
    let section = document.body.children[0];
    let imagenes = document.body.children[0].children;
    for (const img of imagenes) {
        if (img.getAttribute("id") === id) {
            section.removeChild(img);
            return true;
        }
    }
    return false;
}

function borradoLento() {
    let section = document.body.children[0];
    let img = section.lastElementChild;
    try {
        section.removeChild(img);
        return true;
    } catch (e) {
        return false;
    }
}

function borrarTodo() {
    let condicion = true;
    do {
        condicion = borradoLento();
    } while (condicion);
}

function crearMensaje(mensaje) {
    let divError = document.body.children[2];
    let p = document.createElement("p");
    p.innerHTML = mensaje;
    divError.appendChild(p);
}