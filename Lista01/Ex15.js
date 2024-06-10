const prompt = require('prompt-sync')();

condicao= true
let cont= 0
let somaNum= 0
let peso
let somaPeso= 0

while(condicao) {
    let numero= parseFloat(prompt("Digite um número decimal(0 para sair):"))
    if(numero === 0) {
        condicao= false
        break;
    } else {
        let peso= parseFloat(prompt("Digite um peso para o número que foi digitado:"))
        somaNum += numero * peso
        somaPeso += peso
        cont++
    }
}

let mediaFinal = somaNum/somaPeso
console.log("A media ponderada dos números digitados é: " + mediaFinal.toFixed(2))