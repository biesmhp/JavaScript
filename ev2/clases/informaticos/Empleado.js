class Empleado {
  constructor(nombre,cedula,edad,casado,salario) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.edad = edad;
    this.casado = casado;
    this.salario = salario;
  }

  clasificacionEdad(){
    if (this.edad<=21) {
      return "Principiante";
    } else if(this.edad>=22&&this.edad<=35) {
      return "Intermedio";
    }else{
      return "Senior";
    }
  }

  masSalario(percent){
    this.salario += this.salario*percent;
  }

  mostrar(){
    return "Nombre: "+this.nombre+", Cedula: "+cedula+", Edad: "+this.edad+", Casado: "+this.casado+", Salario: "+this.salario;
  }
}

class Programador extends Empleado {
  constructor() {
    super(nombre,cedula,edad,casado,salario,lineasPorDia,lenguaje);
    this.lineas = lineasPorDia;
    this.lenguaje = lenguaje;
  }

  lineasTotales(){
    return this.lineasPorDia*30;
  }
}

class Analista extends Empleado{
  constructor(nombre,cedula,edad,casado,salario,descripcionP) {
    super(nombre,cedula,edad,casado,salario);
    this.descripcion = descripcionP;
  }

  numProyectos(){
    return this.descripcion.length;
  }
}

addEventListener('load',inicio,false);
function inicio() {
  // Desplegar las opciones de analista o programador
  inputForm = document.querySelectorAll(".inpGrupo");
  for (var i = 0; i < inputForm.length; i++) {
    inputForm[i].addEventListener('click',function(e) {

    });
  }
}
