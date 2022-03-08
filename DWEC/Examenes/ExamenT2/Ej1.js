let condicion = true;
do {
    let input = prompt("Introduzca un numero");
    
    if (input === null){
        // Comprobacion si cancelamos el prompt para salir del bucle
        condicion = false;
    
    } else if (!isNaN(input)) {// Comprobación si el input es numerico

        // Estructura de evaluacion del input con SWITCH
        switch (true) {
            case input <= 10 && input >= 0:
                alert(`El número ${input} está comprendido
            Entre 0 y 10`);
                break;
            case input > 10 && input <= 20:
                document.write(`El número ${input} está comprendido
            Entre 10 y 20`);
                break;
            case input < 0 || input > 100:
                console.log(`¡Demasiado poco o mucho!`);
                break;

            default:
                alert(`NINGUNO`);
                break;
        }
        //Cambiar condicion para salir del bucle
        condicion = false;
    } else {
        alert("Error, vuelva a introducir los datos");
    }
} while (condicion);


