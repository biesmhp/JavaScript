
function Alumno(nombrep,cursop,numMateriasp) {
  this.nombre = nombrep;
  this.curso = cursop;
  this.materias = numMateriasp;
  this.precioCurso = function() {
      precio = 100*this.materias;
      return precio;
    }
  this.precioFinal = beca;
  this.visualizar = mostrar;
};

function beca(num) {
  precio = 100*this.materias;
  descuento = precio*num/100;
  precioFinal = precio - descuento;
  return precioFinal;
}

function mostrar() {
  return "Nombre: "+this.nombre+", Curso: "+this.curso+", Materias: "+this.materias+
  "\nPrecio del curso: "+this.precioCurso()+"\nPrecio final con descuento: "+this.precioFinal(5)+"\n";
}
