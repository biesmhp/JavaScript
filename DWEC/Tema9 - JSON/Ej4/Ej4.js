addEventListener("load", inicio, false);

function inicio() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let edad = document.getElementById("edad");
    let enviarBoton = document.getElementById("enviar");
    enviarBoton.addEventListener("click", function () {
        let datos = new FormData();
        datos.append("nombre", nombre.value);
        datos.append("apellido", apellido.value);
        datos.append("edad", edad.value);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "4.php", true);
        xhr.send(datos);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let objeto = JSON.parse(xhr.responseText);
                    let texto = `<p>Nombre: ${objeto.nombre}</p> <p>Apellido: ${objeto.apellido}</p> <p>Edad: ${objeto.edad}</p>`;
                    document.querySelector("section").innerHTML = texto;
                }
            }
        }
    })

}