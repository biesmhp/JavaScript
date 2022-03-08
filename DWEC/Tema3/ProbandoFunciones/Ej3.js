function signo(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0){
        return "negativo";
    } else {
        return "nulo";
    }
}

let input = parseInt(prompt("Introduzca un numero"));
alert(`El numero ${input} es ${signo(input)}`);