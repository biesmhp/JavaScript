// DAW226
addEventListener('load',inicio,false);
// Definimos variables
var numeroDeNoches, hotelElegido, ciudadElegida, tipoDeVuelo;
var costeTotal = 0;
// Tipos de hoteles
var estrellas1 = 10;var estrellas2 = 20;var estrellas3 = 30;var estrellas4 = 40;var estrellas5 = 50;

// Aqui se cargan todos los botones
function inicio(){
  // Extraemos los datos
  numeroDeNoches = parseInt(document.getElementById('nNoches'));
  hotelElegido = document.getElementById('hotel');

  ciudadElegida = parseInt(document.getElementById('ciudad'));
  tipoDeVuelo = parseInt(document.getElementById('tVuelo'));

  // Muestra al usuario el coste de la habitación
  // inputForm=document.getElementById('hotel');
  // inputForm.addEventListener('change',costeHabitacion,false);

  // Muestra al usuario el coste TOTAL del hotel
  inputForm=document.getElementById('calcularHotel');
  // inputForm.addEventListener('click',mostrarHotel,false);

  // Muestra al usuario el coste TOTAL del vuelo
  inputForm=document.getElementById('calcularVuelo');
  // inputForm.addEventListener('click',mostrarVuelo,false);

  // Muestra al usuario el coste TOTAL del alquiler de coches
  inputForm=document.getElementById('calcularCoche');
  // inputForm.addEventListener('click',mostrarCoche,false);

  // Muestra al usuario el coste TOTAL
  inputForm=document.getElementById('calcular');
  inputForm.addEventListener('click',calcularTotal,false);
}

// Visualizar el coste de la habitación
function costeHabitacion(){
  // alert(hotelElegido.value);
  // Un switch para mostrar al usuario el precio de su hotel escogido
  switch (hotelElegido.value) {
    case "estrellas0":
      document.getElementById("impTuristico").innerHTML="Sin Hotel";
      return null;
    case "estrellas1":
      document.getElementById("impTuristico").innerHTML=estrellas1+"€ la noche (más 2% en impuestos)";
      return estrellas1;
    case "estrellas2":
      document.getElementById("impTuristico").innerHTML=estrellas2+"€ la noche (más 2% en impuestos)";
      return estrellas2;
    case "estrellas3":
      document.getElementById("impTuristico").innerHTML=estrellas3+"€ la noche (más 2% en impuestos)";
      return estrellas3;
    case "estrellas4":
      document.getElementById("impTuristico").innerHTML=estrellas4+"€ la noche (más 2% en impuestos)";
      return estrellas4;
    case "estrellas5":
      document.getElementById("impTuristico").innerHTML=estrellas5+"€ la noche (más 2% en impuestos)";
      return estrellas5;
  }
}

// El coste del hotel
function coste_hotel(numNoches, precio){
  let impuesto = precio*0.2;
  // Solo aplicamos el coste del impuesto al total, no a cada habitación (no queda claro en el ejercicio)
  if (numNoches>0) {
    let aPagar = numNoches*precio+impuesto;
    return [aPagar, impuesto];
  }else{
    let aPagar = 0;
    return [aPagar, impuesto];
  }
}

function mostrarHotel(){
  let precio = costeHabitacion();
  numeroDeNoches = parseInt(document.getElementById('nNoches').value);
  let [textoHotel,textoImpuesto]=coste_hotel(numeroDeNoches, precio);
  if (!isNaN(textoHotel)&&textoHotel!=0) {
    document.getElementById("costeHotel").innerHTML=textoHotel+"€ de gastos en el hotel (incluyendo los "+textoImpuesto+"€ de impuestos)";
  }else{
    document.getElementById("costeHotel").innerHTML=0+"€";
  }
  costeTotal += parseInt(textoHotel);
}


// El coste del vuelo
function coste_avion(nombreCiudad, tipoDeVuelo){
  // Por alguna extraña razón esta función devuelve False cuando coinciden los resultados, por eso está al reves
  if(tipoDeVuelo=="soloIda"){
    aPagar = nombreCiudad;
  }else if (tipoDeVuelo=="idaVuelta") {
    aPagar = nombreCiudad-(nombreCiudad*0.10);
  } else if (tipoDeVuelo=="sinVuelo"){
    aPagar = 0;
  }
  // alert(nombreCiudad);
  if (tipoDeVuelo!="sinVuelo") {
    switch (nombreCiudad) {
      case "200":
        madridMeter.value+=1;
        break;
      case "500":
        tokioMeter.value+=1;
        break;
      case "75":
        berlinMeter.value+=1;
        break;
      case "37":
        belgicaMeter.value+=1;
        break;
    }
  }
  return aPagar;
}

function mostrarVuelo(){
  ciudadElegida = document.getElementById('ciudad').value;
  tipoDeVuelo = document.reserva.tVuelo.value;
  // alert(tipoDeVuelo);
  let aPagar=coste_avion(ciudadElegida,tipoDeVuelo)+"€ de gastos en el vuelo";
  document.getElementById("costeVuelo").innerHTML=aPagar;
  costeTotal += parseInt(aPagar);
}

// El coste del coche
function coste_alquiler_coche(numeroDeNoches){
  if (numeroDeNoches>=7) {
    return numeroDeNoches*40-50;
  } else if(numeroDeNoches>=3) {
    return numeroDeNoches*40-20;
  }else{
    return numeroDeNoches*40;
  }
}

function mostrarCoche(){
  if (document.reserva.alquiler.value=="alquilado") {
    numeroDeNoches = parseInt(document.getElementById('nNoches').value);
    let aPagar = coste_alquiler_coche(numeroDeNoches)+"€ de gastos en el alquiler de coche";
    document.getElementById("costeCoche").innerHTML=aPagar;
    costeTotal += parseInt(aPagar);
  }else{
    let aPagar = coste_alquiler_coche(0)+"€";
    document.getElementById("costeCoche").innerHTML=aPagar;
    costeTotal += parseInt(aPagar);
  }
}

function calcularTotal(){
  mostrarCoche(), mostrarHotel(), mostrarVuelo();
  document.getElementById("total").innerHTML = costeTotal+"€ en TOTAL";
  costeTotal = 0;
}
