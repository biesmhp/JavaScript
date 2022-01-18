addEventListener('load',inicio,false);

function inicio() {
  // Botones del HTML
  // btnEvent = document.getElementById('btnConfirmar');
  // btnEvent.addEventListener('click',confirmacion,false);

  // Obtener los nombres de los atributos
  var el = document.getElementById("primerparrafo");
  // console.log(el);
  for (var i = 0, atts = el.attributes, n = atts.length, arr = []; i < n; i++){
      arr.push(atts[i].nodeName);
  }
  console.log(arr);

  // Obtener los nombres y valores de los atributos
  var nodes=[], values=[];
  for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++){
      att = atts[i];
      nodes.push(att.nodeName);
      values.push(att.nodeValue);
  }
  console.log("Atributos: "+nodes+" con Valores: "+values);

  console.log("Atributo Class: "+el.getAttribute("class"));
}
