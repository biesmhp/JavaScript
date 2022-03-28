addEventListener('load',inicio,false)
function inicio() {
  // Generamos el array de empleados
  let listaDeEmpleados = listaEmpleados(5)

  // Generamos la tabla con los datos
  genTabla(listaDeEmpleados)

  // Evento, cuantos cobran entre 100 y 300
  evento = document.querySelector("#btnNumEntre100y300")
  evento.addEventListener('click',function (e) {
    let listaSueldos = document.querySelectorAll("td[name=sueldo]")
    let numE = entre100y300(listaSueldos)
    mostrar(numE,"El número de empelados entre 100€ y 300€ es: ")
  },false)

  // Evento, cuantos cobran más de 300
  evento = document.querySelector("#btnNumMas300")
  evento.addEventListener('click',function (e) {
    let listaSueldos = document.querySelectorAll("td[name=sueldo]")
    let numE = mas300(listaSueldos)
    mostrar(numE,"El número de empleados que cobran más de 300€ es: ")
  },false)

  // Evento, cuantos cobran más de 300
  evento = document.querySelector("#btnNumTotal")
  evento.addEventListener('click',function (e) {
    let listaSueldos = document.querySelectorAll("td[name=sueldo]")
    let numE = gastoSueldos(listaSueldos)
    mostrar(numE+"€","El gasto total de la empresa en sueldos es: ")
  },false)

}

// Genera un array bidimensional con X numero de empleados y sus sueldos
function listaEmpleados(numEmpleados) {
  let listaDeEmpleados = []
  for (var i = 0; i < numEmpleados; i++) {
    let sueldo = Math.round(Math.random()*500)
    let nuevoEmpleado = [`empelado${i}`,sueldo]
    listaDeEmpleados.push(nuevoEmpleado)
  }
  return listaDeEmpleados
}

// Genera una tabla con los datos a partir de un array
function genTabla(arr) {
  let texto = `<tr>
    <th>Nombre</th>
    <th>Sueldo</th>
  </tr>`
  for (var i = 0; i < arr.length; i++) {
    texto += `<tr>
      <td>${arr[i][0]}</td>
      <td name='sueldo'>${arr[i][1]}€</td>
    </tr>`
  }
  // Escribe la tabla en el html
  document.querySelector("#listaEmpleados").innerHTML = texto
}

function entre100y300(listaSueldos) {
  let count = 0
  for (var i = 0; i < listaSueldos.length; i++) {
    if (parseInt(listaSueldos[i].innerText)>=100&&parseInt(listaSueldos[i].innerText)<=300) {
      count++
    }
  }
  return count
}

function mas300(listaSueldos) {
  let count = 0
  for (var i = 0; i < listaSueldos.length; i++) {
    if (parseInt(listaSueldos[i].innerText)>300) {
      count++
    }
  }
  return count
}

function gastoSueldos(listaSueldos) {
  let total = 0
  for (var i = 0; i < listaSueldos.length; i++) {
    total += parseInt(listaSueldos[i].innerText)
  }
  return total
}

function mostrar(val,texto) {
  document.querySelector("#visualizado").innerHTML = `${texto} <strong>${val}</strong>`;
}
