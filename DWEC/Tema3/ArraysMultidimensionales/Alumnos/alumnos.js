addEventListener('load', inicio, false);

function inicio() {
    let alumnos = Array(
        ["Ernesto", 10, 2, 6],
        ["Luisa", 1, 4, 6],
        ["Javier", 9, 6, 6],
        ["Maria", 3, 2, 6],
        ["Julián", 9, 2, 9],
        ["Natividad", 3, 5, 8],
        ["Lorena", 9, 1, 1],
        ["Carolina", 7, 7, 6]
    );
    /* VISUALIZAR ARRAY */
    alert(`VISUALIZAR ARRAY:\n${visualizarNotasAlumnos(alumnos)}`);
    /* MEDIAS ALUMNOS */
    alert(`Media Alumnos:\n${mediaAlumno(alumnos).join("\n")}`);
    /* MEDIAS EVALUACIONES */
    alert(`Media Evaluaciones:\n${mediaEval(alumnos).join("\n")}`);
    /* INICIALIZACION HTML */
    let nombreInput = document.getElementById("inputNombre");
    let mediaAlumnoBoton = document.getElementById("botonMediaAlumno");
    let textArea = document.getElementById("area");
    mediaAlumnoBoton.addEventListener("click", function () {
        let nombre, nota;
        [nombre, nota] = getNotaAlumno(alumnos, nombreInput.value, mediaAlumno(alumnos));
        textArea.value = `${nombre}: ${nota}`;
    }, false);
    /* MAYOR Y MENOR */
    let mayor, menor;
    [mayor, menor] = getMaxMin(mediaAlumno(alumnos));
    alert(`Mayor y menor:\nEl mayor es ${mayor} y el menor es ${menor}`);
}

function visualizarNotasAlumnos(alumnos) {
    let texto = "";
    for (const alumno of alumnos) {
        texto += `${alumno.join("-")}\n`;
    }
    return texto;
}

function mediaAlumno(alumnos) {
    let mediaArray = [];
    for (let i = 0; i < alumnos.length; i++) {
        let suma = 0;
        for (let j = 1; j < alumnos[i].length; j++) {
            suma += alumnos[i][j];
        }
        mediaArray[i] = parseFloat((suma / (alumnos[i].length-1)).toFixed(2));
    }
    return mediaArray;
}

function mediaEval(alumnos) {
    let mediaEvaluacion = Array();
    let fila = 0;
    for (let i = 0; i < alumnos[fila].length-1; i++) {
        let suma = 0;
        for (let j = 0; j < alumnos.length; j++) {
            suma += alumnos[j][i+1];
        }
        fila++;
        mediaEvaluacion[i] = parseFloat((suma / (alumnos.length)).toFixed(2));
    }
    return mediaEvaluacion;
}

function getNotaAlumno(alumnos, nombreAlumno, mediaArray) {
    let index = 0;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i][0] === nombreAlumno) {
            index = i;
            break;
        }
    }
    return [alumnos[index][0], mediaArray[index]];
}

function getMaxMin(mediaArray) {
    mediaArray.sort(function(a, b) {
        return b - a;
    });
    return [mediaArray[0], mediaArray[mediaArray.length-1]];
}

function eliminarSuspensos(alumnos) {

}
