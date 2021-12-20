addEventListener('load',inicio,false);
function inicio() {
  // Array con todos los objetos creados
  arrObjetos = new Array();
  // Variables recogidas por el HTML
  iptTitulo = document.getElementById('inputTitulo');
  iptGrupo = document.getElementById('inputGrupo');
  iptFecha = document.getElementById('inputFecha');
  iptImagen = document.getElementById('inputImagen');
  // Botones del HTML
  btnEvent = document.getElementById('btnConfirmar');
  btnEvent.addEventListener('click',confirmacion,false);
}

function confirmacion() {
  crearObjeto();
  addPrecio();
  visualizado();
}

function crearObjeto() {
  arrObjetos.push(new Cd_musica(iptTitulo.value,iptGrupo.value,iptFecha.value,iptImagen.value.slice(12)));
}
function addPrecio() {
  for (var position in arrObjetos) {
    arrObjetos[position].precio = (Math.random()*100).toFixed(2);
  }
}
function visualizado() {
  document.getElementById('visCds').value="ERROR en la visualización";
  texto="";
  for (let posicion in arrObjetos) {
    texto+=arrObjetos[posicion].visualizar();
    // console.log(texto);
  }
  // Para añadir un campo calculado al final de la previsualización
  texto+=precioTotal();
  document.getElementById('visCds').value=texto;
}
function precioTotal() {
  var sumatorio = 0;
  for (var position in arrObjetos) {
    sumatorio += parseFloat(arrObjetos[position].precio);
  }
  return sumatorio;
}
