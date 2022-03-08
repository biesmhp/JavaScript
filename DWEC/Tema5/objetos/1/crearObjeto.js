addEventListener("load", inicio, false);

let arrayAlumnos = Array();
function inicio() {
    let introducirBoton = document.getElementById("botonIntroducir");
    introducirBoton.addEventListener("click", function () {
        getAlumno();
    }, false)

    let textArea = document.getElementById("resultados");
    /*let alumno1 = new Alumno("Daniel", "DAW", 10);
    let direccion = "Torrelavega, 39300";
    Alumno.prototype.domicilio = direccion;*/

    Alumno.prototype.visualizar = function () {
        let texto = "";
        texto += (`Nombre:  ${this.nombre}\n`);
        texto += (`Curso: ${this.curso} \n`);
        texto += (`Precio del curso: ${this.precioCurso()}€\n`);
        texto += (`Precio de becario: ${this.precioBecario(20)} €\n\n`);
        return texto;
    };

    let visualizarBoton = document.getElementById("botonVisualizar");
    visualizarBoton.addEventListener("click", function () {
        let texto = "";
        for (const alumno of arrayAlumnos) {
            texto += alumno.visualizar();
        }
        textArea.value = texto;
    })


}

function getAlumno() {
    let nombre = prompt("Introducir nombre");
    let curso = prompt("Introducir curso");
    let numeroCursos = prompt("Introducir numero de cursos");
    arrayAlumnos.push(new Alumno(nombre, curso, numeroCursos));
}



