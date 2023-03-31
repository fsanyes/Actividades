numeros = [2,3,1];

function ordenaNumeros(numeros) {
    numerosOrdenados = [];
    numerosOrdenados = numeros.sort((a,b) => a-b);
    return numerosOrdenados;
}
alert("numeros ordenados: " + ordenaNumeros(numeros));