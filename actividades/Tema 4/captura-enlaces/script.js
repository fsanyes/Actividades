const contenido = document.getElementById("contents");
console.log(contenido);
const enlaces = contenido.querySelectorAll("a");
console.log(enlaces);

for (enlace of enlaces) {
    console.log(enlace)
    const destino = enlace.textContent
    enlace.addEventListener("click", (e) =>{
        console.log(e)
        
        const confirmar = confirm("quieres ir a "+ destino);
        if (!confirmar) {
            e.preventDefault();
        }
    });
    
}
contenido.parentElement.prepend(enlaces);

console.log(enlaces);