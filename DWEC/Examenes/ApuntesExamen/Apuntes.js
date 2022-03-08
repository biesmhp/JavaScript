//SELECT
function Selects() {
    // Get value from select
   /* <select id="ddlViewBy">
        <option value="1">test1</option>
        <option value="2" selected="selected">test2</option>
        <option value="3">test3</option>
    </select>*/

    var e = document.getElementById("ddlViewBy");
    var strUser = e.value;

// Get text from select
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;

}

// ARRAYS
function Arrays() {
    let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
    // ["Manzana", "Banana", "Naranja"]

    let ultimo = frutas.pop() // Elimina "Naranja" del final
    // ["Manzana", "Banana"]

    let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
    // ["Fresa" ,"Manzana", "Banana"]

    let primero = frutas.shift() // Elimina "Fresa" del inicio
    // ["Manzana", "Banana"]

    // A partir de:["Manzana", "Banana", "Fresa"] sacamos el indice
    let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
    // 1

    let elementoEliminado = frutas.splice(pos, 1)
    // ["Manzana", "Fresa"]

    // Sumar atributos de objetos en un array
    var arr = [{x:1}, {x:2}, {x:4}];
    arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
    // 7

    // Ordenar numeros en un array
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort((a,b)=>a-b);
    // [1, 2, 3, 4, 5]



}

function Strings() {
    // Reemplazar texto
    let texto = "Hola caracola".replace("cara", "coca");


}

function Fechas() {
    // Get dia, mes y año de un objeto
    let [dia, mes, año]    = new Date("año-mes-dia").toLocaleDateString("es-Es").split("/"); //Date() puede ir sin parametros

    // Diferencia de dias
    let diaMs=1000*60*60*24;
    let fecha1 = new Date(fecha1Input.value);
    let fecha2 = new Date(fecha2Input.value);
    if (fecha1 < fecha2) {
        return ((fecha2 - fecha1) / diaMs);
    }
}

function BOM() {


}