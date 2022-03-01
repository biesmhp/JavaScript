addEventListener('load', inicio, false);
var selectColores
var selectColorDivs
var numDivs
var colorDivs
var colorFondo

var btnCrearDivs
var btnEnviar
var btnAplicar

function inicio() {
    selectColorFondo = document.querySelector("#colorFondo")
    selectColorDivs = document.querySelector("#colorDivs")
    numDivs = document.querySelector("#numeroDivs")

    btnCrearDivs = document.querySelector("#crearDivs")
    btnEnviar = document.querySelector("#enviar")
    btnAplicar = document.querySelector("#aplicar")

    /* Si existen cookies quiero que pinte el documento con los valores que tengan */
    if (document.cookie) {
        /* Esta funcion esta sacada de los apuntes, es para sacar el valor de la cookie buscada por el nombre */
        function leerCookie(nombre) {
            var lista = document.cookie.split(";");
            for (i in lista) {
                var busca = lista[i].search(nombre);

                if (busca > -1) {
                    micookie = lista[i]
                }

            }
            var igual = micookie.indexOf("=");
            var valor = micookie.substring(igual + 1);
            return valor;
        }
        /* Introduces el nombre de la cookie y te dará el valor */
        let colorDeDivs = leerCookie("colorDivs")
        let numeroDeDivs = parseInt(leerCookie("numeroDivs"))
        let colorDeFondo = leerCookie("colorFondo")
        /* Aplicas los estilos */
        for (let index = 0; index < numeroDeDivs; index++) {
            let crearNuevoDiv = document.createElement("div")
            crearNuevoDiv.setAttribute("class", "divCreado")
            crearNuevoDiv.setAttribute("style", "width: 100px; height: 100px; border: solid black 2px;")
            document.body.appendChild(crearNuevoDiv)
        }

        let arrayDivs = document.querySelectorAll(".divCreado")

        for (let index2 = 0; index2 < arrayDivs.length; index2++) {
            arrayDivs[index2].setAttribute("style", "width: 100px; height: 100px; border: solid black 2px; background-color: " + colorDeDivs + ";")

        }

        document.body.setAttribute("style", "background-color: " + colorDeFondo + ";")
    }

    selectColorFondo.addEventListener("change", (e) => {
        /* Vas guardando los valores que quieras */
        colorFondo = e.currentTarget.value

    }, false)

    selectColorDivs.addEventListener("change", (e) => {
        /* Vas guardando los valores que quieras */
        colorDivs = e.currentTarget.value
    }, false)

    btnEnviar.addEventListener("click", () => {
        /* Este boton visualiza como se tiene que ver por las cookies una vez recargues la página,
        hasta que no pulses el btnAplicar no se guardan las cookies */
        let numeroDivs = parseInt(numDivs.value)

        for (let index = 0; index < numeroDivs; index++) {
            let crearNuevoDiv = document.createElement("div")
            crearNuevoDiv.setAttribute("class", "divCreado")
            crearNuevoDiv.setAttribute("style", "width: 100px; height: 100px; border: solid black 2px;")
            document.body.appendChild(crearNuevoDiv)
        }

        let arrayDivs = document.querySelectorAll(".divCreado")

        for (let index2 = 0; index2 < arrayDivs.length; index2++) {
            arrayDivs[index2].setAttribute("style", "width: 100px; height: 100px; border: solid black 2px; background-color: " + colorDivs + ";")

        }

        document.body.setAttribute("style", "background-color: " + colorFondo + ";")

    }, false)

    btnAplicar.addEventListener("click", () => {
        /* Aqui guardas las cookies, deberia funcionar incluso cerrando el navegador y volviendolo a abrir */
        document.cookie = "colorFondo=" + colorFondo + ";expires=Fri, 31 Dec 9999 23:59:59 GMT"
        document.cookie = "colorDivs=" + colorDivs+ ";expires=Fri, 31 Dec 9999 23:59:59 GMT"
        document.cookie = "numeroDivs=" + parseInt(numDivs.value)+ ";expires=Fri, 31 Dec 9999 23:59:59 GMT"

    }, false)

}