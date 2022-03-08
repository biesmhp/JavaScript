function Empleado(nombre, cedula, edad, casado, salario) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.edad = edad;
    this.casado = casado;
    this.salario = salario;
    this.clasificacion = clasificacion;
    this.aumentarSalario = aumentarSalario;
}

function clasificacion() {
    let texto = "";
    if (this.edad <= 21) {
        texto = "Principiante";
    } else if (this.edad <= 35) {
        texto = "Intermedio";
    } else if (this.edad > 35) {
        texto = "Senior";
    } else {
        texto = "Edad no valida";
    }
    return texto;
}


function aumentarSalario(incremento) {
    this.salario = this.salario * (1+incremento/100);
}