addEventListener("load", inicio, false);

function inicio() {
    let CC = crearCuentasCorrientes();
    let textArea = document.getElementById("resultado");
    let textArea2 = document.getElementById("resultado2");
    let nombre = document.getElementById("usuario");
    let importe = document.getElementById("abono_cargo");
    let aplicarCargo = document.getElementById("aplicarBoton");
    mostrarArray(CC, textArea);
    regalarMilEuros(CC);
    cargarRetencion(CC);
    mostrarArray(CC, textArea);

    aplicarCargo.addEventListener("click", function () {
        textArea2.value = "";
        aplicarImporte(nombre.value, importe.value, CC);
        mostrarUsuario(nombre.value, CC, textArea2);
    }, false);

}

function mostrarUsuario(usuario, array, textArea) {
    for (const element of array){
        if (usuario === element.datosPers.nombre) {
            textArea.value += `${element.visualizarCliente()}\n`;
            textArea.value += `${element.visualizarSaldo()}\n`;
        }
    }
}

function aplicarImporte(nombre, importe, array) {
    for (const cuenta of array) {
        if (cuenta.datosPers.nombre === nombre) {
            if (importe > 0) {
                cuenta.abono(parseFloat(importe));
            } else if (importe < 0) {
                cuenta.cargo(Math.abs(parseFloat(importe)));
            }
        }
    }
}

function crearCuentasCorrientes() {
    let array = Array();
    for (let i = 0; i < 5; i++) {
        array.push(new CuentaCorriente(new DatosPersonales(`Usuario${i+1}`, "72152050S", "Torrelavega", parseInt(random(10000000,99999999))), parseInt(random(1000,9999)), parseFloat(random(3000, 10000).toFixed(2))))
    }
    return array;
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function mostrarArray(array, textArea) {
    for (const element of array) {
        textArea.value += `${element.visualizarCliente()}\n`;
        textArea.value += `${element.visualizarSaldo()}\n`;
    }
    textArea.value += `-----------------------------\n`;
}

function regalarMilEuros(array) {
    for (const arrayElement of array) {
        arrayElement.abono(1000);
    }
    return array;
}

function cargarRetencion(array) {
    for (const arrayElement of array) {
        arrayElement.cargo(arrayElement.saldo*0.1);
    }
    return array;
}