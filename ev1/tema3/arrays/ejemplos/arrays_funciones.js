var pais = ("España");
var paises = ['España','Mauritania','Nauru','Nepal','Honduras'];
var array1 = ['Serbia','Eritrea'];
var array2 = ['Laos','Trinidad y Tovago'];

// para deletrear una palabra
function paisD(){
  for (let i = 0; i < pais.length; i++) {
    console.log(pais[i]+" - ");
  }
}
// Un array normal
function paisesArray(){
  for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]+" ");
  }
}
// Para obtener las posiciones
function paisesForIn(){
  for (let posicion in paises) {
    console.log("Posición "+posicion+": "+paises[posicion]);
  }
}
// Callback
function callBack(){
  paises.forEach(function(valor,indice,array){
    console.log("En el indice "+indice+" hay este valor: "+valor)
    }
  );
}
function arrayPush(){
  if (document.getElementById("textoAdd").value!="") {
    console.log("Longitud del array:"+paises.push(document.getElementById("textoAdd").value));
  }
  document.getElementById("textoAdd").value=null;
  document.getElementById("textoAdd").focus();
}

function arrayConcat(){
  console.log(array1.concat(array2));
}

function arrayJoin(){
  console.log(paises.join(document.getElementById("textoUnion").value));
  document.getElementById("textoUnion").value=null;
  document.getElementById("textoUnion").focus();
}
