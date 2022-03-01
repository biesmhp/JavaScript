addEventListener('load', inicio, false);

var btnTicket

var arrayObjetosDesayuno = []
var arrayPedidos = []
var repetido = false

function inicio() {
    btnTicket = document.querySelector("#sacarTicket")
    /* Se le llama nada mas empezar a la función que coge informacion del desayunos.xml
    para crear los botones con el numero de desayunos */
    sacarInfo()


    btnTicket.addEventListener("click", () => {
        /* Si el div del ticket ya está creado se elimina junto con unos br
        que he puesto para que quede mejor */

        /* Si no está creado entra en el else y crea el div junto con los br */
        if (document.querySelector("#infoTicket")) {
            document.body.removeChild(document.querySelector("#infoTicket"))
            document.body.removeChild(document.querySelector("#salto1"))
            document.body.removeChild(document.querySelector("#salto2"))
        } else {
            let crearDivInfoTicket = document.createElement("div")
            crearDivInfoTicket.setAttribute("id", "infoTicket")

            let saltoLinea = document.createElement("br")
            saltoLinea.setAttribute("id", "salto1")
            let saltoLinea2 = document.createElement("br")
            saltoLinea2.setAttribute("id", "salto2")

            for (let index = 0; index < arrayPedidos.length; index++) {
                for (let index2 = 0; index2 < arrayPedidos[index].length; index2++) {

                    crearDivInfoTicket.innerHTML += arrayPedidos[index][index2] + "-"

                }
                crearDivInfoTicket.innerHTML += "<br>"
            }

            document.body.appendChild(saltoLinea)
            document.body.appendChild(saltoLinea2)
            document.body.appendChild(crearDivInfoTicket)
        }
    }, false)
}

