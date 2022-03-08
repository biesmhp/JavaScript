addEventListener("load", inicio, false);

function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "datospersonales.xml", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            let agenda = xhr.responseXML.querySelector("agenda");
            let texto = `Nombre: ${agenda.children[0].innerHTML}\n
            Apellido: ${agenda.children[1].innerHTML}\n
            Telefono: ${agenda.children[2].innerHTML}\n
            Email: ${agenda.children[3].innerHTML}\n`;
            document.querySelector("textarea").innerText = texto;
        } else {
            document.querySelector("textarea").innerText = "ESTADO " + xhr.status;
        }
    }
}