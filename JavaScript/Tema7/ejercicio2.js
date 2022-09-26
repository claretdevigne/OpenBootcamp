const misDatos = {
    nombre: "Claret",
    apellido: "Devigne",
    edad: 31,
    altura: 1.74,
    isDeveloper: true
}

let miEdad = misDatos.edad

let lista = [misDatos, datosChriss = {
    nombre: "Christian", 
    apellido: "Saavedra", 
    edad: 36, 
    altura: 1.70, 
    isDeveloper: false}, datosAlberto = {
    nombre: "Alberto", 
    apellido: "Rodriguez", 
    edad: 27,
    altura: 1.8,
    isDeveloper: true}]

    let listaOrdenada = lista.sort((a, b) => b.edad - a.edad)