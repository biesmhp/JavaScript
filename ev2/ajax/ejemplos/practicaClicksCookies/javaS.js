addEventListener('load',inicio,false);
function inicio() {
  btnClikar = document.querySelector("#btnClick")
  var contador = 1;
  btnClikar.addEventListener('click',function () {
    if (document.cookie) {
      contador = document.querySelector("#visClicks").value = getCookie("contador");
      setCookie("contador",parseInt(contador)+1,3);
      document.querySelector("#visClicks").value = contador;
    } else {
      setCookie("contador",1,3);
      document.querySelector("#visClicks").value = getCookie("contador");
    }
  },false)
  // Al utilizar Cookies se guardan en local durante el tiempo establecido, y no puedes manejarlas por sesión, ver: localStorage
  btnResetear = document.querySelector("#btnReset")
  btnResetear.addEventListener('click',function () {
    contador = 0;
    document.querySelector("#visClicks").value = contador;
  },false)
}

function getAllCookies() {
  console.log(document.cookie)
}

function getCookie(nombre) {
  var lista = document.cookie.split(";");
  for (i in lista) {
      var busca = lista[i].search(nombre);
      if (busca > -1) {
          micookie = lista[i]
      }
  }
  var igual = micookie.indexOf("=");
  var valor = micookie.substring(igual + 1);
  return valor;
}

// Cookie name, cookie value, cookie expire in days
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
