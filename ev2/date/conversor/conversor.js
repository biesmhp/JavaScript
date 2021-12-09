// Cantidad = la cantidad (en unidades de tiempo o milisegundos)
// Unidad = El tipo de unidad introducido o al que queremos convertir los Milisegundos ('se','mi','ho','di')
// Modo = Seleccionamos de Milisegundos a Unidades o al reves
function convertirMilisegundos(cantidad, unidad, modo){
  if (arguments.length != 3) {
    alert("La funcion convertir a/de Milisegundos necesita 3 parámetros");
    return false;
  }
  var valor;
  switch (unidad) {
    // Segundos
    case 'se': valor=1000;break;
    // Minutos
    case 'mi': valor=6000;break;
    // Horas
    case 'ho': valor=3600000;break;
    // Días
    case 'di': valor=86400000;break;
  }
  switch (modo) {
    // De Milisegundos a Unidades
    case 'mu': return cantidad/valor;
    // De Unidades a Milisegundos
    case 'um': return cantidad*valor;
  }
}

console.log("Convertir 1350000milisegundos a días: "+convertirMilisegundos(1350000,'di','mu'));
