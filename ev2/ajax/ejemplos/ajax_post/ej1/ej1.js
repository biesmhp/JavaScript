addEventListener('load',inicio,false);
var xhr;
function inicio() {
  let btnEnviar = document.querySelector("[name='btnEnviar']");
  btnEnviar.addEventListener('click',funcionX,false);
}

function funcionX() {
  let nombre = document.querySelector("[name=inpNombre]").value;
  let edad = document.querySelector("[name=inpEdad]").value;
  let dni = document.querySelector("[name=inpDNI]").value;
  let genero = document.querySelector("[name=inpGenero]").value;
  let peso = document.querySelector("[name=inpPeso]").value;
  let altura = document.querySelector("[name=inpAltura]").value;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  let datos = new FormData();
  datos.append("nombre",nombre);
  datos.append("edad",edad);
  datos.append("dni",dni);
  datos.append("genero",genero);
  datos.append("peso",peso);
  datos.append("altura",altura);
  // console.log(datos);

  xhr.open("post", "pagina1.php", true);
  xhr.send(datos);

  xhr.onreadystatechange = muestracontenido;
}

function muestracontenido() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let textoPhp = xhr.responseText;
    document.querySelector("#visRespuesta").innerHTML = textoPhp;
  }
}
