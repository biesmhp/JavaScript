addEventListener("load", inicio, false);

function inicio() {
    let intervalo = null;
    let nBolas = 0;
    let segundos = 0;
    borradas = 0;
    let botonEmpezar = document.getElementById("botonEmpezar");
    let botonParar = document.getElementById("botonParar");

    botonEmpezar.addEventListener("click", function () {
        if (intervalo === null) {
            intervalo = setInterval(function () {
                document.body.appendChild(crearCirculo());
                nBolas++;
                if (nBolas % 10 === 0) {
                    segundos++;
                }
            }, 100);
        }
    }, false);

    botonParar.addEventListener("click", function () {
        let boolean = confirm("¿Quieres terminar el programa?");
        if (boolean) {
            clearInterval(intervalo);
            alert(`Nº Bolas: ${nBolas}\n Segundos de ejecucion: ${segundos}\nBorradas: ${borradas}`);
            borrarCirculos(document.querySelectorAll("div"));
            intervalo = null;
        }
    }, false);

}

function borrarCirculos(divs) {
    let aux = true;
    let i = 0;
    do {
        try {
            document.body.removeChild(divs[i]);
            i++;
        } catch (e) {
            aux = false;
        }
    } while (aux);
}

function crearCirculo() {
    let elemento = document.createElement("div");
    let [r, g, b, a] = crearColorRnd();
    elemento.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    [r, g, b, a] = crearColorRnd();
    elemento.style.border = `solid 2px rgb(${r}, ${g}, ${b})`;
    let diametro = rnd0_100();
    elemento.style.width = `${diametro}px`;
    elemento.style.height = `${diametro}px`;
    elemento.style.position = "absolute";
    elemento.style.top = `${rnd0_100()}%`;
    elemento.style.left = `${rnd0_100()}%`;
    elemento.style.borderRadius = "50%";
    elemento.addEventListener("click", function () {
        document.body.removeChild(this);
        borradas++;
    })
    return elemento;
}

function rnd0_100() {
    return Math.round(Math.random()*100);
}

function crearColorRnd() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = Math.random();
    return [r, g, b, a];
}