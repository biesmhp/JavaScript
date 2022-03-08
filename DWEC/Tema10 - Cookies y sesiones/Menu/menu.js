addEventListener("load", inicio, false);

let arrayPedidos = Array();
let idPedido = localStorage.length;

function inicio() {
    crearSelect();
    validarCajas();
    borrarCajas();
    calcularSubtotales();
    registrarPedidoArray();
    almacenarEnLocal();
    document.getElementById("mostrarInfo").addEventListener("click", mostrarInfo);
    document.getElementById("mostrarTotal").addEventListener("click", mostrarTotal);

}

function validarCajas() {
    let cantidadCajas = document.getElementsByName("cantidad");
    for (let i = 0; i < cantidadCajas.length; i++) {
        cantidadCajas[i].addEventListener("keypress", function (e) {
            if (e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
            }
        })
    }
}

function borrarCajas() {
    let cantidadCajas = document.getElementsByName("cantidad");
    let botonBorrar = document.getElementById("borrar");
    let subtotales = document.getElementsByName("subtotal");
    let total = document.getElementById("total");
    botonBorrar.addEventListener("click", function () {
        for (let i = 0; i < cantidadCajas.length; i++) {
            cantidadCajas[i].value = 0;
            subtotales[i].value = 0;
        }
        total.value = 0;
    })
}

function calcularSubtotales() {
    let precios = document.getElementsByName("precio");
    let subtotales = document.getElementsByName("subtotal");
    let total = document.getElementById("total");
    let cantidadCajas = document.getElementsByName("cantidad");
    for (let i = 0; i < cantidadCajas.length; i++) {
        cantidadCajas[i].addEventListener("keyup", function (e) {
            subtotales[i].value = (isNaN(parseFloat(cantidadCajas[i].value)) ? 0 : parseFloat(cantidadCajas[i].value)) * parseFloat(precios[i].value);
            let totalPedido = 0;
            for (let j = 0; j < subtotales.length; j++) {
                totalPedido += parseFloat(subtotales[j].value);
            }
            total.value = totalPedido;
        })
    }
}

function registrarPedido() {
    let pago = document.getElementsByName("pago");
    let subtotales = document.getElementsByName("subtotal");
    let total = document.getElementById("total");
    let productos = document.getElementsByName("producto");
    let cantidadCajas = document.getElementsByName("cantidad");
    let descripcion = Array();
    let pagoSelected;
    for(let i = 0; i < pago.length; i++){
        if(pago[i].checked){
            pagoSelected = pago[i].id;
        }
    }
    for (let i = 0; i < cantidadCajas.length; i++) {
        if (subtotales[i].value != 0) {
            descripcion.push(productos[i].innerText);
        }
    }
    let pedido = new Plantilla(idPedido++, descripcion, pagoSelected, total.value);
    arrayPedidos.push(pedido);
}

function registrarPedidoArray() {
    document.getElementById("registrar").addEventListener("click", function () {
        registrarPedido();
        console.log(arrayPedidos);
        alert("Pedido Registrado. No se olvide de guardarlo en local para que no se borre")
    });

}

function almacenarEnLocal() {
    document.getElementById("almacenar").addEventListener("click", function () {
        for (let i = 0; i < arrayPedidos.length; i++) {
            localStorage.setItem(`pedido${arrayPedidos[i].nPedido}`, JSON.stringify(arrayPedidos[i]));
        }
        console.log(localStorage);
        crearSelect();
    })

}

function mostrarInfo() {
    let info = document.getElementById("info");
    info.innerHTML = "";
    arrayPedidos = Array();
    for (let i = 0; i < localStorage.length; i++) {
        arrayPedidos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let texto = "";
    for (let i = 0; i < arrayPedidos.length; i++) {
        texto += "Pedido " + arrayPedidos[i].nPedido + "<br>" + arrayPedidos[i].descripcion.join("-") + "<br>" +
            "Pago: " + arrayPedidos[i].pago + "<br>" + arrayPedidos[i].total + "€<hr>";
    }
    info.innerHTML = texto;
    console.log(arrayPedidos);
}

function mostrarTotal() {
    arrayPedidos = Array();
    for (let i = 0; i < localStorage.length; i++) {
        arrayPedidos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    let total = 0;
    for (let i = 0; i < arrayPedidos.length; i++) {
        total += parseFloat(arrayPedidos[i].total);
    }
    alert("TOTAL: " + total + "€")
}

function crearSelect() {
    let select = document.getElementById("pedido");
    select.innerHTML = "";
    arrayPedidos = Array();
    for (let i = 0; i < localStorage.length; i++) {
        arrayPedidos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    for (let i = 0; i < localStorage.length; i++) {
        let option = document.createElement("option");
        option.value = JSON.parse(localStorage.getItem(localStorage.key(i))).nPedido;
        option.innerHTML = "Pedido: " + JSON.parse(localStorage.getItem(localStorage.key(i))).nPedido;
        select.appendChild(option);
    }
    select.addEventListener("change", function () {
        let ventana = window.open("", "_blank", "width=400px, height=200px, top=400px");
        let info = "Pedido: " + arrayPedidos[this.selectedIndex].nPedido + "<br>" + arrayPedidos[this.selectedIndex].descripcion.join("-") + "<br>" +
            "Pago: " + arrayPedidos[this.selectedIndex].pago + "<br>" + arrayPedidos[this.selectedIndex].total + "€<hr>";
        ventana.document.write(info);
    })
}