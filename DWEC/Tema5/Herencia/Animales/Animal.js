function Animal(nombre, especie, nPatas, cola) {
    this.nombre = nombre;
    this.especie = especie;
    this.nPatas = nPatas;
    this.cola = cola;
    this.visualizar = visualizar;
}

function Vaca(nombre, especie, nPatas, cola) {
    Animal.call(this, nombre, especie, nPatas, cola);
    this.litrosLeche = 50;
    this.ordeñar = ordeñar;

}

function Tigre(nombre, especie, nPatas, cola) {
    Animal.call(this, nombre, especie, nPatas, cola);
    this.nVictimas = 0;
    this.otraVictima = otraVictima;
}
function visualizar() {
    return `Nombre: ${this.nombre}, Especie: ${this.especie}, N. Patas: ${this.nPatas}, Tiene cola?: ${(this.cola == true) ? "si" : "no"} `;
}

function ordeñar(litros) {
    this.litrosLeche -= litros;
}

function otraVictima(nuevasVictimas) {
    this.nVictimas += nuevasVictimas;
}