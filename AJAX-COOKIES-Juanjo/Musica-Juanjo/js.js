addEventListener('load', inicio, false);
var numeroImg = 1
var numeroFotoElegida = 0

var empezarAutomatico
var pararAutomatico
var colocarImg

var miIntervalo
var buscador = false
var arrayDiscosAño = []

var btnBuscar
var btnEliminarFiltro
function inicio() {

    btnBuscar = document.querySelector("#buscar")
    btnEliminarFiltro = document.querySelector("#eliminarFiltro")

    empezarAutomatico = document.querySelector("#empezar")
    pararAutomatico = document.querySelector("#parar")
    colocarImg = document.querySelector("#colocar")
    añoBuscar = document.querySelector("#buscador")
    /* Llamas a la funcion que saca la info de los discos para que saque la informacion del primer
    disco, que está introducido en el html para que aparezca siempre esa al cargar la pagina */
    sacarInfoDisco(1)
    /* Boton que con un interval va pasando una a una las imagenes */
    empezarAutomatico.addEventListener("click", () => {
        /* Si has buscado una fecha pones el buscador a true y guardas mas abajo los discos
        los discos que cumplan ese requisito.
        Si el buscador está en true recorre un array de los discos con esa fecha, no la lista completa */
        if (buscador == true) {
            let posicionArray = 0

            miIntervalo = setInterval(function () {

                sacarImg(arrayDiscosAño[posicionArray].id)
                posicionArray++

                if(posicionArray >=arrayDiscosAño.length){
                    posicionArray = 0
                }
            }, 1000);

        } else {
            /* Si no has buscado ninguna fecha va recorriendo toda la lista de img
            va llamando una a una a las imagenes. sacarImg(1) (eso saca la imagen con id 1 del json y a su vez la funcion
            sacarImg() llama a sacarInfoDisco(), que saca la informacion de ese disco),sacarImg(2) (saca la imagen con id 2 y borra la que ya estaba)  */
            miIntervalo = setInterval(function () {
                numeroImg++
                sacarImg(numeroImg)
            }, 1000);
        }

    }, false)

    pararAutomatico.addEventListener("click", () => {

        clearInterval(miIntervalo)

    }, false)

    /* Si pulsas las flechas izq y derecha avanzan o retroceden las imagenes */
    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 37) {
            /* Si buscador está en true retrocede y avanza las imagenes en el array de las que cumplen la condicion
            no de la lista entera */
            if (buscador == true) {
                let numeroFotos = arrayDiscosAño.length
                numeroFotoElegida--

                if (numeroFotoElegida < 0) {
                    numeroFotoElegida = numeroFotos - 1
                }

                document.body.removeChild(document.querySelector("#imagenDisco"))

                let imgNueva = document.createElement("img")
                imgNueva.setAttribute("src", `imagenes/imagen${arrayDiscosAño[numeroFotoElegida].id}.jpg`)
                imgNueva.setAttribute("alt", "imagen disco")
                imgNueva.setAttribute("id", "imagenDisco")

                document.body.insertBefore(imgNueva, colocarImg)

                sacarInfoDisco(arrayDiscosAño[numeroFotoElegida].id)

            } else {
                numeroImg--
                if (numeroImg < 1) {
                    numeroImg = 26

                    if (document.querySelector("#imagenDisco")) {
                        document.body.removeChild(document.querySelector("#imagenDisco"))

                        let imgNueva = document.createElement("img")
                        imgNueva.setAttribute("src", `imagenes/imagen${numeroImg}.jpg`)
                        imgNueva.setAttribute("alt", "imagen disco")
                        imgNueva.setAttribute("id", "imagenDisco")

                        document.body.insertBefore(imgNueva, colocarImg)

                        sacarInfoDisco(numeroImg)
                    }

                } else {

                    if (document.querySelector("#imagenDisco")) {
                        document.body.removeChild(document.querySelector("#imagenDisco"))

                        let imgNueva = document.createElement("img")
                        imgNueva.setAttribute("src", `imagenes/imagen${numeroImg}.jpg`)
                        imgNueva.setAttribute("alt", "imagen disco")
                        imgNueva.setAttribute("id", "imagenDisco")

                        document.body.insertBefore(imgNueva, colocarImg)

                        sacarInfoDisco(numeroImg)
                    }
                }
            }
        } else if (e.keyCode == 39) {
            if (buscador == true) {

                let numeroFotos = arrayDiscosAño.length
                numeroFotoElegida++

                if (numeroFotoElegida >= numeroFotos) {
                    numeroFotoElegida = 0
                }

                document.body.removeChild(document.querySelector("#imagenDisco"))

                let imgNueva = document.createElement("img")
                imgNueva.setAttribute("src", `imagenes/imagen${arrayDiscosAño[numeroFotoElegida].id}.jpg`)
                imgNueva.setAttribute("alt", "imagen disco")
                imgNueva.setAttribute("id", "imagenDisco")

                document.body.insertBefore(imgNueva, colocarImg)

                sacarInfoDisco(arrayDiscosAño[numeroFotoElegida].id)

            } else {
                numeroImg++
                if (numeroImg > 26) {
                    numeroImg = 1

                    if (document.querySelector("#imagenDisco")) {
                        document.body.removeChild(document.querySelector("#imagenDisco"))

                        let imgNueva = document.createElement("img")
                        imgNueva.setAttribute("src", `imagenes/imagen${numeroImg}.jpg`)
                        imgNueva.setAttribute("alt", "imagen disco")
                        imgNueva.setAttribute("id", "imagenDisco")

                        document.body.insertBefore(imgNueva, colocarImg)

                        sacarInfoDisco(numeroImg)
                    }

                } else {

                    if (document.querySelector("#imagenDisco")) {
                        document.body.removeChild(document.querySelector("#imagenDisco"))

                        let imgNueva = document.createElement("img")
                        imgNueva.setAttribute("src", `imagenes/imagen${numeroImg}.jpg`)
                        imgNueva.setAttribute("alt", "imagen disco")
                        imgNueva.setAttribute("id", "imagenDisco")

                        document.body.insertBefore(imgNueva, colocarImg)
                        sacarInfoDisco(numeroImg)
                    }
                }
            }
        }
    }, false)

    btnBuscar.addEventListener("click", () => {
        /* Pone el array a vacio cada vez que busca porque cada busqueda de años sacara nuevos resultados
        numeroFotoElegida es el contador que va a servir para recorrer el array */
        numeroFotoElegida = 0
        arrayDiscosAño = []
        sacarInfo()

    }, false)

    btnEliminarFiltro.addEventListener("click", () => {
        /* Elimina la busqueda y vuelve a poner el interruptor a false, asi que ahora se movera por la 
        lista completa de discos.
        Además saca la ultima img y su info de la que estabas viendo antes de meter el año */
        añoBuscar.value = ""
        buscador = false

        document.body.removeChild(document.querySelector("#imagenDisco"))

        let imgNueva = document.createElement("img")
        imgNueva.setAttribute("src", `imagenes/imagen${numeroImg}.jpg`)
        imgNueva.setAttribute("alt", "imagen disco")
        imgNueva.setAttribute("id", "imagenDisco")

        document.body.insertBefore(imgNueva, colocarImg)

        sacarInfoDisco(numeroImg)

    }, false)
}

