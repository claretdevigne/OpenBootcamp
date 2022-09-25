const listaCompra = ["Banana", "Tomates", "Pollo", "Avena", "Capuccino"];

listaCompra.push("Aceite de Girasol");

listaCompra.pop("Aceite de Girasol");

const listaPeliculas = [
    pelicula1 = {
        titulo: "Harry Potter 1", 
        director: "Chris Columbus", 
        fecha: new Date(23, 10, 2001)},
    
    pelicula2 = {
        titulo: "Harry Potter 2", 
        director: "Chris Columbus", 
        fecha: new Date(29, 10, 2002)},
    
    pelicula3 = {
        titulo: "Harry Potter 3", 
        director: "Alfonso Cuarón", 
        fecha: new Date(4, 5, 2004)
}];

const listaPeliculas2010 = listaPeliculas.filter(valor => valor.fecha > Date(1, 0, 2010));

const listaDirectores = listaPeliculas.map(valor => valor.director);

const listaTitulos = listaPeliculas.map(valor => valor.titulo);

const listaTitulosDirectoresConcat = listaDirectores.concat(listaTitulos);

const listaTitulosDirectoresPropag = [...listaDirectores, ...listaTitulos];