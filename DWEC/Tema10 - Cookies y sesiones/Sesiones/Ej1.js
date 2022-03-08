addEventListener("load", inicio, false);

function inicio() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let guardarSesion = document.getElementById("guardarSession");
    let guardarLocal = document.getElementById("guardarLocal");
    let obtenerSesion = document.getElementById("obtenerSession");
    let obtenerLocal = document.getElementById("obtenerLocal");
    let eliminarSesion = document.getElementById("eliminarSession");
    let eliminarLocal = document.getElementById("eliminarLocal");

    guardarSesion.addEventListener("click", function () {
        try {
            sessionStorage.setItem("nombre", nombre.value);
            sessionStorage.setItem("email", email.value);
        } catch (e) {
            alert("Error al guardar sesion")
        }
    }, false);
    obtenerSesion.addEventListener("click", function () {
        let array = Array();
        array.push(sessionStorage.getItem("nombre"));
        array.push(sessionStorage.getItem("email"));
        generarContenido(array);
    })
    guardarLocal.addEventListener("click", function () {
        try {
            localStorage.setItem("nombre", nombre.value);
            localStorage.setItem("email", email.value);
        } catch (e) {
            alert("Error al guardar sesion")
        }
    }, false);
    obtenerLocal.addEventListener("click", function () {
        let array = Array();
        array.push(localStorage.getItem("nombre"));
        array.push(localStorage.getItem("email"));
        generarContenido(array);
    }, false);
    eliminarSesion.addEventListener("click", function () {
        try {
            document.body.removeChild(document.querySelector("section"));;
        }catch (e) {
        }
        sessionStorage.clear();
    })
    eliminarLocal.addEventListener("click", function () {
        try {
            document.body.removeChild(document.querySelector("section"));;
        }catch (e) {
        }
        localStorage.clear();
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