export class Contactos{
    nombre: "";
    apellido: "";
    email: "";
    estado: Boolean;

    constructor(nombre, apellido, email, estado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estado = estado;
    }
}