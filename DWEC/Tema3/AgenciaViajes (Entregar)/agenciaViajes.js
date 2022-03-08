addEventListener('load', inicio, false);

function inicio() {
    /* Elementos Hotel */
    botonCosteHotel = document.getElementById("calcularHotelBoton");
    hotelBoolean = document.getElementById("elegirHotel");
    numeroNochesInput = document.getElementById("noches");
    tipoHotel = document.getElementById("tipoHotel");
    inputTotalHotel = document.getElementById("totalHotel");

    botonCosteHotel.addEventListener("click", actualizarPrecioHotel, false);
    botonCosteHotel.addEventListener("click", actualizarTotal, false);

    /* Elementos Avion */
    botonCosteAvion = document.getElementById("calcularAvionBoton");
    inputMeter = document.getElementById("meter");
    avionBoolean = document.getElementById("elegirAvion");
    ciudadSelect = document.getElementById("ciudad");
    descuento = document.getElementById("ida_vuelta");
    inputTotalAvion = document.getElementById("totalAvion");

    botonCosteAvion.addEventListener("click", actualizarPrecioAvion, false);
    botonCosteAvion.addEventListener("click", actualizarTotal, false);
    botonCosteAvion.addEventListener("click", actualizarMeter, false);

    /* Elementos coche */
    botonCosteAlquiler = document.getElementById("calcularCocheBoton");
    cocheBoolean = document.getElementById("elegirCoche");
    numeroDiasInput = document.getElementById("dias");
    inputTotalCoche = document.getElementById("totalCoche");

    botonCosteAlquiler.addEventListener("click", actualizarPrecioCoche, false);
    botonCosteAlquiler.addEventListener("click", actualizarTotal, false);

    /* TOTAL */
    inputTotal = document.getElementById("total");
}

function actualizarPrecioHotel() {
    if (hotelBoolean.checked) {
        inputTotalHotel.value = calculoHotel(numeroNochesInput.value, tipoHotel.value);
    } else {
        inputTotalHotel.value = 0;
    }
}

function actualizarPrecioAvion() {
    if (avionBoolean.checked) {
        inputTotalAvion.value = calculoAvion(ciudadSelect.value, descuento.checked);
    } else {
        inputTotalAvion.value = 0;
    }

}

function actualizarPrecioCoche() {
    if (cocheBoolean.checked) {
        inputTotalCoche.value = alquilerCoche(numeroDiasInput.value);
    } else {
        inputTotalCoche.value = 0;
    }

}

function actualizarMeter() {
    inputMeter.value = capacidadCiudad(ciudadSelect.value);
}

function actualizarTotal() {
    let valorTotal = calcularTotal(inputTotalHotel.value, inputTotalAvion.value, inputTotalCoche.value);
    if (isNaN(valorTotal)) {
        inputTotal.value = 0;
    } else {
        inputTotal.value = valorTotal;
    }
    
}

function calculoHotel(noches, estrellas) {
    let precio = 0;
    if (estrellas == 5) {
        precio = 130;
    } else if (estrellas == 2) {
        precio = 35;
    } else {
        precio = 0;
    }
    return precio * noches;
}

function calculoAvion(ciudad, tipoVuelo) {
    let precioCiudad = 0;
    switch (ciudad) {
        case "madrid":
            precioCiudad = 200;
            break;
        case "tokyo":
            precioCiudad = 500;
            break;
        case "berlin":
            precioCiudad = 70;
            break;
        case "belgica":
            precioCiudad = 37;
            break;
        default:
            break;
    }

    if (tipoVuelo) {
        return precioCiudad * 0.9;
    } else {
        return precioCiudad;
    }
}

function alquilerCoche(dias) {
    precioAlquiler_dia = 40;
    if (dias >= 7) {
        return precioAlquiler_dia * dias - 50;
    } else if (dias >= 3) {
        return precioAlquiler_dia * dias - 20;
    } else if (dias > 0) {
        return precioAlquiler_dia * dias;
    } else {
        return 0;
    }
}

function calcularTotal(hotel, avion, coche) {
    return `${parseInt(hotel) + parseInt(avion) + parseInt(coche)}`;
}

function capacidadCiudad(ciudad) {
    let valor = 0
    if (ciudad == "madrid") {
        valor = 4;
    } else if (ciudad == "tokyo"){
        valor = 9;
    } else if (ciudad == "berlin"){
        valor = 1;
    } else if (ciudad == "belgica"){
        valor = 6;
    }
    return valor;
}