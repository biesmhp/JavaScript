var horaCompleta = new Date();
console.log("Hora completa: "+horaCompleta);

var diaMes = horaCompleta.getDate();
console.log("Día del mes: "+diaMes);

var diaSemana = horaCompleta.getDay();
console.log("Día de la semana: "+diaSemana);

var mes = horaCompleta.getMonth();
console.log("Mes: "+parseInt(mes+1));

var anno = horaCompleta.getFullYear();
console.log("Año: "+anno);

var fechaFormateada = horaCompleta.toLocaleDateString();
console.log(fechaFormateada);

//La semana
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var formatoSinComa = weekday[diaSemana]+" "+fechaFormateada;
console.log("Fecha: "+formatoSinComa);

//El mes
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var formatoComa = weekday[diaSemana]+", "+diaMes+" de "+month[mes]+" de "+anno;
console.log("Fecha: "+formatoComa);
