tam = prompt("Ingresa el tamaño del rombo :");

function rombo(tam) {
    
    espacio = '.';
    simbolo = '*';
    cadena = "";
    for (i = 0; i < tam; i++) {
        
        for (j = tam-1; j > i; j--) {
            cadena = cadena + espacio;
        }
        for (k = 0; k < i+1; k++) {
            cadena = cadena + simbolo;
            
        }
        
        console.log(cadena);
        cadena = "";
        
    }
    for (tam ; tam > 0; tam--) {
        for (i = tam-1; i < tam; i++)
        {
            cadena = cadena + espacio;
        }
        console.log(cadena);
        cadena = "";
    }
}

rombo(tam);


