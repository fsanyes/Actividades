const tabla = document.getElementById("grid")

tabla.addEventListener("click", e => {
    //Comprueba si el click es en el header y guarda la informacion del seleccionado
    if (e.target.tagName === "TH") {
        let th = e.target;
        console.log(e.target.tagName)
        console.log(tabla.rows)
    }
    else return;
    
})