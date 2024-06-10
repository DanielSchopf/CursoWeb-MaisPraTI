const prompt= require('prompt-sync')();

function numMaior(num1, num2) {
    if(num1>num2) {
        console.log("Ordem crescente dos números: " + num1 + ", " + num2)
    } else if (num1<num2) {
        console.log("Ordem crescente dos números: " + num2 + ", " + num1)
    } else {
        console.log("Os números são iguais!")
    }
}

let numero1= parseInt(prompt("Digite o primeiro número inteiro: "))
let numero2= parseInt(prompt("Digite o segundo número inteiro: "))
numMaior(numero1, numero2)