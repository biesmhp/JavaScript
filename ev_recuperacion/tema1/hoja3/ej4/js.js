addEventListener('load',inicio,false)
function inicio() {
  let vectorPrimero = vector(Math.random()*10+1)
  let vectorSegundo = vector(Math.random()*10+1)
  // Mostrar los resultados
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(vectorPrimero,"#visVectorPrimero")
    mostrar(vectorSegundo,"#visVectorSegundo")
    let vector3 = sumaVectores(vectorPrimero,vectorSegundo)
    mostrar(vector3,"#visTotal")
  },false)
}

// Suma de dos vectores(arrays) con longitudes variables
function sumaVectores(vector1,vector2) {
  let vector3 = []
  if (vector1.length>=vector2.length) {
    vector3 = vector1.map((item, i) => (vector2[i]===undefined) ? item : item+vector2[i])
  }else{
    vector3 = vector2.map((item, i) => (vector1[i]===undefined) ? item : item+vector1[i])
  }
  return vector3
}

// Crea un array de números aleatorios, num==elementos
function vector(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random()*50+1))
  }
  return arr
}

// Visualiza la respuesta en el HTML
function mostrar(texto,objetivo) {
  if (document.querySelector(objetivo).tagName=="INPUT") {
    document.querySelector(objetivo).value = texto;
  }else if (Array.isArray(texto)) {
    document.querySelector(objetivo).innerText = texto;
  }else{
    document.querySelector(objetivo).innerHTML = texto;
  }
}
