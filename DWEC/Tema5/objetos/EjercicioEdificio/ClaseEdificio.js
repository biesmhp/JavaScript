function Edificio(calle, numero, cp, plantas) {
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;
    this.plantas = plantas;
    this.addPlantasPuertas = addPlantasPuertas;
    this.addPropietario = addPropietario;
    this.imprimePlantas = imprimePlantas;
    this.imprimirInfo = imprimirInfo;
}

function addPlantasPuertas(nPuertas) {
    for (let i = 0; i < this.plantas.length; i++) {
        this.plantas[i] = Array(nPuertas).fill(0);
    }
}

function addPropietario(nombre, planta, puerta) {
    this.plantas[planta][puerta-1] = nombre;
}

function imprimePlantas() {
    let string = "";
    for (let i = 0; i < this.plantas.length; i++) {
        string += `Planta ${i}: `;
        for (let j = 0; j < this.plantas[i].length; j++) {
            string += `puerta ${j+1} -> ${this.plantas[i][j]}, `;
        }
        string += `\n`;
    }
    return string;
}

function imprimirInfo() {
    return `Calle: ${this.calle}, Nº: ${this.numero}, CP: ${this.cp}`;
}