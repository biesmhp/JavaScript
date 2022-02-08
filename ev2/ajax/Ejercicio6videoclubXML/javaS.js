addEventListener('load',inicio,false);

function inicio() {
  envioform();
  function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getXML(this);
      }
    };

    xhr.open ('GET', './videoclub.xml',true);
    xhr.send (null);

    function getXML(xml) {
        var xmlDoc = xml.responseXML;
        console.log(xmlDoc.documentElement.nodeName + xmlDoc.documentElement.nodeType);
        // console.log(xmlDoc.getElementsByTagName("Titulo")[0].innerHTML);
        console.log(xmlDoc.getElementsByTagName("Pelicula")[0].childNodes[1].textContent);
        console.log(xmlDoc.getElementsByTagName("Pelicula").length);
        
    }

    // getNodes();
    function getNodes() {
      console.log(xhr[0].childNodes[0].nodeValue);
    }
  }
}
