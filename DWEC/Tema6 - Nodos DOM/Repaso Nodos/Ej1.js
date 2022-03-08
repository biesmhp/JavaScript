addEventListener("load", inicio, false);

function inicio() {
    // Elemento HTML
    let elementoHTML = document.documentElement;
    //alert(elementoHTML.nodeName + elementoHTML.nodeType);

    // Numero de hijos
    let hijosHTML = Array();
    let cadenaNodosHijo = "";
    for (const hijo of elementoHTML.childNodes) {
        if (hijo.nodeName !== "#text") {
            hijosHTML.push(hijo);
            cadenaNodosHijo += hijo.nodeName + "-" + hijo.nodeType + "-" + hijo.nodeValue + "\n";
        }
    }
    //alert("Numero de hijos: " + hijosHTML.length);

    // Nombre nodos hijo
    //alert(cadenaNodosHijo);

    // Acceso al body
    let nodoBody = document.body;

    // Acceso a hijos del nodo body
    let hijosBody = "";
    for (const hijo of nodoBody.childNodes) {
        if (hijo.nodeName !== "#text") {
            hijosBody += hijo.nodeName + "-" + hijo.nodeType + "-" + hijo.nodeValue + "\n";
        }
    }
    //alert(hijosBody);

    // Extraer nodo Footer y mostrar los enlaces
    let nodoFooter = nodoBody.lastElementChild;
    let cadenaFooter = "";

    if (nodoFooter.hasChildNodes()) {
        for (const hijo of nodoFooter.childNodes) {
            if (hijo.nodeName !== "#text" && hijo.tagName === "A") {
                cadenaFooter += hijo.tagName + " - " + hijo.textContent + " - " + hijo.nodeType + "\n";
            }
        }
    }
    //alert(cadenaFooter);

    // Nodo padre de la imagen del logo
    let nodoLogo = nodoBody.children[2].children[0].children[2].children[1];
    let nodoPadre = nodoLogo.parentElement;
    //alert(nodoPadre.nodeName + " - " + nodoPadre.nodeType + " - " + nodoPadre.tagName);

    // Hermano de Contenido Principal
    let nodoContenido = nodoBody.children[2].children[0].children[0];
    let nodoHermanoContenido = nodoContenido.nextElementSibling;
    //alert(nodoHermanoContenido.tagName);

    // Hermano de Aside
    let nodoAside = nodoBody.children[3];
    let hermanoAside = nodoAside.previousElementSibling;
    //alert(hermanoAside.tagName);

    // Seleccion de nodos con querys
    alert(nodoAside.querySelectorAll(".hola")[0].tagName + "\n" +
        nodoAside.querySelectorAll(".hola")[1].tagName);

    // Tiene atributos el primer p de Article?
    let nodoParrafo = nodoBody.children[2].children[0].children[1]
    alert(nodoParrafo.hasAttributes());

    // Añadir atributos y visualizarlos
    nodoParrafo.setAttribute("id", "id");
    nodoParrafo.setAttribute("class", "clase");
    let atributos = "";
    for (const attribute of nodoParrafo.getAttributeNames()) {
        atributos += attribute + " - ";
    }
    alert(atributos);



}