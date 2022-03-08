addEventListener("load", inicio, false);

function inicio() {
    let contacto = {
        "nombre": "Daniel",
        "apellido": "Garcia",
        "telefono": ["123456", "987654"]
    };
    let guardar = document.getElementById("guardar");
    let mostrar = document.getElementById("mostrar");
    guardar.addEventListener("click", function () {
        sessionStorage.setItem("contacto1", JSON.stringify(contacto));
        alert("Guardado con exito");
    })
    mostrar.addEventListener("click", function () {
        let objeto = JSON.parse(sessionStorage.getItem("contacto1"));
        alert(objeto.nombre + " " + objeto.apellido + " " + objeto.telefono)
    })
}