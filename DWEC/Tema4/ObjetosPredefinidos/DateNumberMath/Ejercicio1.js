addEventListener("load", inicio, false);

function getFechaPersonalizada(fecha) {
    let diaDelMes = fecha.getDate();
    let diaSemana = fecha.getDay();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    let formatoBarra = `${diaDelMes}/${mes}/${año}`;
    //////////////////////////////////////////////////////////////////////////
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let fechaEspañolCompleta = fecha.toLocaleDateString("es-Es", options);
    //////////////////////////////////////////////////////////////////////////
    let semana = Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo");
    let fechaEspañol = `${semana[fecha.getDay() - 1]} ${formatoBarra}`;

    document.write("Fecha completa: " + fecha + "<br>");
    document.write("Dia mes: " + diaDelMes + "<br>");
    document.write("Dia semana: " + diaSemana + "<br>");
    document.write("Mes: " + mes + "<br>");
    document.write("Año: " + año + "<br>");
    document.write("Fecha: " + formatoBarra + "<br>");
    document.write("Fecha: " + fechaEspañol + "<br>");
    document.write("Fecha: " + fechaEspañolCompleta + "<br>");
}

getFechaPersonalizada();

function inicio() {
    let fechaInput = document.getElementById("inputFecha");
    let mostrarBoton = document.getElementById("mostrar");
    mostrarBoton.addEventListener("click", function () {
        getFechaPersonalizada(new Date(fechaInput.value));
    })
}
