function CuentaCorriente(datosPers, nCuenta, saldo) {
    this.datosPers = datosPers;
    this.nCuenta = nCuenta;
    this.saldo = saldo;
    this.visualizarCliente = visualizarDatosCliente;
    this.visualizarSaldo = visualizarSaldo;
    this.abono = abono;
    this.cargo = cargo;
}

function visualizarDatosCliente() {
    return `Datos Personales -> ${this.datosPers.visualizarDatosPersonales()}`;
}

function visualizarSaldo() {
    return `Saldo: ${this.saldo.toFixed(2)}€\n`;
}

function abono(abono) {
    this.saldo += abono;
}

function cargo(cargo) {
    if (this.saldo >= cargo) {
        this.saldo -= cargo;
        return true;
    } else {
        return false;
    }
}