addEventListener('load',inicio,false);

function inicio(){
  // Evento para marcar todos los inputs
  inputForm=document.getElementsByTagName('input')[0];
  inputForm.addEventListener('click',marcarTodos,false);

  // Obtener el número de opciones para el formulario
  do{
    var aux = true;
    var nOpciones = prompt("¿Cuantas opciones quieres?");
    if (!isNaN(nOpciones)) {
      // alert("entra");
      aux = false;
    } else {
      // alert("NO entra");
      aux = true;
    }
  }while(aux)

  crearOpciones(nOpciones);

  // Seleccionamos todas las opciones
  inputForm=document.querySelectorAll(".valorOpt");
  // Damos eventos a cada opción
  for (var i = 0; i < inputForm.length; i++) {
    // Mostrar opción seleccionada con un ALERT
    inputForm[i].addEventListener('click',function (e) {
      seccionM(e.target.value);
    },false);
  }

  // Seleccionamos todas las cajas de opciones
  inputForm=document.querySelectorAll(".cajaOpcion");
  // Colorear las opciones por las que pasamos
  for (var i = 0; i < inputForm.length; i++) {
    inputForm[i].addEventListener('mouseenter',function (e) {
      e.target.style.color = "red";
      e.target.style.border = "solid";
      e.target.style.borderWidth = "thin";
    },false);
    inputForm[i].addEventListener('mouseleave',function (e) {
      e.target.style.color = "black";
      e.target.style.border = "none";
    },false);
  }

  // Seleccionamos el boton de enviar
  inputForm=document.querySelector("#btnEnviar");
  console.log(inputForm);
  inputForm.addEventListener('click',respuesta,false);
}

function marcarTodos(){
  let checkList = document.getElementsByTagName('input');
  if (checkList[0].checked==true) {
    for (var position in checkList) {
      checkList[position].checked = true;
    }
  }else{
    for (var position in checkList) {
      checkList[position].checked = false;
    }
  }
}

function crearOpciones(numEntero) {
  // Sumamos 1 al valor para mostrar opciones empezando desde el 1 en lugar del 0
  var nEntero = parseInt(numEntero)+1;
  if (nEntero>10) {
    nEntero = 11;
  }else if(nEntero<=0){
    nEntero = 3;
  }
  // Obtenemos el formulario
  let formularioCaja = document.getElementById("campo1");
  // Creamos el estilo del botón de enviar
  let enviar = document.createElement("input");
  enviar.type = "button";
  enviar.id = "btnEnviar";
  enviar.value = "Enviar";
  // Añadimos un número de opciones según convenga
  for (var i = 1; i < nEntero; i++) {
    // Creamos la caja de la opción
    let contenedor = document.createElement("div");
    contenedor.className = "cajaOpcion";
    // Generamos valores únicos para cada opción y caja
    contenedor.innerText = "Opt"+i;
    contenedor.id = "divId"+i;
    // Creamos el estilo de las opciones
    let opcion = document.createElement("input");
    opcion.type = "checkbox";
    opcion.name = "seleccionador";
    opcion.className = "valorOpt";
    opcion.value = "OPT"+i;
    // Añadimos la caja al HTML
    formularioCaja.appendChild(contenedor).appendChild(opcion);
    // console.log("Genera la opción"+i);
  }
  // Añadimos el botón de enviar al final
  document.getElementById("campo1").appendChild(enviar);
}

// Función para escribir las respuestas
function seccionM(texto) {
  let cajaDeMensajes = document.getElementById("seccionMensajes");
  cajaDeMensajes.innerText = texto;
}

// Función para el apartado F
function respuesta() {
  if (false) {

  }else{
    let todasLasOpciones = "Todas";
    seccionM(todasLasOpciones);
  }

}
