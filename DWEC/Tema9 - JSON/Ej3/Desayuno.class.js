function Desayuno(nombre, precio, descripcion, calorias) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.calorias = calorias;
    this.visualizar = visualizar;
}

function visualizar() {
    return `<p>Desayuno: ${this.nombre}</p><p>Precio: ${this.precio}</p><p>Descripción: ${this.descripcion}</p><p>Calorias: ${this.calorias}Kcal</p>`;
}