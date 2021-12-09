addEventListener('load',inicio,false);

function inicio() {
  btnEvent = document.getElementById('btnVentanaNueva');
  btnEvent.addEventListener('click',abreVentana,false);

  btnEvent = document.getElementById('btnVentanaCerrar');
  btnEvent.addEventListener('click',cierraVentana,false);

  btnEvent = document.getElementById('btnVentanaAleatoria');
  btnEvent.addEventListener('click',ventanaAleatoria,false);

  btnEvent = document.getElementById('btnVentanaTamano');
  btnEvent.addEventListener('click',ventanaTamano,false);

  btnEvent = document.getElementById('btnMoverDerecha');
  btnEvent.addEventListener('click',moverDerecha,false);
}

function abreVentana() {
  ventana = window.open("", "myWindow", "width=200, height=100");
  ventana.focus();
}

function cierraVentana() {
  ventana.close();
}

function ventanaAleatoria() {
  ventana = window.open("", "myWindow", "width=200, height=100");
  ventana.moveTo(Math.random()*1000,Math.random()*1000);
  ventana.focus();
}

function ventanaTamano() {
  ventana = window.open("", "myWindow", "width=200, height=100");
  // En el ancho y alto resto las dimensiones de la ventana para que quede bien centrada
  ventana.moveTo((window.outerWidth-200)/2,(window.outerHeight-100)/2);
  ventana.document.write();
  ventana.document.write(`Alto: ${window.innerHeight}, Acho: ${window.innerWidth}`);
  ventana.focus();
}

function moverDerecha() {
  ventana.moveBy(50,0);
  ventana.focus();
}
