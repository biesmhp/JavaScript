addEventListener('load',inicio,false);

var btnIntroducir;
var btnComprar;
var btnVer;

var productoIntroducir;
var cantidadIntroducir;
var buscarProducto;
var cantidadComprar;

var arrayProductos=[];

var divMostrarArray;


function inicio(){

    btnIntroducir = document.getElementById("btnProductoParaIntroducir")
    btnComprar = document.getElementById("btnBuscarProductoComprar")
    btnVer = document.getElementById("verProductos")

    productoIntroducir = document.getElementById("productoParaIntroducir");
    cantidadIntroducir = document.getElementById("cantidadParaIntroducir");
    buscarProducto = document.getElementById("buscarProductoComprar");
    cantidadComprar = document.getElementById("cantidadProductoComprar");
    
    divMostrarArray = document.getElementById("mostrarArray");

    btnIntroducir.addEventListener('click', () => {
        arrayProductos[productoIntroducir.value] = cantidadIntroducir.value;
        
        productoIntroducir.value = ""
        cantidadIntroducir.value = ""
        
    }, false)

    btnComprar.addEventListener('click', () => {
        var estaEnElArray = false;
        var productoParaComprar = "";

        for(var clave in arrayProductos) {
           
           if(clave == buscarProducto.value){
                estaEnElArray = true;
                productoParaComprar = buscarProducto.value 
           }
        }

        if(estaEnElArray == true && arrayProductos[productoParaComprar]>=cantidadComprar.value){
            alert(`Se han comprado ${cantidadComprar.value} unidades de ${productoParaComprar}`)
            arrayProductos[productoParaComprar] = arrayProductos[productoParaComprar]-cantidadComprar.value;
        }else{
            alert("No se puede comprar")
        }
    }, false)

    btnVer.addEventListener('click', () => {
        for(var clave in arrayProductos) {
            //document.write(clave+": " +arrayProductos[clave] + "<br>");
            divMostrarArray.innerHTML += "<strong>"+ clave+"</strong>"+": " +arrayProductos[clave] + "<br>";
        }

    }, false)
}