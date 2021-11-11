addEventListener('load',inicio,false);

function inicio(){
  inputForm=document.getElementsByTagName('input')[0];
  inputForm.addEventListener('click',marcarTodos,false);
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
