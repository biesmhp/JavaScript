addEventListener("load", inicio, false);
/* Definir Array de musica */
let arrayMusica = Array(
    new Cd_musica("Kill this love", "Blackpink", "2019"),
    new Cd_musica("The baddest", "GIDLE", "2020"),
    new Cd_musica("Danger", "BTS", "2019")
)

function inicio() {
    let textArea = document.getElementById("resultado");

    Cd_musica.prototype.precio = 0;

    asignarPrecios();

    visualizarEnTextArea(arrayMusica, textArea);

}

function visualizarEnTextArea(arrayMusica, textArea) {
    let texto = "";
    let precioTotal = 0;
    for (const cdMusica of arrayMusica) {
        texto += cdMusica.visualizacion();
        texto += " "+ cdMusica.precio + `€\n\n`;
        precioTotal += cdMusica.precio;
    }
    textArea.value = texto;
    textArea.value += `Precio Total: ${precioTotal}€`;
}

function asignarPrecios() {
    for (let i = 0; i < arrayMusica.length; i++) {
        arrayMusica[i].precio = i+5;
    }

}
