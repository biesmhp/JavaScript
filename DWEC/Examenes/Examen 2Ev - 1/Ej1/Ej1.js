addEventListener("load", inicio, false);

function inicio() {
    let nOpciones = parseInt(prompt("Elige el numero de opciones"))
    let marcarTodoBoton = document.getElementById("todo");
    let borrarElemento = document.getElementById("borrar");
    crearCheckbox(nOpciones);
    crearSelect(nOpciones);
    borrarElemento.addEventListener("click", function () {
        let arrayElementosSeleccionados = document.querySelector("select").selectedOptions;
        /* SIN TIEMPO
        for (const option of arrayElementosSeleccionados) {
            for (const input of document.querySelectorAll("input")) {
                if (input.) {
                }
            }
        }*/

    })
    marcarTodoBoton.addEventListener("click", function () {
        marcar_desmarcar.call(this);
    })
    let enviarBoton = document.getElementById("enviar");
    enviarBoton.addEventListener("click", function () {
        accionEnviar();
    })
}

function crearSelect(nOpciones) {
    for (let i = 0; i < nOpciones; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `${i + 1}`);
        option.innerText = `Opc ${i + 1}`;
        document.querySelector("select").appendChild(option);
    }
}

function marcar_desmarcar() {
    let arrayChecked = document.querySelectorAll(".opciones");
    for (let i = 0; i < arrayChecked.length; i++) {
        arrayChecked[i].checked = !!this.checked;
    }
}

function crearCheckbox(nOpciones) {
    for (let i = 0; i < nOpciones; i++) {
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.className = "opciones";
        checkBox.setAttribute("id", `${i + 1}`);
        checkBox.addEventListener("click", function () {
            mostrarOpcionMarcada.call(this);
        })
        let label = document.createElement("label");
        label.innerText = `Opc ${i + 1}`;
        label.addEventListener("mouseenter", function () {
            this.className = "opcionHover";
        })
        label.addEventListener("mouseleave", function () {
            this.removeAttribute("class");
        })
        let br = document.createElement("br");
        document.querySelector("form").appendChild(label);
        document.querySelector("form").appendChild(checkBox);
        document.querySelector("form").appendChild(br);
    }
    let enviar = document.createElement("input");
    enviar.setAttribute("type", "button");
    enviar.setAttribute("id", "enviar");
    enviar.setAttribute("value", "Enviar");
    document.querySelector("form").appendChild(enviar);
}

function mostrarOpcionMarcada() {
    borrarSection();
    let section = document.createElement("section");
    document.body.appendChild(section);
    let p = document.createElement("p");
    p.innerHTML = "Se ha marcado la opcion " + this.getAttribute("id") + "<br>";
    document.querySelector("section").appendChild(p);
}

function accionEnviar() {
    borrarSection();
    let section = document.createElement("section");
    document.body.appendChild(section);
    let arrayChecked = document.querySelectorAll(".opciones");
    let texto = "";
    let control = 0;
    for (let i = 0; i < arrayChecked.length; i++) {
        if (arrayChecked[i].checked) {
            texto += `<p>Marcada la opcion ${i + 1}.</p>`;
            control++;
        }
    }
    if (control === arrayChecked.length) {
        texto = "<p>TODAS</p>"
    }
    section.innerHTML = texto;
}

function borrarSection() {
    try {
        document.body.removeChild(document.querySelector("section"));
    } catch (e) {
    }
}
