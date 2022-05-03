// import ClienteBanco from "./ClienteBanco.class";
addEventListener('load',inicio,false)

function inicio() {
  let arrClientesBanco = rellenarClientesBanco()

  // Mostrar
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    console.log(arrClientesBanco);
    mostrar(arrClientesBanco,"#visualizado")
    let vis = ``
    vis += `
    <thead>
      <th>Nombre</th>
      <th>Saldo</th>
    </thead>
    <tbody>
    `
    arrClientesBanco.forEach(objeto =>
      vis += `
      <tr class=${objeto.saldo > 0 ? "acreedor" : "deudor"}>
        <td>${objeto.nombre}</td>
        <td>${objeto.saldo}</td>
      </tr>
      `
    )
    vis += `</tbody>`
    mostrar(vis,"#tablaVis")
  },false)

  // Añadir cuenta
  evento = document.querySelector("#btnAddCuenta")
  evento.addEventListener('click',function (e) {
    let nombre = document.querySelector("#inpNombre").value
    if (arrClientesBanco.map(objeto => objeto.nombre == nombre).length < 1) {
      let cliente = new ClienteBanco(document.querySelector("#inpNombre").value)
      arrClientesBanco.push(cliente)
    } else {
      console.log('Nombre de cliente repetido');
    }
  },false)

  // Ingresar
  evento = document.querySelector("#btnIngresar")
  evento.addEventListener('click',function (e) {
    let cliente = document.querySelector("#inpNombre").value
    let cantidad = document.querySelector("#inpCantidad").value
    cantidad = isNaN(cantidad) ? 0 : cantidad
    let filtrado = arrClientesBanco.findIndex(objeto => objeto.nombre == cliente)
    if (filtrado != undefined) {
      arrClientesBanco[filtrado].ingreso(cantidad)
    }
    mostrar(arrClientesBanco,"#visualizado")
  },false)

  // Retirar
  evento = document.querySelector("#btnRetirar")
  evento.addEventListener('click',function (e) {
    let cliente = document.querySelector("#inpNombre").value
    let cantidad = document.querySelector("#inpCantidad").value
    cantidad = isNaN(cantidad) ? 0 : cantidad
    let filtrado = arrClientesBanco.findIndex(objeto => objeto.nombre == cliente)
    if (filtrado != undefined) {
      arrClientesBanco[filtrado].retirada(cantidad)
    }
    mostrar(arrClientesBanco,"#visualizado")
  },false)
}

function rellenarClientesBanco() {
  let arrClientesBanco = []
  let cliente = new ClienteBanco("Pedro")
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
