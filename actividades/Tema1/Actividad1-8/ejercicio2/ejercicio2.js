
let num = 0;
function cambiarImg() {
    let img = document.getElementById('foto');
    console.log(num);
    if (num==0) {
        img.src = "src/kk.jpg"
    }
    else if (num==1) {
        img.src = "src/kk2.jpg"
    }
    else if (num==2) {
        img.src = "src/logo2.png"
    }
    else if (num==3) {
        img.src = "src/logo3.png"
    }
    else if (num==4) {
        img.src = "src/img4.png"
    }
    num++;
    if (num>=5) num=0;
}

const imagenes = ["src/kk.jpg","src/kk2.jpg","src/logo2.png","src/logo3.png","src/img4.png"];
function cambiarImgArr() {
    let img = document.getElementById('foto');
    img.src = imagenes[num];
    num++
    if (num>imagenes.length) num=0;
}

function clickBoton() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click",cambiarImg)
}