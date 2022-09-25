let i = 1;
let res = 1;

while (i < 100) {
    res *= (i + 1)
    i++
    if (i == 10) {
        console.log(res)
        break;
    }
}