function sacarImg(numero) {
    /* Introduces el id de la imagen que quieras sacar (va de 1 a 26) */
    if (document.querySelector("#imagenDisco")) {
        document.body.removeChild(document.querySelector("#imagenDisco"))

        let imgNueva = document.createElement("img")
        imgNueva.setAttribute("src", `imagenes/imagen${numero}.jpg`)
        imgNueva.setAttribute("alt", "imagen disco")
        imgNueva.setAttribute("id", "imagenDisco")

        document.body.insertBefore(imgNueva, colocarImg)

        sacarInfoDisco(numero)
    }
    /* Si llega a 26 la pone a 0 para que sea en bucle */
    if (numero == 26) {
        numeroImg = 0
    }
}

function sacarInfo() {
/* "sacarInfo" es un nombre raro para esta funcion, pero hace que saque todos los CDs que cumplan el requisito del
año y los meta en un array */
    let ruta = "musical.json"

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
                let CDs = JSON.parse(xhr.responseText).catalog.cd

                for (let index = 0; index < CDs.length; index++) {

                    if (parseInt(añoBuscar.value) == CDs[index].year) {
                        document.body.removeChild(document.querySelector("#imagenDisco"))

                        let imgNueva = document.createElement("img")
                        imgNueva.setAttribute("src", `imagenes/imagen${CDs[index].id}.jpg`)
                        imgNueva.setAttribute("alt", "imagen disco")
                        imgNueva.setAttribute("id", "imagenDisco")

                        document.body.insertBefore(imgNueva, colocarImg)

                        sacarInfoDisco(CDs[index].id)
                        arrayDiscosAño.push(CDs[index])
                        buscador = true
                    }
                }

            }
            else {
                console.log("Codigo de error " + xhr.status);
            }
        }
    }
}
function sacarInfoDisco(num) {
    /* Saca la informacion del disco segun el id que le pases (artista, titulo, precio, etc) */
    let ruta = "musical.json"

    var xhr2;
    if (window.XMLHttpRequest) {
        xhr2 = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr2.open("GET", ruta, true)
    xhr2.send(null)
    xhr2.onreadystatechange = muestracontenido2;

    function muestracontenido2() {
        if (xhr2.readyState == 4) {
            if (xhr2.status == 200) {
                let CDs = JSON.parse(xhr2.responseText).catalog.cd

                for (let index = 0; index < CDs.length; index++) {

                    if (parseInt(num) == CDs[index].id) {
                        document.querySelector("#infoDisco").innerHTML = CDs[index].title + " - " + CDs[index].artist + " - " + CDs[index].price + "$- " + CDs[index].year
                    }
                }

            }
            else {
                console.log("Codigo de error " + xhr2.status);
            }
        }
    }
}