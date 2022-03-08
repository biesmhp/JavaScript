function Persona(nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.calcularIMC = calcularIMC;
    this.mayorEdad = mayorEdad;
    this.informacion = informacion;
    this.generaDNI = generaDNI;
}

function calcularIMC() {
    const imc = this.peso / (this.altura ^ 2);
    let value = null;
    if (imc < 20) {
        value = -1;
    } else if (imc <= 25) {
        value = 0;
    } else {
        value = 1;
    }
    return value;
}

function mayorEdad() {
    if (this.edad >= 18){
        return true;
    }
    return false;
}

function informacion() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}`;
}

function generaDNI() {
    let dni = "";
    for (let i = 0; i < 8; i++) {
        dni += `${Math.abs(Math.round(Math.random() * 11 - 1))}`;
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    dni += alphabet[Math.floor(Math.random() * alphabet.length)]
    this.dni = dni;
}