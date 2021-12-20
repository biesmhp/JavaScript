function Cd_musica(titulop, grupop, fechap, filep) {
  this.titulo = titulop;
  this.grupo = grupop;
  this.fecha = fechap;
  this.visualizar = mostrar;
  this.precio = 0;
  this.imagen = filep;
}

function mostrar() {
  return "Titulo: "+this.titulo+", Grupo: "+this.grupo+", Fecha: "+this.fecha+", Precio: "+this.precio+", Ruta fichero: "+this.imagen+"\n";
}
