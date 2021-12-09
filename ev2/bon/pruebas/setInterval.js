var contador = 0;
function contar(){
  contador++;
}
tempo = setInterval(contar, 1000);
function parar(){
  clearInterval(tempo);
  alert("Has tardado "+contador+" segundos");
}
