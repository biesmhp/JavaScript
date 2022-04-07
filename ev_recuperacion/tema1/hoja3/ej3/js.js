addEventListener('load',inicio,false)
function inicio() {
  let vector8 = vector(8)
  // Mostrar los resultados
  evento = document.querySelector("#btnMostrar")
  evento.addEventListener('click',function (e) {
    mostrar(vector8,"#visVector")
    let [total,mayores36,count50] = destructuringVector(vector8)
    mostrar(`Suma total: ${total}`,"#visTotal")
    mostrar(`Suma de los mayores de 36: ${mayores36}`,"#visTotalMayor36")
    mostrar(`Cuantos son mayores de 50: ${count50}`,"#visCountMayor50")
  },false)
}

// Recibe un array y devuelve 3 valores
function destructuringVector(arr) {
  let sum = 0
  let sumMas36 = 0
  let countMas50 = 0
  arr.forEach((item) => sum += item)
  arr.forEach((item) => (item>=36) ? sumMas36 += item : false)
  arr.forEach((item) => (item>=50) ? countMas50++ : false)
  return [sum,sumMas36,countMas50]
}

// Crea un array de números aleatorios, num==elementos
function vector(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random()*100+1))
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
