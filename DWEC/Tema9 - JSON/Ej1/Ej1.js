addEventListener("load", inicio, false);

function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "paises y ciudades.json", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let paises = JSON.parse(xhr.responseText).listadoPaises;
                let arrayCiudades = Array();
                crearSelectPaises(paises, arrayCiudades);

            }
        }
    }
}

function crearSelectPaises(paises, arrayCiudades) {
    let selectPais = document.createElement("select");
    selectPais.setAttribute("id", "paises");
    for (let i = 0; i < paises.pais.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerText = paises.pais[i].nombre;
        selectPais.appendChild(option);
    }
    selectPais.addEventListener("change", function () {
        arrayCiudades = Array();
        try {
            document.body.removeChild(document.querySelector("#ciudades"));
        } catch (e) {
        }
        for (let i = 0; i < paises.pais[this.selectedIndex].ciudadImportante.length; i++) {
            arrayCiudades.push(paises.pais[this.selectedIndex].ciudadImportante[i]);
        }
        let selectCiudad = document.createElement("select");
        selectCiudad.setAttribute("id", "ciudades");

        crearSelectCiudades(arrayCiudades, selectCiudad);
        document.querySelector("label").innerHTML = "";
        document.querySelector("label").innerHTML = paises.pais[this.selectedIndex].capital;
        document.body.appendChild(selectCiudad);
    })
    document.body.appendChild(selectPais);
}

function crearSelectCiudades(arrayCiudades, selectCiudad) {
    for (let i = 0; i < arrayCiudades.length; i++) {
        let option = document.createElement("option");
        option.value = arrayCiudades[i];
        option.innerText = arrayCiudades[i];
        selectCiudad.appendChild(option);
    }
    selectCiudad.addEventListener("change", function () {
        let ventanaNormal = window.open("", "_blank", "height=600,width=600");
        ventanaNormal.moveTo(500, 200);
        ventanaNormal.document.write(`<img src="imagenes/${(this.value).toLowerCase()}.jpg">`);
    })
}
