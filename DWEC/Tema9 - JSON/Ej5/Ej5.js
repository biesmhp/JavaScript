addEventListener("load", inicio, false);

function inicio() {
    let enviarBoton = document.getElementById("enviar");
    let pais = document.getElementById("pais");
    let paisesArray = Array("spain", "mexico", "argentina", "colombia");

    enviarBoton.addEventListener("click", function () {
        if (paisesArray.includes(pais.value.toLowerCase())) {
            let datos = new FormData();
            datos.append("pais", pais.value.toLowerCase());
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "php paises.php", true);
            xhr.send(datos);
            xhr.onreadystatechange = function () {
                let ciudades = xhr.responseText.split(",")
                let indice = ciudades[0].substr(-1, 1);
                ciudades.shift();
                try {
                    document.body.removeChild(document.querySelector("div"))
                } catch (e) {
                }
                let div = document.createElement("div");
                for (let i = 0; i < ciudades.length; i++) {
                    let input = document.createElement("input");
                    input.value = ciudades[i];
                    input.setAttribute("style", "text");
                    input.setAttribute("readOnly", "");
                    div.appendChild(input);
                }
                document.body.appendChild(div);
            }
        } else {
            try {
                document.body.removeChild(document.querySelector("div"))
            } catch (e) {
            }
            let div = document.createElement("div");
            div.innerHTML = "<h2>Pais no encontrado</h2>"
            document.body.appendChild(div);
        }
    })
}