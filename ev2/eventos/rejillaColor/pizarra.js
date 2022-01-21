addEventListener('load',inicio,false);

  function inicio() {
    // Tu area de dibujo
    areaDibujo = document.getElementById("zonaDibujo");

    // Eventos
    btnEvent = document.getElementById('btnCrear');
    btnEvent.addEventListener('click',intermediate,false);
    btnEvent = document.getElementById("inpRejilla");
    btnEvent.addEventListener("click",rejillar,false);
    btnEvent = document.getElementById("btnBorrar");
    btnEvent.addEventListener("click",borrado,false);
  }

  function intermediate() {
    let ancho = document.getElementById("inpAncho").value; // Numero de casillas
    crearCeldas(ancho);
  }

  function crearCeldas(nCeldas) {
    document.getElementById("zonaDibujo").innerHTML = '';
    for (let i = 0; i < nCeldas; i++) {
        for (let j = 0; j < nCeldas; j++) {
          // Creamos las celdas
          let celda = document.createElement("div");
          // Con esto le damos una clase de nombre "celda"
          celda.className = "celda";
          // Las dimensiones de las celdas se generarán de forma dinámica en función del tamaño del #zonaDibujo definido como areaDibujo en inicio()
          // Si el modo rejilla está activado se crean las casillas con borde y el tamaño reducido para que entre el borde, sino se crean las casillas con 1px de margen
          let rejilla = document.getElementById("inpRejilla").checked;
          if (rejilla) {
            celda.style.borderStyle = "solid";
            celda.style.width = `${(areaDibujo.clientWidth - 2*nCeldas - 1) / nCeldas}px`;
            celda.style.height = `${(areaDibujo.clientHeight - 2*nCeldas - 1) / nCeldas}px`;
          } else {
            celda.style.width = `${(areaDibujo.clientWidth - 1) / nCeldas}px`;
            celda.style.height = `${(areaDibujo.clientHeight - 1) / nCeldas}px`;
          }

          // Mostrar el número de celda
          // celda.innerText = (i * nCeldas) + j;

          // Añadimos eventos
          // Pintar con clicks
          celda.addEventListener("click", pintar, false);
          // Pintar al mantener pulsado
          areaDibujo.addEventListener("mousedown", function () {
              celda.addEventListener("mouseover", pintar, false);
          }, false);
          // Dejar de pintar al dejar de pulsar
          areaDibujo.addEventListener("mouseup", function () {
              celda.removeEventListener("mouseover", pintar);
          }, false);

          document.getElementById("zonaDibujo").appendChild(celda);
      }
    }
  }

  function pintar() {
    if (!document.getElementById("inpMode").checked) {
      this.style.backgroundColor = document.getElementById("inpColor").value;
    } else {
      this.style.backgroundColor = "white";
    }

  }

  function rejillar() {
    let ancho = document.getElementById("inpAncho").value; // Numero de casillas
    let celdas = document.getElementsByClassName("celda");
    // A la vez que añade el borde modifica las dimensiones de la celda para que quepa con el nuevo borde o elimine el espacio extra si quita el borde
    let rejilla = document.getElementById("inpRejilla").checked;
    if (rejilla) {
      for (var i = 0; i < celdas.length; i++) {
        celdas.item(i).style.borderStyle = "solid";
        celdas.item(i).style.width = `${(areaDibujo.clientWidth - 2*ancho - 1) / ancho}px`;
        celdas.item(i).style.height = `${(areaDibujo.clientHeight - 2*ancho - 1) / ancho}px`;
      }
    } else {
      for (var i = 0; i < celdas.length; i++) {
        celdas.item(i).style.borderStyle = "none";
        celdas.item(i).style.width = `${(areaDibujo.clientWidth - 1) / ancho}px`;
        celdas.item(i).style.height = `${(areaDibujo.clientHeight - 1) / ancho}px`;
      }
    }
  }

  function borrado() {
    let celdas = document.getElementsByClassName("celda");
    for (var i = 0; i < celdas.length; i++) {
      celdas.item(i).style.backgroundColor = "white";
    }
  }
