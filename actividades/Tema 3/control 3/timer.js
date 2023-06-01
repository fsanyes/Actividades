// 1.- En este ejercicio, se te pide que desarrolles una aplicación de temporizador. La aplicación debe permitir al usuario ingresar un tiempo y comenzar una cuenta regresiva hasta cero. La aplicación debe cumplir con los siguientes requisitos:

// La aplicación debe tener una interfaz de usuario con un campo de texto para ingresar el tiempo en segundos, un botón para comenzar el temporizador y un indicador para mostrar el tiempo restante.
// La aplicación debe permitir al usuario ingresar el tiempo en segundos.
// La aplicación debe comenzar una cuenta regresiva desde el tiempo ingresado hasta cero, y mostrar el tiempo restante en el indicador.
// La aplicación debe usar localStorage para guardar el último tiempo ingresado, de manera que el usuario pueda recuperarlo aunque cierre y vuelva a abrir la página.
// La aplicación debe usar setInterval o setTimeout para actualizar el indicador de tiempo restante cada segundo.
// La aplicación debe manejar eventos correctamente para que el usuario pueda interactuar con ella sin problemas.

let timer;//Variable que almacena setInterval

cargaTiempo();//Carga los segundos de localStorage
const botonContador = document.getElementById('contador');//Boton que inicia el contador

botonContador.addEventListener('click', () => {
    const tiempo = document.getElementById('tiempo').value;
    if (controlInputTiempo()){
        almacenaUltimoTiempo(tiempo);
        contadorRegresivo(tiempo);
    }

    // contadorAscendente(tiempo.value)
});

//Valida los datos de entrada
function controlInputTiempo() {
    const segundos = +document.getElementById('tiempo').value;

    if (!isNaN(segundos)) return true;
    else return false;
}

function contadorRegresivo(segundos) {
    clearInterval(timer);
    timeDisplay(segundos)
    timer = setInterval(() => {
        segundos--;
        timeDisplay(segundos)

        if(+segundos === 0) {
            timeDisplay(segundos);
            clearInterval(timer);
        }
    }, 1000);
}

function contadorAscendente(limite) {
    let segundos = 0;
    clearInterval(timer);
    timeDisplay(segundos)
    timer = setInterval(() => {
        segundos++;
        timeDisplay(segundos)

        if(segundos === +limite) {
            timeDisplay(segundos);
            clearInterval(timer);
        }
    }, 1000);
}
//Muestra el tiempo restante
function timeDisplay(texto) {
    document.getElementById('timeDisplay').innerHTML = texto;
}
//Funciones para localStorage
function almacenaUltimoTiempo(segundos) {
    localStorage.setItem("tiempo", segundos)
}

function cargaTiempo() {
    const segundos = document.getElementById('tiempo');
    segundos.value = localStorage.getItem("tiempo");
}