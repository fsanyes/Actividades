

const lista = document.querySelectorAll("li")
const tree = document.getElementById("tree")

// Introduce un span en cada linea
lista.forEach(linea => {
    let span = document.createElement("SPAN")
    linea.prepend(span);
    span.append(span.nextSibling)

})

//Controla el arbol de listas
tree.addEventListener("click", e => {
    
    //Controla si se hizo click en el span
    if (e.target.tagName === "SPAN") {
        console.log("Apuntando a span");
    }
    else {
        console.log("click fuera");
        return;
    }

    //Busca si la lista contiene un nodo hijo
    let ulHijo = e.target.parentNode.querySelector('ul')//Comprueba que el ul seleccionado contiene un nodo hijo
    if (ulHijo) {

        //Oculta el nodo hijo
        console.log("tiene hijo")
        ulHijo.hidden = !ulHijo.hidden
    }
    else console.log("no tiene hijo")

})

