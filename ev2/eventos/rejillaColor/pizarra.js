addEventListener('load',inicio,false);

function inicio() {
  // alert("debug1");
  btnEvent = document.getElementById('btnCrear');
  btnEvent.addEventListener('click',crear,false);
}

function crear() {
  rejilla = document.getElementById("zonaDibujo");
  var lColumna = 10;
  var lFila = 10;
  for (var i = 0; i < lColumna; i++) {
    // for (var j = 0; j < lFila; j++) {
    //   let divF = document.createElement('div');
    //   rejilla.appendChild(divF);
    // }
    let divC = document.createElement('div');
    rejilla.appendChild(divC);
    // rejilla.appendChild(div);
  }
}
