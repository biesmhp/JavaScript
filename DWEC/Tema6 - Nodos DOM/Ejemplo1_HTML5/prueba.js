addEventListener("load", inicio, false);

function inicio() {
    let parrafos = document.getElementsByTagName("p");
    let primerParrafo = parrafos[0];
    let enlaces = primerParrafo.getElementsByTagName("a");

    /*if (document.body.hasChildNodes()) {
        let hijos = document.body.childNodes;
        for (const hijo of hijos) {
            if (hijo.nodeName !== "#text") {
                document.write(hijo.textContent + "<br>");
            }

        }
    }*/

/*    let hijoSection = document.getElementById("section").lastChild;
    hijoSection.textContent = prompt("Elige el mensaje");*/
    var objeto_html = document.documentElement;
    var objeto_head = objeto_html.firstChild;
    var objeto_body = objeto_html.lastChild;

}