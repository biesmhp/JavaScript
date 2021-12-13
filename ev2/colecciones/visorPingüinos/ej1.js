addEventListener('load',inicio,false);

function inicio() {
  contador = 0;
  btnEvent = document.getElementById('btnON');
  btnEvent.addEventListener('click',visorON,false);

  btnEvent = document.getElementById('btnOFF');
  btnEvent.addEventListener('click',visorOFF,false);

  arrImagenes = document.getElementsByClassName("imgOption");
  console.log(arrImagenes);
  for (let position in arrImagenes) {
    arrImagenes[position].addEventListener('click',function(){
      let url = this.getAttribute('src');
      // alert(url);
      window.open(url,"", "width=350, height=350");
    });
  }
}

function visorON() {
  setImage();
}

function visorOFF() {
  clearInterval(bucleTemporal);
}

function setImage() {
  // alert(contadorImagenes.length);
  bucleTemporal = setInterval(function(){
      let url = arrImagenes[contador].getAttribute('src');
      document.getElementById("visCaja").setAttribute('src',url);
      // alert(url);
      if (contador<arrImagenes.length-1) {
        // alert(contador);
        contador++;
      } else {
        // alert(contador);
        contador=0;
      }
  },1000);
}
