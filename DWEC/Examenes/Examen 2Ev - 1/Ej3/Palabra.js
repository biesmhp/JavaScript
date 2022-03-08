function Palabra(palabra, puntos) {
    this.palabra = palabra;
    this.puntos = puntos;
    this.calculo = calculo;
}

function calculo() {
    let puntuacion = 0;
    const vocales = Array("a", "e", "i", "o", "u");
    const letrasEspeciales = Array("z", "w", "k");
    for (const letra of this.palabra) {
        let consonante = true;
        for (const vocal of vocales) {
            if (letra === vocal) {
                puntuacion++;
                consonante = false;
                break;
            }
        }
        for (const letraEspecial of letrasEspeciales) {
            if (letra === letraEspecial) {
                puntuacion += 3;
                consonante = false;
                break;
            }
        }
        if (consonante) {
            puntuacion += 2;
        }
    }
    this.puntos = puntuacion;
}