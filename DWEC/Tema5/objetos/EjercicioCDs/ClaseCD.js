function Cd_musica(titulo, grupo, fecha) {
    this.titulo = titulo;
    this.grupo = grupo;
    this.fecha = fecha;
    this.visualizacion = visualizar;
}

function visualizar() {
    return `Titulo: ${this.titulo}\nGrupo: ${this.grupo}\nFecha: ${this.fecha}`;
}