addEventListener('load',inicio,false);
// var alumno1 = new Alumno("Juan Pérez","tecnología",5);

// console.log("Alumno: "+alumno1.nombre+" curso:"+alumno1.curso+" con "+alumno1.materias+
//   " asignaturas.\nPrecio: "+alumno1.precioCurso()+" Precio de becario: "+alumno1.precioFinal(50)
// );

function inicio() {
  // Array con todos los objetos de alumnos creados
  arrAlumnos = new Array();
  // Variables recogidas por el HTML
  iptNombre = document.getElementById('inputNombre');
  iptCurso = document.getElementById('inputCurso');
  iptMaterias = document.getElementById('inputMaterias');
  // Botones del HTML
  btnEvent = document.getElementById('btnConfirmar');
  btnEvent.addEventListener('click',confirmacion,false);
}

function confirmacion() {
  crearAlumno();
  visualizado();
}

function crearAlumno() {
  arrAlumnos.push(new Alumno(iptNombre.value,iptCurso.value,iptMaterias.value));
}

function visualizado() {
  document.getElementById('visAlumnos').value="Hola";
  texto="";
  for (let posicion in arrAlumnos) {
    texto+=arrAlumnos[posicion].visualizar();
    console.log(texto);
  }
  document.getElementById('visAlumnos').value=texto;
}
