const prompt = require('prompt-sync')();

condicao= true
let cont= 0
let media= 0

while(condicao) {
    let numero= parseFloat(prompt("Digite um número decimal(0 para sair):"))
    if(numero === 0) {
        condicao= false
        break;
    } else {
        media += numero
        cont++
    }
}

let mediaFinal = media/cont
console.log("A media final dos números digitados é: " + mediaFinal.toFixed(2))