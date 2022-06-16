// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

// function Libro(ISBN, titulo, autor, paginas) {
//     this.ISBN = ISBN;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.paginas = paginas;
//     this.mostrarLibro = mostrarLibro;
// }



// var Libro1 = new Libro(prompt("Ingrese el ISBN"), prompt("Ingrese el titulo"), prompt("Ingrese el autor"), prompt("Ingrese el numero de paginas"))
// Libro1.mostrarLibro;



var libro = {
    ISBN : prompt("Ingrese el ISBN"),
    titulo : prompt("Ingrese el titulo"),
    autor : prompt("Ingrese el autor"),
    paginas : prompt("Ingrese el numero de paginas"),
    
}

mostrarLibro;

function mostrarLibro(){
var result = `${this.ISBN} ${this.titulo} ${this.autor} ${this.paginas} ` ;
console.log(result);
}

