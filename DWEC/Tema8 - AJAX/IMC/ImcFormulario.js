addEventListener("load", inicio, false);

function inicio() {
    let boton = document.getElementById("enviar");
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let dni = document.getElementById("dni");
    let sexo = document.getElementById("sexo");
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    boton.addEventListener("click", function (){
        let xhr = new XMLHttpRequest();
        let datos = new FormData();
        datos.append("nombre", nombre.value);
        datos.append("edad", edad.value);
        datos.append("dni", dni.value);
        datos.append("sexo", sexo.value);
        datos.append("peso", peso.value);
        datos.append("altura", altura.value);
        xhr.open("POST", "pagina1.php", true);
        xhr.send(datos);
    }, false)
}