const prompt= require('prompt-sync')();

function parImpar(numero) {
    if(numero % 2 === 0) {
        console.log("O número é PAR!")
    } else {
        console.log("O número é ÍMPAR!")
    }
}

condicao= true
while(condicao) {
    let num= parseInt(prompt("Digite um número inteiro: "))
    if(num <0 || isNaN(num)) {
        console.log("Programa finalizado")
        condicao= false
    } else {
        parImpar(num)
    }
}