const tabla = document.getElementById("gridDatos");
const buscar = document.createElement('input');
buscar.setAttribute('placeholder','Introduce tu búsqueda');
buscar.setAttribute('type','text');
tabla.parentElement.prepend(buscar);

const tbody = tabla.querySelector("tbody");
const filas = Array.from(tbody.rows);

buscar.addEventListener('input', e => {
    const filtro = buscar.value;
    
    filas.forEach(elem => {
    console.log(elem.textContent)
        // let encontrada = false;
        const contenido = elem.textContent;
        if (contenido.includes(filtro)) {
            // console.log("dentro")
            elem.hidden = false
        }
        else {
            elem.hidden = true;
        }
        // for (let i = 0; i<elem.cells.length; i++) {
        //     const contenido = elem.cells[i].textContent;

        //     if (contenido.includes(filtro)) {
        //         // console.log("dentro")
        //         encontrada = true;
        //     }
        //     // else {
        //     //     elem.hidden = true
        //     // }
        // }
        // if (encontrada == true) {
        //     elem.hidden = false;
        // }
        // else {
        //     elem.hidden = true;
        // }
        // encontrada = false;

    })

});
