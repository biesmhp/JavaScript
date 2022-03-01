addEventListener('load', inicio, false);

var selectPaises
var labelCapital
var labeldescripcion
var paisElegido

function inicio() {
    selectPaises = document.querySelector("#paises")
    labelCapital = document.querySelector("#capital")
    labeldescripcion = document.querySelector("#descripcion")
    /* Genera nada mas cargar la página un select con los paises del json  */
    envioform()
    /* A esos paises les das el evento change */
    selectPaises.addEventListener("change", (e) => {
    /* Cada vez que cambie llama a envioform */
        paisElegido = e.currentTarget.value
        envioform()

    }, false)


    function envioform() {

        let ruta = "paises_ciudades.json"

        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open("GET", ruta, true)
        xhr.send(null)
        xhr.onreadystatechange = muestracontenido;

        function muestracontenido() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    /* Si la select tiene hijos y has elegido ya algún país
                    primero mira a ver si tiene que eliminar algo para que no se superponga.
                    Despues sacar un array con todos los paises */
                    if (selectPaises.hasChildNodes() && paisElegido != null) {

                        if (document.querySelector("#selectCiudades")) {
                            document.body.removeChild(document.querySelector("#selectCiudades"))
                        }

                        let arrayPaises = JSON.parse(xhr.responseText).listadoPaises.pais
                        let crearSelectCiudades = document.createElement("select")
                        crearSelectCiudades.setAttribute("id", "selectCiudades")
                        /* Recorre el array y si alguno coincide con el pais elegido saca el nombre de
                        su capital y un texto sobre esta */
                        for (let index = 0; index < arrayPaises.length; index++) {

                            if (arrayPaises[index].nombre == paisElegido) {
                                let arrayCiudades = arrayPaises[index].ciudadImportante

                                labelCapital.innerHTML = arrayPaises[index].capital
                                labelCapital.innerHTML += "<br>"
                                labeldescripcion.innerHTML = arrayPaises[index].textoCapital
                                labeldescripcion.innerHTML += "<br>"
                                labeldescripcion.innerHTML += "<br>"
                                /* Despues crea de ese pais un select con sus ciudades */
                                for (let index2 = 0; index2 < arrayCiudades.length; index2++) {

                                    let crearOptionCiudades = document.createElement("option")
                                    crearOptionCiudades.setAttribute("value", arrayCiudades[index2])
                                    let textoCiudades = document.createTextNode(arrayCiudades[index2])

                                    crearOptionCiudades.appendChild(textoCiudades)
                                    crearSelectCiudades.appendChild(crearOptionCiudades)

                                }
                                /* Aqui se les da el evento change a esta segunda select,
                                si clickas en alguna sale una ventana nueva con una imagen de esa
                                ciudad */
                                crearSelectCiudades.addEventListener("change", () => {
                                    
                                    let width = (window.outerWidth - 500) / 2
                                    let height = (window.outerHeight - 500) / 2
                                    let ventana = window.open("", "", "width=500,height=500")
                                    ventana.moveTo(width, height)
                                    ventana.document.write(`<img src ='ciudades/${crearSelectCiudades.value}.jpg' alt='ciudad importante' height='200' width='200'>`)

                                }, false)

                            }

                        }
                        document.body.appendChild(crearSelectCiudades)
                    } else {
                        /* Si ni la primera select tiene hijos ni has elegido un país
                        (aqui entra en la primera llamada que hacemos nada mas cargar la página)
                        rellena la select con los paises a elegir */
                        let arrayPaises = JSON.parse(xhr.responseText).listadoPaises.pais
                        let optionVacia = document.createElement("option")
                        selectPaises.appendChild(optionVacia)

                        for (let index = 0; index < arrayPaises.length; index++) {

                            let crearOption = document.createElement("option")
                            crearOption.setAttribute("id", arrayPaises[index].nombre)
                            let textoOption = document.createTextNode(arrayPaises[index].nombre)

                            crearOption.appendChild(textoOption)
                            selectPaises.appendChild(crearOption)
                        }
                    }


                }
                else {
                    textMostrarMensajes.innerHTML = "Codigo de error " + xhr.status;
                }
            }
        }
    }
}