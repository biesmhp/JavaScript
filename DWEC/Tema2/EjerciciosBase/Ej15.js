let passName = "adolfo";
let passSurname = "suarez";
let contraseña = passName + " " + passSurname;
let input = "";
do {
    input = (prompt("PREGUNTA DE SEGURIDAD\n¿Cual fue el primer presidente de la democracia?"));
    if (input == passName) {
        alert("Te falta el apellido");
    } else if (input == passSurname) {
        alert("Te falta el nombre");
    } else if (input == contraseña) {
        alert("Correcto");
    } else {
        alert("ERROR. Intentelo de nuevo");
    }
} while (input != contraseña);