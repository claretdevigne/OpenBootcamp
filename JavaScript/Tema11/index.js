class Estudiante {
    #nombre;
    #lista = ["Javascript", "HTML", "CSS"];

    constructor(nombre, asignaturas) {
        this.#nombre = nombre;
        this.#lista = asignaturas;
    }

    getDatos = () => `Mi nombre es ${this.#nombre} y sé ${this.#lista}.`;
}

const claret = new Estudiante("Claret", ["Python", "HTML", "CSS", "Javascript"]);

const datos = claret.getDatos()
console.log(datos)