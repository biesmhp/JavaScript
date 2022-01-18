addEventListener('load',inicio,false);

function inicio() {

  // Botones del HTML
  btnEvent = document.getElementById('btnGenerateCircles');
  btnEvent.addEventListener('click',generar,false);
}

function generar() {
  // const cuerpo = document.querySelector('body');
  // const alto = cuerpo.clientHeight;
  // const ancho = cuerpo.clientWidth;
  const alto = window.innerHeight;
  const ancho = window.innerWidth;

  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = Math.random()*alto+"px";
  div.style.left = Math.random()*ancho+"px";
  // radio del circulo
  let radio = Math.random()*200;
  div.style.width = radio+"px";
  div.style.height = radio+"px";
  div.style.borderRadius = "50%";
  div.style.background = randomColor();
  div.style.borderWidth = "thick";
  div.style.borderColor = randomColor();
  // div.innerHTML = "Hello";
  document.getElementById("main").appendChild(div);
}

function randomColor() {
  var letters = "0123456789ABCDEF";
  let color = '#';
  for (var i = 0; i < 6; i++){
   color += letters[(Math.floor(Math.random() * 16))];
  }
  return color;
}
