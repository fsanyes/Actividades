// bucle 1 al 10
console.log("bucle 1 al 10")
for (i = 0; i <= 10; i++) {
    console.log(i);
}

// bucle del 5 al 15
console.log("bucle del 5 al 15")
for (i = 5; i <= 15; i++) {
    console.log(i);
}

// bucle del 15 al 1
console.log("bucle del 15 al 1")
for (i = 15; i >= 1; i--) {
    console.log(i);
}

// bucle del 11 al 51 salto 2
console.log("bucle del 11 al 51 salto 2")
for (i = 11; i <= 51; i = i + 2) {
    console.log(i);
}

// bucle del 50 menos 3 hasta el ultimo positivo
console.log("bucle del 50 menos 3 hasta el ultimo positivo")
for (i = 50; i > 0; i = i - 3) {
    console.log(i);
}

// bucle del -6 al 3
console.log("bucle del -6 al 3")
for (i = -6; i <= 3; i++) {
    console.log(i);
}

// bucle caracteres
console.log("bucle caracteres")
for (i = 97; i <=103; i++) {
    console.log(String.fromCharCode(i));
}

// bucle mensaje
console.log("bucle mensaje")
mensaje = "mensaje"
for (i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}
