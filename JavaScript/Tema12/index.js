function fibonacci(num) {
    let n = 1;
    let a = 0;
    let suma = 0;
    lista = []

    for (let i = 1; i <= num; i++){
        suma = a + n;
        a = n;
        n = suma;

        lista = [...lista, n];
    }

    console.log(lista)
}

fibonacci(6)