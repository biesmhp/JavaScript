let condicion = false;
do {
    let input = parseInt(prompt("¿Cuanto vale 15 + 15?"));
    condicion = false;
    let respuesta = input == 30 ? "Correcto" : "Incorrecto";
    alert(respuesta);
    if (respuesta == "Incorrecto") {
        condicion = confirm("¿Quieres intentarlo otra vez?");
    }
} while (condicion);




