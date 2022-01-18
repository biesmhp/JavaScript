addEventListener('load',inicio,false);

function inicio() {
  // var el = document.getElementById("pPrueba");
  // Botones del HTML
  btnEvent = document.getElementById('btnGetAttribute');
  btnEvent.addEventListener('click',fGetAttribute,false);

  btnEvent = document.getElementById('btnSetAttribute');
  btnEvent.addEventListener('click',fSetAttribute,false);
}

function fGetAttribute() {
  var el = document.getElementById("pPrueba");
  console.log(el.getAttribute("title"));
  // console.log("debug1");
}

function fSetAttribute() {
  var el = document.getElementById("pPrueba");
  var nuevoContenido = prompt("Introduce el nuevo valor");
  el.setAttribute("title",nuevoContenido);
}
