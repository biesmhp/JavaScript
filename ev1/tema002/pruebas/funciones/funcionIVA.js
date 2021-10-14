function aplicar_IVA(valorProducto, IVA){
  var productoConIVA = valorProducto * IVA;
  // alert(“El precio del producto, aplicando el IVA del “ + IVA + “ es: “ + productoConIVA);
  return valorProducto+productoConIVA;
}
var valor = parseFloat(prompt("Introduce un valor"));
var IVA = parseFloat(prompt("Introduce el IVA"));
var productoConIVA = aplicar_IVA(valor, IVA);
document.write("El valor del producto sin IVA es "+valor+", el IVA es de "+IVA+". Su valor con IVA incluido es de: "+productoConIVA);
