addEventListener('load',inicio,false);
var xhr;
var xhr2;
var arrayPersonas=[];
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
  // xhr.onreadystatechange = muestracontenido;

  extraeXML();
}

function muestracontenido() {
  if (this.readyState == 4 && this.status == 200) {
    let textoPhp = this.responseText;
    document.querySelector("#visRespuesta").innerHTML = textoPhp;
  }
}

function extraeXML() {
  // Leer el xml
  if (window.XMLHttpRequest) {
    xhr2 = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr2.open("GET", "comentarios.xml", true);
  xhr2.send(null);
  xhr2.onreadystatechange = muestracontenido2;
}

function muestracontenido2() {
  if (xhr2.readyState==4 && xhr2.status==200) {
    let textoXML=xhr2.responseXML;
    let nombre=textoXML.querySelectorAll("nombre");
    let edad=textoXML.querySelectorAll("edad");
    let dni=textoXML.querySelectorAll("dni");
    let genero=textoXML.querySelectorAll("genero");
    let peso=textoXML.querySelectorAll("peso");
    let altura=textoXML.querySelectorAll("altura");
    for (let i = 0; i < nombre.length; i++) {
      let nuevaPersona=new Persona(nombre[i], edad[i], dni[i], genero[i], peso[i], altura[i]);
      arrayPersonas.push(nuevaPersona);
    }
    console.log(arrayPersonas);
  }
}
