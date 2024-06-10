function numPrimo(numero) {
    for(let i = 2; i< numero; i++) {
        if(numero % i === 0) {
            return false
        }
    }
    return true
}

let cont= 0
let numero= 101
console.log("Os 50 primeiros números primos maiores que 100 são: ")
while(cont<50) {
    if(numPrimo(numero)) {
        console.log(numero)
        cont++
    }
    numero++
}