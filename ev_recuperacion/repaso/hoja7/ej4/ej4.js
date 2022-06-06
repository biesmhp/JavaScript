addEventListener('load',inicio,false)


function inicio() {
  let hab1 = new Habitacion(5)

  let evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function () {
    let fEntrada = document.querySelector("#inpFechaEntrada").value
    let fSalida = document.querySelector("#inpFechaSalida").value

    let costeNDias = undefined
    costeNDias = hab1.calcularImporte(fEntrada,fSalida)
    console.log(costeNDias)
    costeNDias = hab1.calcularImporte(8)
    console.log(costeNDias)
  },false)
}


class Habitacion {
  constructor(nHabitacion) {
    this.numHabitacion = nHabitacion
    this.estado = false
    this.dateEntrada = 0
    this.dateSalida = 0
    this.dni = 0
  }

  // Devuelve el coste de la estancia
  calcularImporte() {
    let precioNoche = 30
    // Si solo tiene un argumento y es un número
    if (arguments.length == 1 && typeof(arguments[0]) == 'number') {
      console.log("Has introducido el número de días");
      let nDias = arguments[0]
      return nDias*precioNoche
    } else if (arguments.length == 2 && typeof(arguments[0]) == 'string' && typeof(arguments[1]) == 'string') {
      console.log("Has introducido una fecha de entrada y otra de salida");
      let fEntrada = new Date(arguments[0])
      let fSalida = new Date(arguments[1])
      let nDias = daysDiff(fEntrada,fSalida)
      return [nDias*precioNoche,nDias]
    } else {
      return false
    }
  }

  toString() {
    return `Habitación: ${this.numHabitacion}, estado: ${this.estado ? "ocupada" : "libre"}`
  }
}

function daysDiff(date1,date2) {
  //calculate time difference
  let time_difference = date2.getTime() - date1.getTime();
  //calculate days difference by dividing total milliseconds in a day
  let days_difference = time_difference / (1000 * 60 * 60 * 24);
  return days_difference
}
