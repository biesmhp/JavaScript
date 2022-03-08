addEventListener("load", inicio, false);
function inicio(){

    TaxiHijo.prototype = new PadreTaxi();
    let arrayTaxis = Array();
    let introducir = document.getElementById("botonIntroducir");
    let motor = document.getElementById("tipoMotor");
    let pasajeros = document.getElementById("pasajeros");
    let carga = document.getElementById("carga");
    let velocidad = document.getElementById("velocidad");
    let resultado = document.getElementById("resultado");
    let variar = document.getElementById("variarVelocidad");
    let variarVelocidadBtn = document.getElementById("variarVelocidad-btn");
    let variarCapacidadBtn = document.getElementById("variarCapacidad-btn");
    let variarCargaBtn = document.getElementById("variarCarga-btn");

    introducir.addEventListener("click", function () {
        let taxi = new TaxiHijo(motor.value, parseInt(pasajeros.value), parseInt(carga.value), parseInt(velocidad.value));
        arrayTaxis.push(taxi);
        resultado.value = mostrarArray(arrayTaxis);
    }, false);

    variarVelocidadBtn.addEventListener("click", function (){
        let taxi = arrayTaxis.pop();
        taxi.variarVelocidad(parseInt(variar.value));
        arrayTaxis.push(taxi);
        resultado.value = mostrarArray(arrayTaxis)
    }, false);

    variarCargaBtn.addEventListener("click", function (){
        let taxi = arrayTaxis.pop();
        taxi.variarCarga(parseInt(variar.value));
        arrayTaxis.push(taxi);
        resultado.value = mostrarArray(arrayTaxis)
    }, false);

    /*variarCapacidadBtn.addEventListener("click", function (){
        let taxi = arrayTaxis.pop();
        taxi.variarCapacidad(parseInt(variar.value));
        arrayTaxis.push(taxi);
        resultado.value = mostrarArray(arrayTaxis)
    }, false);*/

}

function mostrarArray(array) {
    let string = "";
    for (const taxi of array) {
        string += `Fabricante: ${taxi.fabricante}, Motor: ${taxi.tipoMotor}, NºPasajeros: ${taxi.numeroPasajeros}, Carga: ${taxi.carga}, Velocidad: ${taxi.velocidad} \n\n`;
    }
    return string;
}
