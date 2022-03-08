addEventListener("load", inicio, false);

function inicio() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", envioForm, false);


    function envioForm() {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if(window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        let url = document.querySelector("select").value;
        xhr.open("GET", url, true);
        xhr.send(null);
        xhr.onreadystatechange = muestracontenido;

        function muestracontenido() {
            if (xhr.readyState ===4 && xhr.status === 200) {
                document.getElementById("dyn").value = xhr.responseText;
            } else {
                document.getElementById("dyn").value = "Error: " + xhr.status;
            }
        }
    }


}
