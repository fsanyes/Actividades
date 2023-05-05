const imagenGrande = document.getElementById("largeImg");
const listaImagenes = document.getElementById("thumbs");

listaImagenes.addEventListener("click", e =>{

    if (e.target.parentNode.tagName == "A") {
        e.preventDefault();
        imagenGrande.src = e.target.parentNode.href;
    }
    else return;
    
});