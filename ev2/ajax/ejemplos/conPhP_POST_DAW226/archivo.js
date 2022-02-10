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

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  let datos = new FormData();
  datos.append("envioEmail",email);
  datos.append("envioContra1",pass1);
  datos.append("envioContra2",pass2);
  console.log(datos);

  xhr.open("POST", "index.php", true);

  // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // xhr.setRequestHeader("Content-length", datos.length);
  // xhr.setRequestHeader("Connection", "close");

  xhr.send(datos);

  xhr.onreadystatechange = muestracontenido;
}

function muestracontenido() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let textoPhp = xhr.responseText;
    document.querySelector("#visRespuesta").innerHTML = textoPhp;
  }
}
