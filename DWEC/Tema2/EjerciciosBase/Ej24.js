let n1 = parseInt(prompt("Introduzca el primero numero"));
let n2 = parseInt(prompt("Introduzca el segundo numero"));
let operacion = prompt("Introduzca una operacion");
let resultado = 0;

if (operacion == "+") {
    resultado = n1+n2;
} else if (operacion == "-") {
    resultado = n1-n2;
} else if (operacion == "*") {
    resultado = n1*n2;
} else if (operacion == "/") {
    resultado = n1/n2;
} else {
    alert("Operacion no valida");
}
alert(`El resultado es ${resultado}`)
