addEventListener('load',inicio,false);

function inicio() {
  // El objeto apalabra
  function apalabra(palabra) {
    this.palabra = palabra;
    this.puntos = calculo(this.palabra);
  }
  // Obtener los puntos que vale la palabra
  function calculo(unaPalabra) {
    var sumPuntos = 0;
    for (var i = 0; i < unaPalabra.length; i++) {
      // Si es una vocal suma 1 punto
      if (unaPalabra[i]=="a"||unaPalabra[i]=="e"||unaPalabra[i]=="i"||unaPalabra[i]=="o"||unaPalabra[i]=="u") {
        sumPuntos++;
      // Las consonantes especiales suman 3
      } else if(unaPalabra[i]=="z"||unaPalabra[i]=="w"||unaPalabra[i]=="k") {
        sumPuntos += 3;
      // El resto de consonantes suman 2
      }else{
        sumPuntos += 2;
      }
    }
    return sumPuntos;
  }
  // Obtener los puntos totales del juego
  function puntosTotales() {

  }

  // Parte A
  var arrPalabras = [];
  relleno();
  function relleno() {
    let p1 = new apalabra("sal");
    let p2 = new apalabra("gato");
    let p3 = new apalabra("perro");
    let p4 = new apalabra("cocina");
    let p5 = new apalabra("caballo");
    let p6 = new apalabra("ordenador");
    let p7 = new apalabra("armario");
    let p8 = new apalabra("altavoz");
    let p9 = new apalabra("wok");
    let p10 = new apalabra("zapato");
    arrPalabras.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10);
    // console.log(arrPalabras);
  }

  // Parte B
  var palabrita = cajitas();
  function cajitas() {
    var palabraRan = Math.floor(Math.random()*10);
    console.log(arrPalabras[palabraRan].palabra);
    var palabraJuego = arrPalabras[palabraRan].palabra;
    var cajaJuego = document.getElementById("juego");
    console.log(cajaJuego);
    for (var i = 0; i < palabraJuego.length; i++) {
      let cajita = document.createElement("input");
      cajita.size = 3;
      cajita.readonly = "true";
      cajita.id = "id"+i;
      cajaJuego.appendChild(cajita);
    }
    return palabraJuego;
  }

  // Parte C
  // No permite mayúsculass
  inputForm = document.getElementById("caracterAdivina");
  inputForm.addEventListener('keypress',function (e) {
    console.log(e);
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 209) {
      e.preventDefault();
      // console.log(e.keyCode);
      // inputForm.value = e.keyCode+32;
    } else if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 241) {
      console.log(e.keyCode);
      inputForm.value = "";
      existe(e.key);
    } else {
        e.preventDefault();
    }
  });
  function existe(letra) {
    let aux = true;
    console.log(palabrita);
    for (var i = 0; i < palabrita.length; i++) {
      if (palabrita[i]==letra) {
        console.log("existe");
        aux = false;
        document.getElementById("id"+i).value = letra;
      }
    }
    if (aux) {
      let cajita = document.getElementById("cajaFallos");
      cajita.innerText = cajita.value+letra;
      document.getElementById("numFallos").value = parseInt(document.getElementById("numFallos").value)+1;
    }
  }

  // Parte D

}
