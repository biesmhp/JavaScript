let contraseña = "suarez";
let input = "";
do {
    input = (prompt("PREGUNTA DE SEGURIDAD\nIntroduzca el apellido del primer presidente de la democracia:"));
    if (input != contraseña) {
        alert("Respuesta incorrecta, vuelva a intentarlo.")
    } else {
        alert("Respuesta correcta.")
    }
} while (input != contraseña);