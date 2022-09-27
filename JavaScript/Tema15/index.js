let nombre = "Claret"
let apellido = "Devigne"

let miNombre = {
    nombre,
    apellido
}

//sessionStorage.setItem("Mi nombre", JSON.stringify(miNombre));
// localStorage.setItem("Mi nombre", JSON.stringify(miNombre));

let miNombreC = JSON.stringify(miNombre);
let fechaC = new Date(2022, 07, 27).toUTCString

document.cookie = `Mi nombre=${miNombreC}; max-age=120`

