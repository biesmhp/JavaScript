addEventListener('load',inicio,false);

  function inicio() {
    // alert("debug1");
    btnEvent = document.getElementById('btnCrear');
    btnEvent.addEventListener('click',intermediate,false);
  }

  function intermediate() {
    // var ancho = prompt("Ancho de la cuadricula");
    var ancho = document.getElementById("inpAncho").value;
    // alert(ancho);
    genDivs(ancho);
  }

  function genDivs(v){
    // var v = 10;
    var e = document.getElementById("zonaDibujo"); // whatever you want to append the rows to:
    e.innerHTML = '';
    for(var i = 0; i < v; i++){
      var row = document.createElement("div");
      row.className = "row";
      for(var x = 1; x <= v; x++){
          var cell = document.createElement("div");
          cell.className = "gridsquare";
          cell.innerText = (i * v) + x;
          cell.addEventListener('mouseover',function(){
            this.style.backgroundColor = "red";
          });
          row.appendChild(cell);
      }

      e.appendChild(row);
    }
    // document.getElementById("zonaDibujo").innerText = e.innerHTML;
  }
