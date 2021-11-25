var cadena = "";
while(cadena.length<10){
  cadena = prompt("Introduce una cadena con más de 10 caracteres");
}
console.log(typeof cadena);
console.log(cadena);

let octavo = cadena.charAt(8);
console.log("El octavo caracter: "+octavo);

let primerCaracter = cadena.indexOf(octavo);
console.log("Primera aparicion: "+primerCaracter);

let ultimoCaracter = cadena.lastIndexOf(octavo);
console.log("Ultima aparicion: "+ultimoCaracter);

// Debo sumar uno al primer caracter para que no lo incluya. Con slice(inicio,final) incluyo el caracter inicial pero no es final, por defecto
let extraido = cadena.slice(primerCaracter+1,ultimoCaracter);
console.log("Texto entre la primera y última aparición: "+extraido);

////////////////////////////////

function paresMayus(str){
  var nuevaCadena = "";
  for (let position in str) {
    if (position%2==0) {
      nuevaCadena+=str.charAt(position).toUpperCase();
    }else{
      nuevaCadena+=str.charAt(position).toLowerCase();
    }
  }
  return nuevaCadena;
}

console.log("Posiciones pares a mayúsculas e impares a minúsculas:\n "+paresMayus(cadena));
