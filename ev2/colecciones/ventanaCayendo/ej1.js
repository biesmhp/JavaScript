addEventListener('load',inicio,false);

function inicio() {
  btnEvent = document.getElementById('btnAbrir');
  btnEvent.addEventListener('click',funAbrir,false);
}

function funAbrir() {
  ventanaC = window.open("","myWindow", "width=200, height=200");
  ventanaC.document.write("Me caigo");
  ventanaC.focus();
  var bucleTemporal = setInterval(function(){
    let posicion = ventanaC.screenTop;
    ventanaC.focus();
    ventanaC.moveBy(0,ventanaC.screenTop+50);
    alert(posicion+" y "+ventanaC.screenTop);
    if (ventanaC.screenTop==posicion) {
      ventanaC.close();
      clearInterval(bucleTemporal);
    }
  },1000);
}
