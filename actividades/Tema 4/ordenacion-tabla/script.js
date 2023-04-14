const tabla = document.getElementById("grid")
const tbody = grid.querySelector("tbody")

console.log(Array.from(tbody.rows))

tabla.addEventListener("click", e => {
    //Comprueba si el click es en el header y guarda la informacion del seleccionado
    if (e.target.tagName === "TH") {
        let th = e.target;
        // console.log(th.dataset.type)//Obtenemos el tipo de dato que tiene la columna
        // console.log(th.cellIndex)//Numero del array de celdas
        ordena(th.cellIndex, th.dataset.type)
    }
    else return;
})

function ordena(col, tipoDato) {

    // let datos = new Array;
    let filas = Array.from(tbody.rows)
    //En funcion del tipo de dato realiza una ordenacion diferente
    let compara;

    switch (tipoDato) {
        case "number":
            //Ordena por numeros
            console.log("Caso numero");
            //Funcion que compara por numero
            compara = (a,b) => {
                return Number(a.cells[col].innerHTML) - +(b.cells[col].innerHTML);
            }
            
            // console.log(filas[0].cells[0].innerHTML)

            // for (i = 0; i < filas.length; i++) {
            //     datos[i] = filas[i].cells[col];
            // }
            // console.log(datos)

            // console.log(col)
            // console.log(tbody.rows[col].innerHTML)
            break;

        case "string":
            // Ordena por letras
            console.log("Caso string");
            //Funcion que compara por caracteres
            compara = (a, b) => {
                return a.cells[col].innerHTML.localeCompare(b.cells[col].innerHTML)
            }

            break;
        // console.log(filas[2].cells[1].innerHTML)

        // for (i = 0; i < filas.length; i++) {
        //     datos[i] = filas[i].cells[col]
        // }
        // console.log(datos) 
    }
    //Ordena las tr de la tabla
    filas.sort(compara)
    // console.log(filas)
    // Inserta la nueva tabla ordenada en tbody
    tbody.append(...filas)
}