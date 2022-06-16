//Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
//'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.
// function Persona(nombre, edad, sexo, peso, altura){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.sexo=sexo;
//     this.peso=peso;
//     this.altura=altura;
//     this.mostrarPersona =mostrarPersona;
// }

// var Persona1=new Persona('Lucas', '29', 'H', '72', '173');
// var Persona2=new Persona('Peki', '29', 'M', '56', '152');

// function mostrarPersona(){
//     var Person=`${this.nombre} ${this.edad} ${this.sexo} ${this.peso} ${this.altura}`;
//     console.log(Person);
// }

// Persona1.mostrarPersona;
// Persona2.mostrarPersona;

var persona = new Object();
persona.nombre = 'Lucas';
persona.edad = 29;
persona.sexo = 'H';
persona.peso = 72;
persona.altura = 173;

console.log(persona);