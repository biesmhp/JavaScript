function Habitacion(nHabitacion, fechaEntrada, fechaSalida, dni) {
    Hotel.call(this);
    this.nHabitacion = nHabitacion;
    this.estado = false;
    this.fechaEntrada = fechaEntrada;
    this.fechaSalida = fechaSalida;
    this.dni = dni;
    this.calcularImporte = calcularImporte;
}

function calcularImporte() {
    if (arguments.length === 2) {
        let dia = 1000 * 60 * 60 * 24;
        let fecha1 = new Date(arguments[0]);
        let fecha2 = new Date(arguments[1]);
        return [((fecha2 - fecha1) / dia) * 30, ((fecha2 - fecha1) / dia)];
    } else if (arguments.length === 1) {
        return (arguments[0] * 30);
    }
}