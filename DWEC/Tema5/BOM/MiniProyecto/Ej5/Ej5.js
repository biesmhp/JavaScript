addEventListener("load", inicio, false);

function inicio() {
    let anterior = document.getElementById("anterior");
    let siguiente =document.getElementById("siguiente");
    anterior.addEventListener("click", function () {
        window.history.back();
    }, false);
    siguiente.addEventListener("click", function () {
        window.history.forward();
    })
}