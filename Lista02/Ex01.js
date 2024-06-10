const prompt= require('prompt-sync')()

function tempoVida(numA, numC) {
    let minDia = numC * 10
    let minAno = minDia * (numA*365)
    let diasPerdidos=  minAno/1440

    console.log("Você já perdeu aproximadamente " + diasPerdidos.toFixed(0) + " dias de vida por causa do cigarro")
}

let numA = prompt("Há quantos anos você fuma? ")
let numC= prompt("Quantos cigarros por dia você fuma? ")

tempoVida(numA, numC)