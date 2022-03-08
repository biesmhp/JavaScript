addEventListener("load", inicio, false);

function inicio() {
    var objeto_html = document.documentElement;
    alert(objeto_html.nodeName);

    var objeto_head = objeto_html.firstChild;
    var objeto_body = objeto_html.lastChild;
    /*alert(objeto_head.nodeName);
    alert(objeto_body.nodeName);*/

    var objeto_head = objeto_html.childNodes[0];
    var objeto_body = objeto_html.childNodes[2];
    alert(objeto_head.nodeName);
    alert(objeto_body.nodeName);

    var numeroDescendientes = objeto_html.childNodes.length;
    alert("Numero de descendientes: " + numeroDescendientes)
}