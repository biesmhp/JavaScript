addEventListener('load',inicio,false);

function inicio() {
  btnEvent = document.getElementById('btnVentanaNueva');
  btnEvent.addEventListener('click',abreVentana,false);

  btnEvent = document.getElementById('btnVentanaCerrar');
  btnEvent.addEventListener('click',cierraVentana,false);

  btnEvent = document.getElementById('btnVentanaAleatoria');
  btnEvent.addEventListener('click',ventanaAleatoria,false);
}

function abreVentana() {
  let ventana = window.open("", "myWindow", "width=200, height=100");
  ventana.focus();
}

function cierraVentana() {
  window.close();
}

function ventanaAleatoria() {
  let ventana = window.open("", "myWindow", "width=200, height=100");
  ventana.moveTo(Math.random()*1000,Math.random()*1000);
  ventana.focus();
}
