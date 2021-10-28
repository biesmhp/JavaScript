var paises = ['Kosovo','Saharaui','Somalilandia','Palestina'];
var numerico = ['30','55','16','9'];


function escribirPaises(){
  let listaPaises = paises.join(",");
  document.getElementById("arrayPaises").innerHTML = listaPaises;
}
function escribirNumeros(){
  let listaNumerico = numerico.join(",");
  document.getElementById("arrayPaises").innerHTML = listaNumerico;
}

function ordenadoNormalP(){
  let listaPaises = paises.sort();
  document.getElementById("arrayPaises").innerHTML = listaPaises;
}

function ordenadoNormalN(){
  let listaNumerico = numerico.sort();
  document.getElementById("arrayPaises").innerHTML = listaNumerico;
}
