addEventListener("load", inicio, false);

nPalabra = 0;
function inicio() {
    let liSelected = Array();
    let palabrasCorrectas = Array("palabra", "aparecer", "pizarra");
    let spans = document.querySelectorAll("span");
    let ul = document.querySelector("ul");
    let corregirBoton = document.getElementById("corregir");

    // LISTA
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].addEventListener("click", function () {
            for (let j = 0; j < spans.length; j++) {
                if (spans[j].innerHTML === "....") {
                    liSelected.push(this);
                    spans[j].innerHTML = this.innerHTML;
                    ul.removeChild(liSelected[j]);
                    increasenPalabra();
                    break;
                }
            }
        }, false);
    }

    // SPANS
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener("click", function () {
            ul = document.querySelector("ul");
            decreasenPalabra();
            ul.appendChild(liSelected.pop());
            this.innerHTML = "....";
        }, false);
    }

    corregirBoton.addEventListener("click", function () {
        if (!corregirFrase(spans, palabrasCorrectas, ul)) {
            if (corregirBoton.value === "Segunda oportunidad") {
                corregirBoton.disabled = true;
                alert("Se acabaron las opciones");
            } else {
                corregirBoton.value = "Segunda oportunidad";
            }
        } else {
            corregirBoton.disabled = true;
            alert("Correcto!")
        }

    }, false);
}

function corregirFrase(arraySpan, palabrasCorrectas, ul) {
    let aux = true;
    for (let i = 0; i < arraySpan.length; i++) {
        if (arraySpan[i].innerHTML !== palabrasCorrectas[i]) {
            let texto = arraySpan[i].innerHTML;
            let li = document.createElement("li");
            li.innerHTML = texto;
            ul.append(li);
            arraySpan[i].innerHTML = "....";
            arraySpan[i].style.color = "red";
            aux = false;
        } else {
            arraySpan[i].style.color = "green";
        }
    }
    nPalabra = 0;
    return aux;
}

function decreasenPalabra() {
    if (nPalabra !== 0) {
        nPalabra--;
    }
}

function increasenPalabra() {
    if (nPalabra !== document.querySelectorAll("span").length) {
        nPalabra++;
    }
}