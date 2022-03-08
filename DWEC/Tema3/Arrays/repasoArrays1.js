addEventListener('load', inicio, false);

function inicio() {
    /* TEXTAREA Y BOTON MOSTRAR */
    mostrarBoton = document.getElementById("botonMostrar");
    mostrarBoton.addEventListener("click", function () {
        inputTextArea.value = mostrarArray(todosAlumnos);
    }, false);
    inputTextArea = document.getElementById("visualizar");
    /* BAJA ALUMNO Y BOTON BAJA */
    bajaInput = document.getElementById("bajaAlumnoInput");
    bajaBoton = document.getElementById("botonBajaAlumno");
    bajaBoton.addEventListener("click", function () {
        inputTextArea.value = darBajaAlumno(bajaInput.value, todosAlumnos);
    }, false);
    /* ALTA ALUMNO Y BOTON ALTA */
    altaInput = document.getElementById("altaAlumnoInput");
    altaBoton = document.getElementById("botonAltaAlumno");
    altaBoton.addEventListener("click", function () {
        darAltaAlumno(altaInput.value, todosAlumnos);
    }, false);
    /* CLASE A y B */
    claseABoton = document.getElementById("botonClaseA");
    claseABoton.addEventListener("click", function () {
        ordenarClase(claseA);
        inputTextArea.value = mostrarArray(claseA);
    }, false)
    claseBBoton = document.getElementById("botonClaseB");
    claseBBoton.addEventListener("click", function () {
        ordenarClase(claseB);
        inputTextArea.value = mostrarArray(claseB);
    }, false)
    /* DESAPARECIDOS */
    desaparecidosBoton = document.getElementById("botonDesaparecidos");
    desaparecidosBoton.addEventListener("click", function () {
        inputTextArea.value = mostrarArray(desaparecidos);
    })
}
/* ARRAYS */
let alumnos = new Array("Juan López", "Luis Guerra", "María de la Hoz", "Elena Gómez", "Julia Caba");
let erasmus = new Array("John Smith", "Lia Warner", "Oscar Klein", "Edward Crow");
let todosAlumnos = alumnos.concat(erasmus);
let claseA = todosAlumnos.slice(0, todosAlumnos.length / 2);
let claseB = todosAlumnos.slice(todosAlumnos.length / 2, todosAlumnos.length);
claseA.splice(2, 1);
claseB.splice(2, 1, "Luis Alberto Peres", "Diana Pierce");
let desaparecidos = getDesaparecidos();



/* FUNCIONES */
function mostrarArray(array) {
    let resultado = array.join("\n");
    return resultado;
}
function darBajaAlumno(alumnoBaja, array) {
    let borrado = "";
    array.forEach((element, key) => {
        if (element == alumnoBaja) {
            borrado = array.splice(key, 1);
        }
    });
    return borrado;
}
function darAltaAlumno(alumnoAlta, array) {
    array.unshift(alumnoAlta);
}
function ordenarClase(array) {
    array.sort();
}
function getDesaparecidos() {
    let desaparecidos = new Array();
    todosAlumnos.forEach((element, key) => {
        if (claseA.indexOf(todosAlumnos[key]) == -1 && claseB.indexOf(todosAlumnos[key]) == -1) {
            desaparecidos.push(element);
        }
    });
    return desaparecidos;
}