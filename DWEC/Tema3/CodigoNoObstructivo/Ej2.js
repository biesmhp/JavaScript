addEventListener('load', inicio, false);

function inicio() {
    let botonSumar = document.getElementById("boton");
    botonSumar.addEventListener("click", suma, false);

}

function suma() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
    let n4 = parseInt(document.getElementById("numero4").value);
    let cajaResultado = document.getElementById("resultado");

    cajaResultado.value = `${n1+n2+n3+n4}`;
    
}