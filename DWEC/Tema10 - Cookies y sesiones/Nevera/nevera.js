addEventListener("load", inicio, false);

var estadoNevera = true;

function inicio() {
    let nevera = document.querySelector("img");
    let comprarBoton = document.getElementById("comprar");

    generarProductosNevera()
    getInfoNeveraSection()

    nevera.addEventListener("dblclick", function () {
        nevera.src = estadoNevera ? "img/abierta.jpg" : "img/cerrada.jpg";
        estadoNevera = !estadoNevera;
        document.querySelector("#sectionNevera").className = estadoNevera ? "oculto" : "";
    })
    comprarBoton.addEventListener("click", function () {
        if (!estadoNevera) {
            guardarProductosLocal();
            generarProductosNevera()
            getInfoNeveraSection()
        } else {
            alert("Abre la nevera antes de hacer la compra")
        }

    })
}

function guardarProductosLocal() {
    let productosHtml = document.getElementsByName("productosTienda");
    for (let i = 0; i < productosHtml.length; i++) {
        if (productosHtml[i].value !== 0) {
            if (localStorage.getItem(productosHtml[i].getAttribute("id")) == null) {
                localStorage.setItem(productosHtml[i].getAttribute("id"), productosHtml[i].value);
            } else {
                localStorage.setItem(productosHtml[i].getAttribute("id"), parseInt(localStorage.getItem(productosHtml[i].id)) + parseInt(productosHtml[i].value));
            }
        }
    }
    for (const input of productosHtml) {
        input.value = 0;
    }
}

function generarProductosNevera() {
    try {
        document.querySelector("#productosNevera").remove();
    } catch (e) {
    }
    let div = document.createElement("div");
    div.setAttribute("id", "productosNevera");
    for (let i = 0; i < localStorage.length; i++) {
        let clave = Object.keys(localStorage)[i];
        let img = document.createElement("img");
        img.src = "img/" + clave + ".png";
        img.style.height = "70px";
        img.className = "imagenProducto col-3 img-fluid";
        img.setAttribute("id", clave);
        img.addEventListener("click", function (){
            let valor = localStorage.getItem(Object.keys(localStorage)[i]);
            localStorage.setItem(clave, valor-1);
            getInfoNeveraSection()
            if (parseInt(valor) === 1) {
                this.remove();
                alert("Sin " + this.id + " en la nevera");
            }
            if (parseInt(valor) === 3) {
                alert(`Ya solo queda 2 unidades de ${clave} en la nevera. Compra más!`)
            }
        }, false);
        if (parseInt(localStorage.getItem(Object.keys(localStorage)[i])) > 0) {
            div.appendChild(img);
        }
    }
    document.querySelector("#sectionNevera").appendChild(div);
}

function getInfoNeveraSection() {
    let neveraNodo = document.getElementById("infoNevera");
    neveraNodo.innerHTML = "";
    let tabla = document.createElement("table");
    tabla.className = "table";
    let trHeader = document.createElement("tr");
    let th = document.createElement("th");
    th.innerHTML = "Producto";
    trHeader.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Cantidad";
    trHeader.appendChild(th);
    tabla.appendChild(trHeader);
    for (let i = 0; i < localStorage.length; i++) {
        let trBody = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = Object.keys(localStorage)[i];
        trBody.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = localStorage.getItem(Object.keys(localStorage)[i]);
        trBody.appendChild(td);
        tabla.appendChild(trBody);
    }
    neveraNodo.appendChild(tabla);
}
