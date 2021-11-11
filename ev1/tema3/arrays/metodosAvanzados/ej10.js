addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementById('btnOrdenar');
  inputForm.addEventListener('click',ordenar,false);
}

function ordenar(){
  const ciudades = ["Zaragoza", "Ávila", "madrid", "Barcelona"];
  document.getElementById('visArray').innerHTML = ciudades;
}
