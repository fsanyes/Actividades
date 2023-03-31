import {posts} from "./objeto.js";


const objetos = document.getElementById("objetos");
const fragmento = document.createDocumentFragment();
 

for (let post of posts) {

    const lista = document.createElement("LI")
    const titulo = document.createElement("H3")
    const body = document.createElement("P")

    lista.dataset.id = post.id

    lista.textContent = post.userId
    titulo.textContent = post.title
    body.textContent = post.body

    lista.appendChild(titulo)
    lista.appendChild(body)
    fragmento.append(lista)
}
objetos.appendChild(fragmento)
console.log(fragmento)
console.log(posts);
console.log(posts[1].id);

