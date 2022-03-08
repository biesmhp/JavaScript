addEventListener("load", inicio, false);

function inicio() {
    /* INICIALIZAR HOTEL */
    let arrayHabitaciones = Array();
    let error = true;
    let nHab;
    do {
        nHab = prompt("Introducir numero de habitaciones:");
        if (!isNaN(nHab)) {
            error = false;
        }
    }
    while (error);
    for (let i = 0; i < nHab; i++) {
        arrayHabitaciones.push(new Habitacion((i + 1), 0, 0, 0));
    }
    alert("Hotel listo para recibir clientes");

    /* INICIALIZAR ELEMENTOS HTML */
    let habitacion = document.getElementById("habitacion");
    let fechaInicio = document.getElementById("fechaInicio");
    let fechaFin = document.getElementById("fechaFin");
    let dni = document.getElementById("dni");
    let calcular = document.getElementById("calcular");
    let mostrarHabitaciones = document.getElementById("mostrarHabitaciones");
    let resultadoHotel = document.getElementById("resultadoHotel");
    let importeA = document.getElementById("importeA");
    let importeB = document.getElementById("importeB");
    /* EVENTOS */
    calcular.addEventListener("click", function () {
        arrayHabitaciones[parseInt(habitacion.value) - 1] = new Habitacion(habitacion.value, new Date(fechaInicio.value), new Date(fechaFin.value), dni.value);
        arrayHabitaciones[parseInt(habitacion.value) - 1].estado = true;
        let numeroDias;
        let importeTotalA;
        /* Calculo por el metodo A */
        [importeTotalA, numeroDias] = arrayHabitaciones[parseInt(habitacion.value) - 1].calcularImporte(new Date(fechaInicio.value), new Date(fechaFin.value));
        /* Calculo por el metodo B */
        let importeTotalB = arrayHabitaciones[parseInt(habitacion.value) - 1].calcularImporte(numeroDias);
        /* Imprimir en cada textArea */
        importeA.value = "Resultado Metodo A:\n" + importeTotalA + "€";
        importeB.value = "Resultado Metodo B:\n" + importeTotalB + "€";
    }, false);

    mostrarHabitaciones.addEventListener("click", function () {

        resultadoHotel.value = cadenaTextoHabitaciones(arrayHabitaciones);
    })

    /* FUNCIONES AUXILIARES */
    function cadenaTextoHabitaciones(arrayHabitaciones) {
        let texto = "INFORMACION DEL HOTEL\n";
        texto += arrayHabitaciones[0].nombre + ", ";
        texto += arrayHabitaciones[0].direccion + ", ";
        texto += arrayHabitaciones[0].telefono + ", ";
        texto += arrayHabitaciones[0].categoria + "\n===================\n\n";
        for (let i = 0; i < arrayHabitaciones.length; i++) {
            texto += "Habitacion Nº" + arrayHabitaciones[i].nHabitacion + ", ";
            texto += "Estado: " + arrayHabitaciones[i].estado + ", ";
            texto += "Fecha Entrada: " + arrayHabitaciones[i].fechaEntrada.toLocaleString() + ", ";
            texto += "Fecha Salida: " + arrayHabitaciones[i].fechaSalida.toLocaleString() + "\n\n";
        }
        document.images[0].src = arrayHabitaciones[0].logo;
        return texto;
    }

}