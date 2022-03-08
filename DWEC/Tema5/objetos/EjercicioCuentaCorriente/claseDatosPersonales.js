function DatosPersonales(nombre, dni, direccion, telefono) {
    this.nombre = nombre;
    this.dni = dni;
    this.direccion = direccion;
    this.telefono = telefono;
    this.visualizarDatosPersonales = visualizarDatosPers;
}

function visualizarDatosPers() {
    return `Nombre: ${this.nombre}, DNI: ${this.dni}, Direccion: ${this.direccion}, Tlfn: ${this.telefono}`;
}