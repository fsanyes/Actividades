const miObjeto = {
    nombre: "Paco",
    lugar: "IES pedro jimenez montoya",
    nombreCompleto: function () {
        return "Francisco sanchez yeste";
    }
};
// Utilizar un for in en vez de forEach
const propiedadesObjeto = (miObjeto) => {
    for (let propiedades in miObjeto) {
        console.log(propiedades);
    }
};

console.log(propiedadesObjeto(miObjeto));


