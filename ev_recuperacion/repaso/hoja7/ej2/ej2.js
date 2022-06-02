addEventListener('load',inicio,false)

let arrNumeros = [9,2,4,5,6,7,7,8,4,3,3,5,7]

function inicio() {
  mostrar(arrNumeros.join(""),"#visualizado1")

  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function () {
    let inicio = document.querySelector("#inpInicio").value
    let fin = document.querySelector("#inpFinal").value
    let [media,inicial,final] = mediaN(arrNumeros,inicio,fin)
    mostrar(`Empezando por la posición ${inicial} hasta la posición ${final}, la media es: ${media}`,"#visualizado2")
  },false)
}

function mediaN(arr,inicial,final) {
  if (inicial<0 || inicial>=final || inicial > arr.length) {
    inicial = 0
  }
  if (final >= arr.length || final <= inicial) {
    final = arr.length-1
  }
  let sum = arr.reduce((total,elemento,indice) => (indice >= inicial && indice <= final) ? total+elemento : total+0, 0)
  // Para calcular la media, dividimos elr esultado entre el número de participantes, y sabemos que empiezan en 'inicial' y acaban en 'final'
  // Ejemplo: 1+2+3 = 6, 6 es la suma total. Los participantes son 3 números, así que su media sería 6/3 = 2. La media es 2
  // En nuestro ejercicio para saber el número de participantes basta con restar la posicion 'final' al 'inicial', y sumarle 1
  return [sum/(final-inicial+1),inicial,final]
}

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
