addEventListener('load',inicio,false)
function inicio() {

  // Botón para recalcular los sueldos
  evento = document.querySelector("#btnCalcular")
  evento.addEventListener('click',function (e) {
    // Recogemos los valores en arrays
    let arrSueldo = document.querySelectorAll("input[name=sueldo]")
    let arrAntiguo = document.querySelectorAll("input[name=antiguo]")
    // Recorremos el array
    for (let i = 0; i < arrSueldo.length; i++) {
      // Ejecutamos y mostramos el resultado
      document.querySelector(`#inpSueldo${i}`).value = recalcularSueldo(parseInt(arrSueldo[i].value),parseInt(arrAntiguo[i].value))
    }
    document.querySelector("#btnCalcular").hidden = true
    // console.table(arrSueldo)
    // console.table(arrAntiguo)
  },false)

  // Mostrar array multidimensional
  evento = document.querySelector("#btnMultidimensional")
  evento.addEventListener('click',function (e) {
    // Llamo a la función mostrar del array
    mostrar(arrayMultidimensional());
  })

  // Muestra la Media
  evento = document.querySelector("#btnMedia")
  evento.addEventListener('click',function (e) {
    // Llamo a la función de la media y la muestro
    document.querySelector("#visualizado").innerHTML = calcularMedia()
  })
}

function recalcularSueldo(sueldo,antigüedad) {
  if (sueldo<500&&antigüedad>=10) {
    return sueldo+sueldo*0.20
  } else if (sueldo<500&&antigüedad<=10) {
    return sueldo+sueldo*0.05
  } else if (sueldo>=500) {
    return sueldo
  }
}

function arrayMultidimensional() {
  // Creo el array multidimensional vacío
  let arrOperarios = []
  // Recojo los valores en arrays
  let arrNombre = document.querySelectorAll("input[name=nombre]")
  let arrSueldo = document.querySelectorAll("input[name=sueldo]")
  let arrAntiguo = document.querySelectorAll("input[name=antiguo]")
  // Creo el array para 1 operario
  let arrOperario = []
  // Recorro los arrays de los inputs, convirtiendolos en un array normal y luego los añado al multidimensional
  for (var i = 0; i < arrNombre.length; i++) {
    // Array de 1 operario
    arrOperario.push(arrNombre[i].value)
    arrOperario.push(arrSueldo[i].value)
    arrOperario.push(arrAntiguo[i].value)
    // Añado cada array al multidimensional
    arrOperarios.push(arrOperario)
    // Vacio el array multidimensional
    arrOperario = []
  }
  return arrOperarios
}

function mostrar(arr) {
  let texto = `<tr>
    <th>Nombre</th>
    <th>Sueldo</th>
    <th>Antigüedad</th>
  </tr>`
  for (var i = 0; i < arr.length; i++) {
    texto += `<tr>
      <td>${arr[i][0]}</td>
      <td>${arr[i][1]}€</td>
      <td>${arr[i][2]} años</td>
    </tr>`
  }
  document.querySelector("#tableVis").hidden = false
  document.querySelector("#tableVis").innerHTML = texto
}

function calcularMedia() {
  let arrOperarios = arrayMultidimensional()
  console.log(arrOperarios);
  let media = parseInt(0)
  let count = 0
  for (var i = 0; i < arrOperarios.length; i++) {
    media += parseInt(arrOperarios[i][1])
    count++
  }
  console.log(count);
  media = media/count;
  return media;
}
