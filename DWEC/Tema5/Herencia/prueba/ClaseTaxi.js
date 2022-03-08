function PadreTaxi() {
    this.fabricante = "Renault, SA";
    this.direccionFabricante = "C/R, Paris";
    this.getCapacidad = () => {
        if (tipoMotor === "Diesel") {
            return 40;
        } else {
            return 35;
        }
    }
    this.variarCarga = function (variacion) {
        this.carga += variacion;
    }
    this.variarVelocidad = function (variacion) {
        this.velocidad += variacion;
    }
}


function TaxiHijo(tipoMotor, numeroPasajeros, carga, velocidad) {
    this.tipoMotor = tipoMotor;
    this.numeroPasajeros = numeroPasajeros;
    this.carga = carga;
    this.velocidad = velocidad;
    /*this.visualizar = visualizar;*/
}

/*
function visualizar() {
    return `Fabricante: ${this.fabricante}, Motor: ${this.tipoMotor}, NºPasajeros: ${this.numeroPasajeros}, Carga: ${this.carga}, Velocidad: ${this.velocidad}`;
}*/