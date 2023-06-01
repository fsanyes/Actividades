// 2.- Usando programación funcional (filter, map, reduce) haz en el archivo app.js las siguientes funciones:

// una función llamada fotosPorUsuario, que devolverá un array con los ids, títulos y urls de las fotos de un usuario. Tendrá como parámetros el id de usuario, el array de álbumes y el array de fotos
// una función llamada fotosPorUsuarioYTitulo, que devolverá un array con los ids y urls de las fotos de un usuario con un contenido en el título. Tendrá como parámetros el id de usuario, el texto a buscar en el título de la foto, el array de albumes y el array de fotos.
// una función llamada sumaFotosPorUsuarioYTitulo, que devolverá la suma de los ids de las fotos de un usuario con un contenido en el título. Tendrá como parámetros el id de usuario, el texto a buscar en el título, el array de álbumes y el array de fotos
// El array de álbumes lo he obtenido de  https://jsonplaceholder.typicode.com/albums , debéis importar la lista de álbumes del archivo albums.js

// El array de fotos lo he obtenido de https://jsonplaceholder.typicode.com/photos , debéis importar la lista de fotos del archivo photos.js

// Probar el funcionamiento de las funciones. Como se trata de programación funcional, no podéis usar ningún tipo de bucles.

// Implementar las 3 funciones en app.js y mostrar ejemplos de funcionamiento por consola. 
import {albumes} from "./albums.js";
let listaPhotos;
fetch("https://jsonplaceholder.typicode.com/photos")
                .then(resultado => resultado.json())
                .then(photos => listaPhotos = photos)
                .catch(error => console.error(error));
console.log(albumes);
// setTimeout(() => console.log(listaPhotos), 200);
const contenedor = document.getElementById('contenedor');

// console.log(arr)
console.log(fotosPorUsuario(123123,"hola","adios"));

function fotosPorUsuario(idUsuario, albumes, fotos) {
    const array = [];
    const foto = {
        id: idUsuario,
        album: albumes,
        foto: fotos
    }
    array.push(foto);
    return array;

}
function fotosPorUsuarioYTitulo(idUsuario, titulo, albumes, fotos) {
    
}
function sumaFotosPorUsuarioYTitulo(idUsuario, titulo, albumes, fotos) {
    
}


// console.log(counter(60));

// console.log(albumes);