let n1 = parseInt(prompt("Introduzca el primer numero"));
let n2 = parseInt(prompt("Introduzca el segundo numero"));

if (n1 > n2) {
    alert(`La suma es: ${n1 + n2} y la resta es: ${n1 - n2}`);
} else if (n1 < n2) {
    alert(`La multiplicacion es: ${n1 * n2} y la division es: ${n1 / n2}`);
} else {
    alert ("Ambos numeros son iguales");
}