addEventListener("main", inicio, false);

function inicio() {
    Vaca.prototype = new Animal();
    Tigre.prototype = new Animal();
    let arrayVaca = Array();
    let arrayTigre = Array();
    let nombre = document.getElementById("nombre");
    let especie = document.getElementById("especie");
    let nPatas = document.getElementById("nPatas");
    let tieneCola = document.getElementById("tieneCola");
    let crearBtn = document.getElementById("crearAnimal-btn");
    let resultado = document.getElementById("resultado");
    crearBtn.addEventListener("click", function () {
        if (especie.value === "vaca") {
            let vaca = new Vaca();
            vaca.nombre = nombre.value;
            vaca.especie = especie.value;
            vaca.nPatas = nPatas.value;
            vaca.tieneCola = tieneCola.value;
            arrayVaca.push(vaca);
            resultado.value = mostrarArray(arrayVaca, arrayTigre);
        } else {
            let tigre = new Tigre();
            tigre.nombre = nombre.value;
            tigre.especie = especie.value;
            tigre.nPatas = nPatas.value;
            tigre.tieneCola = tieneCola.value;
            arrayTigre.push(tigre);
            resultado.value = mostrarArray(arrayVaca, arrayTigre);
        }
    }, false);
}

function mostrarArray(arrayVaca, arrayTigre) {
    let string = `Vacas:\n`;
    for (const vaca of arrayVaca) {
        string += `${vaca.visualizar()} \n`;
    }
    string += `------\nTigres:\n`;
    for (const tigre of arrayTigre) {
        string += `${tigre.visualizar()} \n`;
    }
    return string;
}
