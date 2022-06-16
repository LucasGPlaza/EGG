function palabraLarga(palabra){
    let arr = palabra.split(" ");
    arr.sort((a , b)=>b.length-a.length);
alert (`La palabra mas larga es: ${arr[0]}`);
};
palabraLarga(prompt("Escriba una palabra!"));