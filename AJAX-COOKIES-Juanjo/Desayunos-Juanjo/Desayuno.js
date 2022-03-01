class Desayuno{
    constructor(nombre, precio,descripcion, calorias) {
        this.nombreD = nombre
        this.precioD = precio
        this.descripcionD = descripcion
        this.caloriasD = calorias
    }


    visualizar(){
        return "Nombre: " + this.nombreD +"<br>" + "Precio: " + this.precioD+"<br>"+
            "Descripcion: " + this.descripcionD+ "<br>" +"Calorias: " + this.caloriasD 
    }
}