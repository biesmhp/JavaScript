addEventListener("load", inicio, false);

function inicio() {
    let p = document.querySelector("p");
    alert(p.attributes.length);

    let nombreAtributos = "";
    for (const attribute of p.attributes) {
        nombreAtributos += `${attribute.name} ${attribute.value} \n`;
    }
    alert(nombreAtributos);

    alert(p.attributes[1].value);
}