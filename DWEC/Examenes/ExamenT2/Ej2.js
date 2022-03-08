let condicion = true;
// Comprobamos que el input es un valor numerico entre 1 y 50
do {
    var input = prompt("Introduzca un numero del 1 al 50");
    if (input <= 50 && input >= 0) {
        condicion = false;
    } else {
        alert("Error. Repita de nuevo")
    }
} while (condicion);

// Generamos la piramide

for (let i = 0; i <= input; i++) {
    for (let j = 0; j < i; j++) {
        document.write(`${j+1} `);
        
    }
    document.write("<br>");
}
