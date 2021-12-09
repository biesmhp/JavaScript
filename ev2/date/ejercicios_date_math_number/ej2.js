addEventListener('load',inicio,false);

function inicio(){
  // Extraemos los datos
  fechaPrincipal = document.getElementById('inputFechaPrincipal');
  fechaSecundaria = document.getElementById('inputFechaSecundaria');

  btnForm=document.getElementById('btnDiferencia');
  btnForm.addEventListener('click',calcularDiferencia,false);

  btnForm=document.getElementById('btnEdad');
  btnForm.addEventListener('click',calcularEdad,false);
}

// Parte 1 del EJERCICIO
// Obtener la diferecia
function  calcularDiferencia(){
  dateP = Date.parse(fechaPrincipal.value);
  dateS = Date.parse(fechaSecundaria.value);
  let res = dateDiff(dateP,dateS);
  console.log("Días: "+res[1]+" y en Minutos: "+res[2]);
}
// Obetener diferencia en días y la diferencia en minutos
function dateDiff(date1, date2) {
    var datediff = date1 - date2; //guarda la diferencia en milisegundos
    let dias = Math.abs((datediff / 86400000)); //Convierte los milisegundos en días
    let minutos = Math.abs((datediff / 60000)); //Convierte los milisegundos en minutos
    let annos = Math.abs((datediff / 31536000000)); //Convierte los milisegundos en años
    return [annos,dias,minutos];
}

// Parte 2 del EJERCICIO
function calcularEdad(){
  dateP = Date.parse(fechaPrincipal.value);
  dateS = Date.parse(fechaSecundaria.value);
  let res = dateDiff(dateP,dateS);
  console.log("Años: "+res[0]);
}
