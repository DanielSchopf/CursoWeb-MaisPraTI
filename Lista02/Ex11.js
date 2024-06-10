const prompt= require('prompt-sync')()

function calculoPA(primeiroTermo, razao, numTermos) {
    for(let i = 1; i<numTermos; i++) {
        let termo = termoPA(primeiroTermo, razao, i)
        console.log("Termo "+ i +": "+termo)
    }
    let soma= somaPA(primeiroTermo, razao, numTermos)
    console.log("A soma dos "+numTermos+" primeiros termos é: "+soma)
}

function termoPA(primeiroTermo, razao, indice) {
    return primeiroTermo + razao*(indice-1)
}
function somaPA(primeiroTermo, razao, n) {
    let soma= n*(primeiroTermo+(n-1)*razao)/2
    return soma
}

let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "))
let razao= parseFloat(prompt("Digite a razão da PA: "))
let numTermos= 10

calculoPA(primeiroTermo, razao, numTermos)