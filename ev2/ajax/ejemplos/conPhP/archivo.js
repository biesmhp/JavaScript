addEventListener('load',inicio,false);
var xhr;
function inicio() {
  let btnEnviar = document.querySelector("[name='btnEnviar']");
  btnEnviar.addEventListener('click',funcionX,false);
}

function funcionX() {
  let email = document.querySelector("#inpEmail").value;
  let pass1 = document.querySelector("#inpPass1").value;
  let pass2 = document.querySelector("#inpPass2").value;

  let ruta="index.php";
  let envio1="envioEmail="+email;
  let envio2="envioContra1="+pass1;
  let envio3="envioContra2="+pass2;
  let url=ruta+"?"+envio1+"&"+envio2+"&"+envio3;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open ('GET', url,true);
  xhr.send (null);

  xhr.onreadystatechange = muestracontenido;
}

function muestracontenido() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let textoPhp = xhr.responseText;
    alert(textoPhp);
  }
}
