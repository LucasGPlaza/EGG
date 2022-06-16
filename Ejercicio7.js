var numLim = parseInt(prompt("Ingrese un número límite"));
var suma = 0;

do {

    var numSum = parseInt(prompt("Ingrese números a sumar"));
    suma = suma + numSum;

} while (numLim>suma);


console.log("El numero Lim es " + numLim + "\n La suma total es " + suma)




