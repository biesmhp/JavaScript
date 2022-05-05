// import ClienteBanco from "./ClienteBanco.class";
addEventListener('load',inicio,false)

function inicio() {
  let arrClientesBanco = rellenarClientesBanco()
  rellenarSel(arrClientesBanco)

  // Mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    console.log(arrClientesBanco);
    tablaClientes(arrClientesBanco)
    //mostrar(arrClientesBanco,"#visualizado")
  },false)

  // Añadir cuenta
  evento = document.querySelector("#btnAddCuenta")
  evento.addEventListener('click',function (e) {
    let nombre = document.querySelector("#inpNombre").value
    let repetido = arrClientesBanco.some(objeto => objeto.nombre.toLowerCase() == nombre.toLowerCase())
    if (!repetido) {
      let cliente = new ClienteBanco(nombre)
      arrClientesBanco.push(cliente)
      mostrar('',"#visualizado");
    } else {
      mostrar('Nombre de cliente repetido',"#visualizado");
    }
    rellenarSel(arrClientesBanco)
  },false)

  // Ingresar
  evento = document.querySelector("#btnIngresar")
  evento.addEventListener('click',function (e) {
    let cliente = document.querySelector("#selClientes").value
    let cantidad = document.querySelector("#inpCantidad").value
    cantidad = isNaN(cantidad) ? 0 : cantidad
    let filtrado = arrClientesBanco.findIndex(objeto => objeto.nombre.toLowerCase() == cliente.toLowerCase())
    // Debemos verificar que 'filtrado' ha obtenido un resultado válido, de no ser así devuelve -1
    if (filtrado != -1) {
      arrClientesBanco[filtrado].ingreso(cantidad)
      mostrar('',"#visualizado");
    }
    // mostrar(arrClientesBanco,"#visualizado")
  },false)

  // Retirar
  evento = document.querySelector("#btnRetirar")
  evento.addEventListener('click',function (e) {
    let cliente = document.querySelector("#selClientes").value
    let cantidad = document.querySelector("#inpCantidad").value
    cantidad = isNaN(cantidad) ? 0 : cantidad
    let filtrado = arrClientesBanco.findIndex(objeto => objeto.nombre.toLowerCase() == cliente.toLowerCase())
    // Debemos verificar que 'filtrado' ha obtenido un resultado válido, de no ser así devuelve -1
    if (filtrado != -1) {
      arrClientesBanco[filtrado].retirada(cantidad)
      mostrar('',"#visualizado");
    }
    // mostrar(arrClientesBanco,"#visualizado")
  },false)

  // Intereses
  evento = document.querySelector("#btnInteres")
  evento.addEventListener('click',function (e) {
    arrClientesBanco.forEach(objeto => objeto.saldo > 30000 ? objeto.saldo = objeto.saldo + objeto.saldo * 0.1 : false)
  },false)

  // Penalizaciones
  evento = document.querySelector("#btnPenalizacion")
  evento.addEventListener('click',function (e) {
    arrClientesBanco.forEach(objeto => objeto.saldo < 0 ? objeto.saldo = objeto.saldo - objeto.saldo * 0.05 : false)
  },false)
}

// Rellenar select con los clientes
function rellenarSel(arrClientesBanco) {
  let vis = ``
  for (let objeto of arrClientesBanco) {
    vis += `<option value=${objeto.nombre}>${objeto.nombre}</option>`
  }
  mostrar(vis,"#selClientes")
}

