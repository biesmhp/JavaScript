var mazAlumnosNotas = [
  ["Ernesto",10,2,6],["Luisa",1,4,6],
  ["Javier",9,6,6],["Maria",3,2,6],
  ["Julián",9,2,9],["Natividad",3,5,8],
  ["Lorena",9,1,1],["Carolina",7,7,6],
];

console.log(visual(mazAlumnosNotas));

function visual(maz){
  let texto='';
  for (let i in maz) {
    texto+="Alumno "+maz[i][0]+" con notas: ";
    for (let y in maz[i]) {
      if (y>0) {
        texto+=maz[i][y];
        if (y==maz[i].length-1) {
          texto+=".\n";
        }else{
          texto+=", ";
          // console.log(arr[i].length);
        }
      }
    }
  }
  return texto;
}

function mediaAlumno(matriz){
  let mazMedias = new Array(new Array(2),new Array(2));
  let media = 0;
  let alumno = [];
  // Recorre las filas
  for (let i in matriz) {
    // Recorre las columnas
    for (let y in matriz[i]) {
      // Si 'position' (la fila) es 0, recoge el nombre del alumno
      if (y==0) {
        alumno.push(matriz[i][y]);
      // Sino recoge sus valores
      }else{
        media+=matriz[i][y];
      }
      // En el último
      if (y==matriz[i].length-1) {
        // Obtiene la media
        media=media/3;
        alumno.push(media);
      }
    }
    // Guarda la media en la variable
    mazMedias.push(alumno);
  }
  // Devuelve un array con los nombres y sus notas medias
  return mazMedias;
}

console.log(mediaAlumno(mazAlumnosNotas));
