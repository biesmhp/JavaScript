function Analista(nombre, cedula, edad, casado, salario, proyectos) {
    Empleado.call(this, nombre, cedula, edad, casado, salario);
    this.proyectos = proyectos;
    this.nProyectos = nProyectos;
    this.mostrarAnalista = mostrarAnalista;
}

function nProyectos() {
    return this.proyectos.length;
}

function mostrarAnalista() {
    return `Nombre: ${this.nombre}, cedula: ${this.cedula}, edad: ${this.edad}, casado: ${this.casado ? "Si" : "No"}, salario: ${this.salario}, proyecto: ${this.proyectos}\n\n`;
}