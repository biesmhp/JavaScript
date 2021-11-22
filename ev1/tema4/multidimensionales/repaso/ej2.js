var numAlumnos = parseInt(Math.random()*50+1);

console.log("Numero de encuestados: "+numAlumnos);

var arrMuestra = new Array();
var row = [];

for (let i = 0; i < numAlumnos; i++) {
  row.push(parseInt(Math.random()*88888+11111));
  row.push(parseInt(Math.random()*2+1));
  row.push(parseInt(Math.random()*2+1));
  if (row[2]==1) {
    row.push(parseInt(Math.random()*2700+300));
  }
  arrMuestra.push(row);
  row = [];
}

// Visualizar los resultados
console.log("Tabla de resultados");
console.table(arrMuestra);

// Porcentaje de hombres
function perM(maz){
  let percent=0;
  for (let i in maz) {
    if (maz[i][1]==1) {
      percent++;
    }
  }
  percent = percent/maz.length*100;
  return percent.toFixed(2);
}
// Mostrar el porcentaje de hombres
console.log("Numero de hombres "+perM(arrMuestra));

// Porcentaje de mujeres
function perF(maz){
  let percent=0;
  for (let i in maz) {
    if (maz[i][1]==2) {
      percent++;
    }
  }
  percent = percent/maz.length*100;
  return percent.toFixed(2);
}
// Mostrar el porcentaje de mujeres
console.log("Numero de mujeres "+perF(arrMuestra));

// Porcentaje de hombres que trabajan y su sueldo promedio
function perMW(maz){
  let percent;
  let promedio;
  
  return [percent,promedio];
}
console.log(perMW(arrMuestra));
