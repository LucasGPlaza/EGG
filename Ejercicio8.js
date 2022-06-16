var min = 0;
var max = 0;
do {
    var num = prompt ("Ingrese un número")
if (num != 0) {
    min = num;
    max = num;
 } else if ( num<min){
     min=num;
 }if (num>max){
max = num;
 }

} while (num != 0 );

console.log(min);
console.log(max);
