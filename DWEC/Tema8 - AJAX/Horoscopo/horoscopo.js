addEventListener("load", inicio, false);

function inicio() {
    for (let i = 0; i < document.images.length; i++) {
        document.images[i].src = "imagenesHoroscopo/"+(i+1)+".gif";
        document.images[i].style.height = "200px";
        document.images[i].className = "cod";

        document.images[i].addEventListener("dblclick", function () {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "horoscopos.php?cod=" + (i+1), true);
            xhr.send(null);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        document.querySelector("section").className = "active";
                        document.querySelector("section").innerHTML = xhr.responseText;
                    }
                }
            }
        })
        document.images[i].addEventListener("mouseleave", function () {
            try {
                document.body.removeChild(document.querySelector("section"))
                document.body.appendChild(document.createElement("section"));
            } catch (e) {
            }
        })
    }
}