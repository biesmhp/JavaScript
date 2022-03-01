addEventListener('load',inicio,false);

function inicio() {
  // Array de productos
  var arrProductos = ["leche","agua","zumo","yogures","mantequilla","verduras","queso","jamón","pescado","carne"];

  btnSacarProductos = document.querySelector("#btnSacar");
  btnSacarProductos.addEventListener('click',guiSacar,false);

  generarLista(arrProductos);
  
  btnMeterProductos = document.querySelector("#btnMeter");
  btnMeterProductos.addEventListener('click',meterProductos,false);
}

function guiSacar() {

}

function generarLista(arrProductos) {
  // Generamos una lista checkbox con los productos
  for (var i = 0; i < arrProductos.length; i++) {
    // Contenedor de la linea
    let cajaP = document.createElement('div');
    cajaP.id = 'caja'+arrProductos[i];
    // Input checkbox
    let producto = document.createElement('input');
    producto.type = 'checkbox';
    producto.name = 'nevera';
    producto.id = 'producto'+arrProductos[i];
    producto.value = arrProductos[i];
    // Texto a visualizar
    let textNode = document.createTextNode(arrProductos[i]);
    // Caja con la cantidad
    let cantidad = document.createElement('input');
    cantidad.type = 'number';
    cantidad.min = 0;
    cantidad.max = 10;
    cantidad.value = 0;
    cantidad.size = 1;
    cantidad.id = "cantidad"+arrProductos[i];
    // Lo añadimos al HTML
    cajaP.appendChild(producto);
    cajaP.appendChild(textNode);
    cajaP.appendChild(cantidad);
    document.querySelector("#listProductos").appendChild(cajaP);
  }
}

function meterProductos() {
  let arrProductos = document.querySelectorAll("[name='nevera']");
  for (var i = 0; i < arrProductos.length; i++) {
    // Seleccionamos solo los productos marcados
    if (arrProductos[i].checked) {
      // console.log(arrProductos[i].value);
      let textoID = "#cantidad"+arrProductos[i].value;
      let cantidad = document.querySelector(textoID);
      // console.log(cantidad.value);
      localStorage.setItem(arrProductos[i].value, cantidad.value);
      // console.log(localStorage.getItem(arrProductos[i].value));
    }
  }
}
