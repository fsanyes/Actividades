const preguntas =["1: Escocia tiene a la flor del cardo por simbolo",
    "2: En el parchis tradicional se utilizan 20 fichas como maximo",
    "3: Francia es el segundo pais mas grande de Europa",
    "4: Gengis Kan fue un guerrero mongol que se convirtio en emperador de China",
    "5: El frances es el idioma oficial de Andorra",
    "6: Vicente Aleixandre fue el primer Nobel español que gano un premio Planeta",
    "7: La India fue el primer pais en utilizar el papel, lo hicieron cien años despues de la muerte de Cristo"]
const respuestas =[true,false,true,true,false,false,false]
var index=0;

function respuestaBool(bool) {
    var texto= document.getElementById('texto');
    if (bool==respuestas[index]) {
    texto.style.color = "green";
    }
    else {
        texto.style.color = "red";
    }
}

function respuesta(color) {
    var texto= document.getElementById('texto');
    texto.style.color = color;
}

function siguientePregunta() {
    var texto= document.getElementById('texto');
    texto.style.color = "black";
    texto.innerHTML=preguntas[index];

    index++;
}
/*
function cambiaColor() {
    var texto= document.getElementById('texto')
    console.log(texto)

    texto.textContent=preguntas[x];
    console.log(preguntas.length)
    if (texto.textContent().match("verdadero"))
    {
        texto.style.color = "green"
        x++
    }
    else if (texto.textContent().match("falso"))
    {
        texto.style.color = "red"
        x++
    }
}
*/
/*
var x;
var elementId=["verdadero","falso"];
var idprueba=document.getElementById("texto").id;
console.log(idprueba)
function prueba() {
    if (document.getElementById("verdadero").id==elementId[0])
    {
        verdadero();
    }
    else if (document.getElementById("falso").id==elementId[1])
    {
        falso();
    }
}
*/



/*
function verdadero() {
    var texto= document.getElementById('texto')
    texto.style.color = "green";
    setInterval(10);
    cambiatexto();
}
function falso() {
    var texto= document.getElementById('texto')
    texto.style.color = "red";
    setInterval(10);
    cambiatexto();
}
function cambiaPregunta() {
    var texto= document.getElementById('texto')
    x++;
    texto.textContent=preguntas[x];
    if (x>preguntas.length) x=0
}
console.log(x)
*/