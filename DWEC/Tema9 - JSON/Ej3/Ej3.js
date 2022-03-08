addEventListener("load", inicio, false);



function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "desayunos.xml", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let ticket = document.getElementById("ticket");
                let desayunoCollection = xhr.responseXML.querySelectorAll("food");
                let pedido = Array();
                let arrayDesayunos = crearObjetos(desayunoCollection);
                crearBotones(arrayDesayunos, pedido);
                ticket.addEventListener("click", function () {
                    let texto = "--- PEDIDO ---\n";
                    for (const desayuno in pedido) {
                        texto += desayuno + " -> " + pedido[desayuno] + " unidades\n";
                    }
                    /*let total = 0;
                    for (let i = 0; i < pedido.length; i++) {
                        for (const desayunoNombre in pedido) {
                            if (arrayDesayunos[i].nombre == desayunoNombre) {
                                total += arrayDesayunos[i].precio;
                            }
                        }
                    }*/
                    alert(texto)
                })
            }
        }
    }

}

function crearObjetos(collection) {
    let arrayDesayunos = Array();
    for (let i = 0; i < collection.length; i++) {
        let nombre = collection[i].querySelector("name").innerHTML;
        let precio = collection[i].querySelector("price").innerHTML;
        let descripcion = collection[i].querySelector("description").innerHTML;
        let calorias = collection[i].querySelector("calories").innerHTML;
        arrayDesayunos.push(new Desayuno(nombre, precio, descripcion, calorias));
    }
    return arrayDesayunos;
}

function crearBotones(arrayObjetos, pedido) {
    let div = document.createElement("div");
    for (let i = 0; i < arrayObjetos.length; i++) {
        let button = document.createElement("button");
        button.setAttribute("id", arrayObjetos[i].nombre);
        button.innerHTML = `Desayuno tipo ${i+1}`;
        button.addEventListener("mouseenter", function () {
            this.className = "botonResaltado";
            let divInfo = document.createElement("div");
            divInfo.className = "infoDiv";
            divInfo.innerHTML = arrayObjetos[i].visualizar();
            document.body.appendChild(divInfo);
        })
        button.addEventListener("mouseleave", function () {
            this.className = "";
            try {
                document.body.removeChild(document.querySelector(".infoDiv"));
            }catch (e) {
            }
        })
        button.addEventListener("click", function () {
            let cantidad;
            let aux = true;
            do {
                cantidad = prompt("¿Cuantos desayunos quieres?");
                if (!isNaN(cantidad)) {
                    aux = false;
                }
            } while (aux)
            if (cantidad != null) {
                pedido[arrayObjetos[i].nombre] = cantidad;
            }
        })
        div.appendChild(button);
    }
    document.body.appendChild(div);
}
