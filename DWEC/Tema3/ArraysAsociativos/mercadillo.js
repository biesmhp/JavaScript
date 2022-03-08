addEventListener('load', inicio, false);

function inicio() {
    let tienduca = {"tomate": 5, "lechuga": 10, "manzana": 14};

    let textoLabel = document.getElementById("labelTexto");
    let nombreInput = document.getElementById("inputNombre");
    let stockInput = document.getElementById("inputStock");
    let addBoton = document.getElementById("botonAñadir");
    addBoton.addEventListener("click", function () {
        add(tienduca, nombreInput.value, stockInput.value);
        textoLabel.value = `Se han añadido ${nombreInput.value} con un stock de ${stockInput.value}`;
    }, false);
    let venderBoton = document.getElementById("botonVender");
    venderBoton.addEventListener("click", function () {
        if (vender(tienduca, nombreInput.value, stockInput.value)) {
            textoLabel.value = `Quedan ${tienduca[nombreInput.value]} ${nombreInput.value + "s"}`;
        }
    }, false)

}

function vender(arrayProductos, nombre, stock) {
    if (arrayProductos[nombre] >= stock) {
        arrayProductos[nombre] -= stock;
        alert(`Se han vendido ${stock} de ${nombre}`);
        return true;
    } else {
        alert("Error");
        return false;
    }
}

function add(arrayProductos, nombre, stock) {
    arrayProductos[nombre] = stock;
}

function visualizar(arrayProductos, texto) {
    texto = "";
    for (const nombre in arrayProductos) {
        texto.concat(`${nombre} -- ${arrayProductos[nombre]} <br>`);
    }
    return texto;
}