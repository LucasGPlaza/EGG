// 15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.


let radio = prompt("Ingrese el radio del circulo");

function areaCirculo(radio, pi = 3.14) {

    var area = pi * radio * radio;
    // return `El area del circulo es : ${area}`
    console.log("El area es : " + area);
};

areaCirculo(radio);

function perimetroCirculo(radio, pi = 3.14) {
    var perimetro = pi * 2 * radio;
    console.log("El perímetro es  : " + perimetro);
};

perimetroCirculo(radio);