function sacarInfo() {
    /* Se indica como se llama el fichero del que sacar información */
    let ruta = "desayunos.xml"

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
                /* Saco un array de todas las etiquetas food del xml*/
                let arrayDesayunos = xhr.responseXML.querySelectorAll("food")
                /* Recorro el array  para sacar sus datos y crear un objeto Desayuno por cada etiqueta food*/
                for (let index = 0; index < arrayDesayunos.length; index++) {

                    let nombreDesayuno = arrayDesayunos[index].querySelector("name").innerHTML
                    let precioDesayuno = arrayDesayunos[index].querySelector("price").innerHTML
                    let descripcionDesayuno = arrayDesayunos[index].querySelector("description").innerHTML
                    let caloriasDesayuno = arrayDesayunos[index].querySelector("calories").innerHTML
                    /* Creo un objeto nuevo con cada vuelta y lo meto en un array vacio para objetos Desayuno */
                    let nuevoDesayuno = new Desayuno(nombreDesayuno, precioDesayuno, descripcionDesayuno, caloriasDesayuno)
                    arrayObjetosDesayuno.push(nuevoDesayuno)
                }
                /* Una vex creado el array de objetos lo recorro y por cada objeto creo un boton */
                for (let index = 0; index < arrayObjetosDesayuno.length; index++) {

                    let nuevoBoton = document.createElement("input")
                    nuevoBoton.setAttribute("type", "button")
                    nuevoBoton.setAttribute("value", "Desayuno" + (index + 1))
                    nuevoBoton.setAttribute("id", arrayObjetosDesayuno[index].nombreD)
                    /* A cada boton le doy el evento mouseover para que cree un div con su info */
                    nuevoBoton.addEventListener("mouseover", () => {

                        if (document.querySelector("#infoDesayuno")) {

                            document.body.removeChild(document.querySelector("#infoDesayuno"))
                            document.body.removeChild(document.querySelector("#saltoDeLinea"))
                            document.body.removeChild(document.querySelector("#saltoDeLinea2"))

                            let crearDiv = document.createElement("div")
                            crearDiv.setAttribute("id", "infoDesayuno")
                            crearDiv.innerHTML = arrayObjetosDesayuno[index].visualizar()

                            let saltoLinea = document.createElement("br")
                            saltoLinea.setAttribute("id", "saltoDeLinea")
                            let saltoLinea2 = document.createElement("br")
                            saltoLinea2.setAttribute("id", "saltoDeLinea2")

                            document.body.appendChild(saltoLinea)
                            document.body.appendChild(saltoLinea2)
                            document.body.appendChild(crearDiv)

                        } else {

                            let crearDiv = document.createElement("div")
                            crearDiv.setAttribute("id", "infoDesayuno")
                            crearDiv.innerHTML = arrayObjetosDesayuno[index].visualizar()

                            let saltoLinea = document.createElement("br")
                            saltoLinea.setAttribute("id", "saltoDeLinea")
                            let saltoLinea2 = document.createElement("br")
                            saltoLinea2.setAttribute("id", "saltoDeLinea2")

                            document.body.appendChild(saltoLinea)
                            document.body.appendChild(saltoLinea2)
                            document.body.appendChild(crearDiv)
                        }

                    }, false)
                    /* Le doy tambien el mouseout para que al salir del boton lo elimine */
                    nuevoBoton.addEventListener("mouseout", () => {

                        if (document.querySelector("#infoDesayuno")) {

                            document.body.removeChild(document.querySelector("#infoDesayuno"))
                            document.body.removeChild(document.querySelector("#saltoDeLinea"))
                            document.body.removeChild(document.querySelector("#saltoDeLinea2"))

                        }
                    }, false);
                    /* Tambien les doy el evento click para que al pulsarlo salte un promt preguntandote cuanta
                    cantidad quieres de ese desayuno */
                    nuevoBoton.addEventListener("click", () => {
                        let numeroPedidos = prompt("¿Cuantos desayunos de este tipo quieres?")
                        /* Si has introducido algo en el prompt y es un numero */
                        if (numeroPedidos && !isNaN(numeroPedidos)) {
                            /* Si el length es mayor que 0 quiere decir que ya he metido algun desayuno
                            asi que quiero que la recorra para ver si el que vamos a meter ahora está repetido.
                            Si lo está suma la cantidad a la que ya habia pero no se añade dos veces.
                            Si no está repetida lo añade */
                            if (arrayPedidos.length > 0) {

                                for (let index = 0; index < arrayPedidos.length; index++) {
                                    for (let index2 = 0; index2 < arrayPedidos[index].length; index2++) {

                                        if (arrayPedidos[index][index2] == nuevoBoton.getAttribute("id")) {
                                            arrayPedidos[index][0] = arrayPedidos[index][0] + parseInt(numeroPedidos)

                                            repetido = true
                                        }

                                    }
                                }

                                if (repetido == false) {
                                    arrayPedidos.push([parseInt(numeroPedidos), nuevoBoton.getAttribute("id")])
                                } else {
                                    repetido = false
                                }
                                /* Cada vez que se añada algo se reescribe el contenido del ticket */
                                if (document.querySelector("#infoTicket")) {
                                    document.querySelector("#infoTicket").innerHTML = ""

                                    for (let index = 0; index < arrayPedidos.length; index++) {
                                        for (let index2 = 0; index2 < arrayPedidos[index].length; index2++) {

                                            document.querySelector("#infoTicket").innerHTML += arrayPedidos[index][index2] + "-"

                                        }
                                        document.querySelector("#infoTicket").innerHTML += "<br>"
                                    }
                                }
                            } else {
                                /* Si su length es 0 simplemente se añade el desayuno al ticket (el ticket es un array bidimensional) */
                                arrayPedidos.push([parseInt(numeroPedidos), nuevoBoton.getAttribute("id")])
                            }
                        }else{
                            alert("Introduzca cantidad valida")
                        }
                    }, false)
                    /* Aqui simplemente meto en el body los elementos */
                    let tabulado = document.createTextNode(' ')
                    document.body.appendChild(nuevoBoton)
                    document.body.appendChild(tabulado)
                }
            }
            else {
                console.log("Codigo de error " + xhr.status);
            }
        }
    }
}