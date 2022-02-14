class Persona {
  constructor(nombre, edad, genero, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generaDNI();
    this.genero = this.comprobarSexo(genero);
    this.peso = peso;
    this.altura = altura;
  }

  calculaIMC(){
    return null;
  }

  esMayorDeEdad(){
    return this.edad>=18 ? true : false;
  }

  comprobarSexo(letra) {
    if (letra=="m"||letra=="M") {
      return "m";
    }else{
      return "h";
    }
  }

  informacion(){
    return "Nombre: "+this.nombre+", edad: "+this.edad+", con DNI: "+this.dni+". Género: "+this.genero+", peso: "+this.peso+", altura: "+this.altura;
  }

  generaDNI(){
    return "1234567B";
  }
}
