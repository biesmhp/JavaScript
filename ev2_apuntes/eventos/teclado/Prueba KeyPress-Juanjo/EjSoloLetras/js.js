addEventListener('load', inicio, false);
var inputTexto

function inicio() {
    inputTexto = document.querySelector("#texto")


    inputTexto.addEventListener("keypress", (e) => {

        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 209) {


        } else if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 241) {


        } else {
            e.preventDefault()
        }
    }, false)
}

