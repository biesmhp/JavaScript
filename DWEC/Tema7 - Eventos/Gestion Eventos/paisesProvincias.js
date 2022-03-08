addEventListener("load", inicio, false);

function inicio() {
    let selectPais = document.querySelector("#pais");
    let selectProvincia = document.querySelector("#provincia");
    let array = Array(
        Array("-"),
        Array("Asturias", "Barcelona", "Cantabria", "Galicia", "Madrid"),
        Array("Buenos Aires", "Chubut", "Mendoza"),
        Array("California", "Texas", "Florida", "Georgia", "Pensilvania")
    )

    selectPais.addEventListener("change", function () {
        for (let j = 0; j < array[parseInt(this.value)].length; j++) {

            /*TODO: document.body.removeChild(selectProvincia);
            let selectProvincia = document.createElement("option");
            selectProvincia.setAttribute("id", "provincia");*/
            let optionProv = document.createElement("option");
            optionProv.innerText = array[parseInt(this.value)][j];
            selectProvincia.appendChild(optionProv);
        }
    }, false);

}