let a = 8;
let b = 10;

Calcular.prototype.n1=a;
Calcular.prototype.n2=b;
let objCalc = new Calcular();
document.write(objCalc.n1 + "<br>");
document.write(objCalc.n2);