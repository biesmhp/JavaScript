let confirmacion = confirm("¿Quieres acceder a la pagina?");
if (confirmacion) {
    let contraseña = "hola";
    let input = "";
    do {
        input = (prompt("Introduzca una contraseña valida"));
        if (input != contraseña) {
            alert("Contraseña incorrecta, vuelva a intentarlo.")
        } else {
            alert("Contraseña correcta.")
        }
    } while (input != contraseña);
} else {
    alert("Se procederá a salir de la pagina");
}