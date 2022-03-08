addEventListener("load", inicio, false);

function inicio() {
    let arrayEmpleados = Array();
    let arrayProyectos = Array();
    let newEmpleado = document.getElementById("addEmpleado");
    let bloqueProgramador = document.getElementById("lineas");
    let bloqueAnalista = document.getElementById("proyectos");
    let selectNombre = document.getElementById("nombresSelect");
    /* INPUTS FORMULARIO */
    let nombre = document.getElementById("nombre");
    let cedula = document.getElementById("cedula");
    let edad = document.getElementById("edad");
    let casado = document.getElementById("casado");
    let salario = document.getElementById("salario");
    let lineas = document.getElementById("lineasInput");
    let lenguaje = document.getElementById("lenguaje");
    let proyectos = document.getElementById("proyectosInput");
    let mostrarPrincipiantes = document.getElementById("mostrarPrincipiantes");
    let subirSueldo = document.getElementById("subirSueldo");
    let mostrarLineas = document.getElementById("mostrarLineas");
    let visualizarTopLineas = document.getElementById("visualizarTopLineas");
    let mostrarProyecto = document.getElementById("mostrarProyecto");
    let addProyecto = document.getElementById("addProyecto");
    let mostrarResultado = document.getElementById("mostrarResultado");
    let resultado = document.getElementById("resultado");

    /* EVENTOS */
    document.getElementById("Analista").addEventListener("change", function () {
        bloqueProgramador.style.display = "none";
        bloqueAnalista.style.display = "block";
        lineas.value = "";
        lenguaje.value = "";
        /* CREAR OPTIONS DEL SELECT */
        selectNombre.innerHTML = "";
        for (const empleado of arrayEmpleados) {
            if (empleado instanceof Analista){
                let option = document.createElement("option");
                option.text = empleado.nombre;
                option.value = empleado.nombre;
                selectNombre.appendChild(option);
            }
        }
    }, false);

    document.getElementById("Programador").addEventListener("change", function () {
        bloqueProgramador.style.display = "block";
        bloqueAnalista.style.display = "none";
        proyectos.value = "";
        /* CREAR OPTIONS DEL SELECT */
        selectNombre.innerHTML = "";
        for (const empleado of arrayEmpleados) {
            if (empleado instanceof Programador){
                let option = document.createElement("option");
                option.text = empleado.nombre;
                option.value = empleado.nombre;
                selectNombre.appendChild(option);
            }
        }
    }, false);

    newEmpleado.addEventListener("click", function () {
        addEmpleado(arrayEmpleados, nombre, cedula, edad, casado, salario, lineas, lenguaje, arrayProyectos);
        alert("Empleado añadido");
        arrayProyectos = Array();
    }, false);

    addProyecto.addEventListener("click", function () {
        arrayProyectos.push(proyectos.value);
        proyectos.value = "";
        alert("Proyecto añadido");
    }, false);

    mostrarResultado.addEventListener("click", function () {
        resultado.value = getEmpleadosString(arrayEmpleados);
    }, false);

    mostrarPrincipiantes.addEventListener("click", function () {
        resultado.value = getEmpleadosPrincipiantes(arrayEmpleados);
    }, false);

    subirSueldo.addEventListener("click", function () {
        subirSueldoSenior(arrayEmpleados);
    }, false);

    mostrarLineas.addEventListener("click", function () {
        resultado.value = getLineasCodigoMes(arrayEmpleados);
    }, false);

    visualizarTopLineas.addEventListener("click", function () {
        resultado.value = "TOP PROGRAMADOR (MAS LINEAS DE CODIGO)\n" + getTopLineas(arrayEmpleados).mostrarProgramador();
    }, false);

    mostrarProyecto.addEventListener("click", function () {
        resultado.value = getProyectosEmpleado(arrayEmpleados, selectNombre);
    }, false);
}

/* FUNCIONES */
function getProyectosEmpleado(arrayEmpleados, selectNombre) {
    let texto = `PROYECTOS DE ${selectNombre.value}\n`;
    for (const empleado of arrayEmpleados) {
        if (empleado instanceof Analista && empleado.nombre.toLowerCase() === selectNombre.value.toLowerCase()) {
            texto += empleado.nombre.toUpperCase() + ": " + empleado.proyectos + " \nNumero de proyectos: " + empleado.nProyectos()
        }
    }
    return texto;
}

function getTopLineas(arrayEmpleados) {
    let arrayProgramadores = Array();
    for (const empleado of arrayEmpleados) {
        if (empleado instanceof Programador) {
            arrayProgramadores.push(empleado);
        }
    }
    return arrayProgramadores.sort((a,b)=>b.calcularLineasMes()-a.calcularLineasMes())[0];
}

function getLineasCodigoMes(arrayEmpleados) {
    let texto = "LINEAS DE CODIGO\n";
    let mes = parseInt(prompt("Introduzca el numero del mes"));
    for (const empleado of arrayEmpleados) {
        if (empleado instanceof Programador) {
            texto += empleado.nombre + ": " + empleado.calcularLineasMes(mes) + " lineas\n";
        }
    }
    return texto;
}

function subirSueldoSenior(arrayEmpleados) {
    let incremento = parseInt(prompt("Introduzca la subida en % del sueldo"));
    for (const empleado of arrayEmpleados) {
        if (empleado.clasificacion() === "Senior") {
            empleado.aumentarSalario(incremento);
        }
    }
}

function addEmpleado(arrayEmpleados, nombre, cedula, edad, casado, salario, lineas, lenguaje, proyectos) {
    let tipoEmpleado = document.getElementsByName("tipo");
    if (tipoEmpleado[0].checked) {
        arrayEmpleados.push(new Programador(nombre.value, cedula.value, parseInt(edad.value), casado.value, salario.value, parseInt(lineas.value), lenguaje.value));
    } else if (tipoEmpleado[1].checked) {
        arrayEmpleados.push(new Analista(nombre.value, cedula.value, parseInt(edad.value), casado.value, salario.value, proyectos));
    }
}

function getEmpleadosString(arrayEmpleados) {
    let texto = "TODOS LOS EMPLEADOS\n";
    for (const empleado of arrayEmpleados) {
        if (empleado instanceof Analista) {
            texto += empleado.mostrarAnalista();
        } else if (empleado instanceof Programador){
            texto += empleado.mostrarProgramador();
        }
    }
    return texto;
}

function getEmpleadosPrincipiantes(arrayEmpleados) {
    let texto = "EMPLEADOS PRINCIPIANTES\n";
    for (const empleado of arrayEmpleados) {
        if (empleado instanceof Analista && empleado.clasificacion() === "Principiante") {
            texto += empleado.mostrarAnalista();
        } else if (empleado instanceof Programador && empleado.clasificacion() === "Principiante"){
            texto += empleado.mostrarProgramador();
        }
    }
    return texto;
}
