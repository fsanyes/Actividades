// const miArray = ["Perico","Lucas","Renata", "12", "lucas", "6", "12", "Lucas"];
// // const miArraySinRepeticiones = (miArray) => miArray.filter(miArray => {


   

const unica = (miArray) => {
    let copia = []
    for (valor of miArray) {
        if ( ! copia.includes(valor)) copia.push(valor);
    }
    return copia;    
};

const miArray = ["Perico", "Lucas", "Renata", 12, "Lucas", 6, 12, "Lucas"];
const miArraySinRepeticiones = unica(miArray);
console.log(miArraySinRepeticiones); // debe mostrar ["Perico", "Lucas", "Renata", 12, 6]
