addEventListener("load", inicio, false);

function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "videoclub.xml", true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let videoclub = xhr.responseXML.children[0];
                crearSelect(videoclub);
                crearTitulos(videoclub);

            } else {
                alert("ERROR: " + xhr.status);
            }
        }
    }


    function crearTitulos(videoclub) {
        let div = document.getElementById("titulos");
        let titulos = Array();
        for (let i = 0; i < videoclub.children.length; i++) {
            titulos.push(videoclub.children[i].children[0].innerHTML)
        }
        for (let i = 0; i < titulos.length; i++) {
            let h2 = document.createElement("h2");
            h2.setAttribute("id", `${i+1}.jpg`);
            h2.innerHTML = titulos[i];
            h2.addEventListener("click", function () {
                clickarTitulo(this);

            }, false)
            h2.addEventListener("mouseenter", function (event) {
                this.className = "tituloSelected";
                crearDivFlotante(videoclub, i, event);

            });
            h2.addEventListener("mouseleave", function () {
                this.className = null;
                try {
                    document.body.removeChild(document.querySelector("#divFlotante"));
                } catch (e) {
                }
            })
            div.appendChild(h2);
        }
    }

    function crearDivFlotante(videoclub, i, event) {
        let divFlotante = document.createElement("div");
        divFlotante.setAttribute("id", "divFlotante");
        divFlotante.innerHTML = "<p>Titulo: " + videoclub.children[i].children[0].innerHTML + "</p>" +
            "<p>Duracion: " + videoclub.children[i].children[1].innerHTML + "</p>" +
            "<p>Genero: " + videoclub.children[i].children[2].innerHTML + "</p>";
        divFlotante.className = "divFlotante";
        document.body.appendChild(divFlotante);
    }

    function clickarTitulo(h2) {
        let caratulaDiv = document.querySelector("#caratulas");
        document.body.removeChild(caratulaDiv);
        caratulaDiv = document.createElement("div");
        caratulaDiv.setAttribute("id", "caratulas");
        document.body.appendChild(caratulaDiv);
        //Crear imagen
        let imagen = document.createElement("img");
        imagen.src = h2.getAttribute("id");
        document.querySelector("#caratulas").appendChild(imagen);

    }

    function crearSelect(videoclub) {
        let generos = Array();
        let select = document.getElementById("generos");

        for (let i = 0; i < videoclub.children.length; i++) {
            generos.push(videoclub.children[i].children[2].innerHTML)
        }
        generos = generos.filter(unique);
        for (const genero of generos) {
            let option = document.createElement("option");
            option.setAttribute("value", genero);
            option.innerText = genero;
            select.appendChild(option);
        }
        select.addEventListener("change", function () {

        })
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
}