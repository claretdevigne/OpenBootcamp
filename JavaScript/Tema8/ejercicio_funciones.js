// Función flecha que devuelve siempre true
const funcionSinP = () => true;

// Función asincrona con promesa y Timeout
function funcionAsincrona() {
    if (true) {
        return new Promise((resolve, reject) => {
            setTimeout(() => console.log("Hola, soy una promesa."), 5000)
        })
    }
}

//Función generadora que devuelve un ID
function* generador() {
    let i = 1;
    while(i < 10){
        yield i++;
    }
}
let gen = generador();

funcionSinP()
funcionAsincrona()
console.log(gen.next())