/*
** @param {Array}
*/
function tablaClientes(arrClientesBanco) {
  // Eliminamos la tabla anterior si la hubiese
  let nodo = document.querySelector("#tablaVis")
  let child = nodo.lastElementChild
  while (child) {
    nodo.removeChild(child)
    child = nodo.lastElementChild
  }
  // Generamos la nueva tabla
  let tabla = document.createElement("table")
  // Cabecera de la tabla
  let cabeceraTabla = document.createElement("thead")
  cabeceraTabla.setAttribute("class", "cabeceraTabla")
  let lineaCabecera = document.createElement("tr")
  let nombre = document.createElement("th")
  let nombreText = document.createTextNode("Nombre")
  nombre.appendChild(nombreText)
  lineaCabecera.appendChild(nombre)
  let saldo = document.createElement("th")
  let saldoText = document.createTextNode("Saldo")
  saldo.appendChild(saldoText)
  lineaCabecera.appendChild(saldo)
  cabeceraTabla.appendChild(lineaCabecera)
  // Cuerpo de la tabla
  let cuerpoTabla = document.createElement("thead")
  cuerpoTabla.setAttribute("class", "cuerpoTabla")
  // Añadimos los datos según nuestro array de objetos
  for (let objeto of arrClientesBanco) {
    let lineaCuerpo = document.createElement("tr")
    lineaCuerpo.setAttribute("class", objeto.saldo > 0 ? "acreedor" : objeto.saldo < 0 ? "deudor" : "nulo")
    let datoNombre = document.createElement("td")
    let datoNombreText = document.createTextNode(objeto.nombre)
    datoNombre.appendChild(datoNombreText)
    lineaCuerpo.appendChild(datoNombre)
    let datoSaldo = document.createElement("td")
    let datoSaldoText = document.createTextNode(objeto.saldo.toFixed(2))
    datoSaldo.appendChild(datoSaldoText)
    lineaCuerpo.appendChild(datoSaldo)
    // Añadimos los datos al cuerpo
    cuerpoTabla.appendChild(lineaCuerpo)
  }
  // Totales
  // Linea de los acreedores
  let lineaAcreedoresTotal = document.createElement("tr")
  lineaAcreedoresTotal.setAttribute("class","")
  let acreedoresTotal = document.createElement("td")
  let acreedoresTotalText = document.createTextNode("Acreedores:")
  acreedoresTotal.appendChild(acreedoresTotalText)
  lineaAcreedoresTotal.appendChild(acreedoresTotal)
  // Dato de los acreedores
  let totalA = document.createElement("td")
  let totalASum = arrClientesBanco.filter(object => object.saldo > 0).reduce((total, object) => object.saldo + total, 0).toFixed(2)
  let totalAText = document.createTextNode(totalASum)
  totalA.appendChild(totalAText)
  lineaAcreedoresTotal.appendChild(totalA)
  // Añadimos la lineaAcreedoresTotal al cuerpo
  cuerpoTabla.appendChild(lineaAcreedoresTotal)
  // Linea de los deudores
  let lineaDeudoresTotal = document.createElement("tr")
  lineaDeudoresTotal.setAttribute("class","")
  let deudoresTotal = document.createElement("td")
  let deudoresTotalText = document.createTextNode("Deudores:")
  deudoresTotal.appendChild(deudoresTotalText)
  lineaDeudoresTotal.appendChild(deudoresTotal)
  // Dato de los deudores
  let totalD = document.createElement("td")
  let totalDSum = arrClientesBanco.filter(object => object.saldo < 0).reduce((total, object) => object.saldo + total, 0).toFixed(2)
  let totalDText = document.createTextNode(totalDSum)
  totalD.appendChild(totalDText)
  lineaDeudoresTotal.appendChild(totalD)
  // Añadimos la lineaDeudoresTotal al cuerpo
  cuerpoTabla.appendChild(lineaDeudoresTotal)
  // Añadimos la cabecera y el cuerpo a la tabla
  tabla.appendChild(cabeceraTabla)
  tabla.appendChild(cuerpoTabla)
  return document.querySelector("#tablaVis").appendChild(tabla)
}

function rellenarClientesBanco() {
  let arrClientesBanco = []
  let cliente = new ClienteBanco("Ejemplo")
  arrClientesBanco.push(cliente)
  return arrClientesBanco
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  // console.log(texto);
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = ''
    for (var i = 0; i < texto.length; i++) {
      document.querySelector(objetivo).innerText += `${texto[i]}\n`;
    }
  }else{
    document.querySelector(objetivo).innerHTML = texto;
  }
}


// La clase (dentro del mismo JS por bloqueo debido a CORS)
class ClienteBanco {
  constructor(nombre) {
    this.nCuenta = Math.floor(Math.random()*(9999999999-1000000000)+1000000000)
    this.nombre = nombre
    this.saldo = 0
  }

  ingreso (valor) {
    if (valor > 0) {
      this.saldo = this.saldo+parseInt(valor)
    }
    return this.saldo
  }

  retirada (valor) {
    if (valor > 0) {
      this.saldo = this.saldo-valor
    }
    return this.saldo
  }

  ver() {
    return `Número de cuenta: ${this.nCuenta}\n Nombre: ${this.nombre}, Saldo restante: ${this.saldo}\n\n`
  }

  toString() {
    return this.ver()
  }
}
