var numAlumnos = parseInt(Math.random()*50);

console.log("Numero de encuestados: "+numAlumnos);

var arrMuestra = new Array();
var row = [];

for (let i = 0; i < numAlumnos; i++) {
  row.push(parseInt(Math.random()*88888+11111));
  row.push(parseInt(Math.random()*2));
  row.push(parseInt(Math.random()*2));
  if (row[2]==1) {
    row.push(parseInt(Math.random()*2700+300));
  }
  arrMuestra.push(row);
  row = [];
}
console.log("Tabla de resultados");
console.table(arrMuestra);

// Porcentaje de hombres
function perM(arrMuestra){
  let percent;
  return percent;
}
