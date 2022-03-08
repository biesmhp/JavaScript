function Alumno(nombre, curso, numMateria) {
    this.nombre = nombre;
    this.curso = curso;
    this.numMateria = numMateria;
    this.precioCurso = matricula;
    this.precioBecario = beca;
}

function matricula() {
    return 100 * this.numMateria;
}

function beca(num) {
    let precio = 100 * this.numMateria;
    let descuento = precio * num / 100;
    return precio - descuento;
}
