addEventListener('load',inicio,false);

function inicio() {
  let btnPulsar = document.querySelector("#btnGenerar");
  btnPulsar.addEventListener('click',generar,false);
}

function generar() {
  // Recogemos los selects
  var uInicial = document.querySelector("#selTipo1").value;
  var uConvertido = document.querySelector("#selTipo2").value;

  // Vaciamos la tabla
  // seleccionamos el padre
  const parent = document.querySelector('#tableBodyId');
  // Eliminamos sus nodos
  parent.innerHTML = '';

  generarCabeceras(uInicial,uConvertido);
  generarTabla(uInicial);
}

function generarCabeceras(uInicial,uConvertido) {
  // Creamos las cabeceras de la tabla
  // Creamos la linea TR de la cabecera de la tabla
  let nodeCabeceraTR = document.createElement("TR");
  // Creamos la columna TH de la tabla
  let nodeCabeceraTH1 = document.createElement("TH");
  nodeCabeceraTH1.id = "thInicial";
  // Creamos la columna TH de la tabla
  let nodeCabeceraTH2 = document.createElement("TH");
  nodeCabeceraTH2.id = "thRespuesta";
  // Añadimos los TH al TR
  nodeCabeceraTR.appendChild(nodeCabeceraTH1);
  nodeCabeceraTR.appendChild(nodeCabeceraTH2);

  // Añadimos el TR a la table
  document.getElementById("tableBodyId").appendChild(nodeCabeceraTR);

  // Añadimos los titulos de las columnas
  document.querySelector("#thInicial").innerText = uInicial;
  document.querySelector("#thRespuesta").innerText = uConvertido;
}

function generarTabla(uInicial) {
  for (var i = 0; i < 10; i++) {
    // Creamos la linea TR de la table
    let nodeTR = document.createElement("TR");
    // Creamos la columna TD1 de la table
    let nodeTD1 = document.createElement("TD");
    // Rellenamos la columna Inicial
    let nodeTextTD1 = document.createTextNode("Select error");
    switch (uInicial) {
      case 'binario':
        nodeTextTD1 = document.createTextNode(randomBin(8,8));
        break;
      case 'octal':
        nodeTextTD1 = document.createTextNode(randomOctal(4,5));
        break;
      case 'decimal':
        nodeTextTD1 = document.createTextNode(randomDecimal(3,5));
        break;
      case 'hexadecimal':
        nodeTextTD1 = document.createTextNode(randomHex(2,4));
        break;
      default:
        nodeTextTD1 = document.createTextNode("Select error");
    }
    nodeTD1.appendChild(nodeTextTD1);
    // Creamos la columna TD2 de la table
    let nodeTD2 = document.createElement("TD");
    let nodeTextTD2 = document.createElement("input");
    // nodeTextTD2.maxLength = 16;
    nodeTD2.appendChild(nodeTextTD2);
    // Creamos la columna TD3 de la table
    let nodeTD3 = document.createElement("TD");
    let nodeButtonTD3 = document.createElement("button");
    let nodeTextTD3 = document.createTextNode("Comprobar");
    nodeButtonTD3.appendChild(nodeTextTD3);
    nodeTD3.appendChild(nodeButtonTD3);
    // Añadimos los TD al TR
    nodeTR.appendChild(nodeTD1);
    nodeTR.appendChild(nodeTD2);
    // Botón de comprobar
    // nodeTR.appendChild(nodeTD3);
    // Añadimos el TR a la table
    document.getElementById("tableBodyId").appendChild(nodeTR);
  }
}

function randomHex(min,max) {
  let maxDigit = Math.round(Math.random()*(max-min)+min);
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, maxDigit);
}

function randomOctal(min,max) {
  let maxDigit = Math.round(Math.random()*(max-min)+min);
  let n = '';
  for (var i = 0; i < maxDigit; i++) {
    n += (Math.floor(Math.random()*8));
  }
  let num = parseInt(n.slice(0, maxDigit));
  eEgg(num);
  return num;
}

function randomDecimal(min,max) {
  let maxDigit = Math.round(Math.random()*(max-min)+min);
  let n = '';
  for (var i = 0; i < maxDigit; i++) {
    n += (Math.floor(Math.random()*10));
  }
  let num = parseInt(n.slice(0, maxDigit));
  eEgg(num);
  return num;
}

function randomBin(min,max) {
  let maxDigit = Math.round(Math.random()*(max-min)+min);
  let n = '';
  for (var i = 0; i < maxDigit; i++) {
    n += (Math.round(Math.random()));
  }
  let num = parseInt(n.slice(0, maxDigit));
  eEgg(num);
  return num;
}

function eEgg(num) {
  if (num==0) {
    alert("¡SORPRESA!, has generado un 0, y para generarlo en este programa has necesitado suerte. Enhorabuena y tomate un descanso");
  }
}

// EXTRA PARA COMPROBACIONES
// Convertidores
const BINARY = 2
const DECIMAL = 10
const HEX = 16

const ConvertBase = num => ({
  from: (baseFrom) => {
    return {
      to: (baseTo) => {
        return parseInt(num, baseFrom).toString(baseTo)
      }
    }
  }
})

// binary to decimal
function bin2dec (num) {
  return ConvertBase(num).from(BINARY).to(DECIMAL)
}

// binary to hexadecimal
function bin2hex (num) {
  return ConvertBase(num).from(BINARY).to(HEX)
}

// decimal to binary
function dec2bin (num) {
  return ConvertBase(num).from(DECIMAL).to(BINARY)
}

// decimal to hexadecimal
function dec2hex (num) {
  return ConvertBase(num).from(DECIMAL).to(HEX)
}

// hexadecimal to binary
function hex2bin (num) {
  return ConvertBase(num).from(HEX).to(BINARY)
}

// hexadecimal to decimal
function hex2dec (num) {
  return ConvertBase(num).from(HEX).to(DECIMAL)
}
