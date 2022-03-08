addEventListener('load', inicio, false);

function inicio() {
    
    let botonMostrar = document.getElementById("visualizar");
    botonMostrar.addEventListener("click", mostrar, false);

}

function mostrar() {
    let cajaNombre = document.getElementById("nombre");
    let cajaApellido = document.getElementById("apellido");
    let resultado = document.getElementById("cajaResultado");
    resultado.value = `${cajaNombre.value} ${cajaApellido.value}`;
}