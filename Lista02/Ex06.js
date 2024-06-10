const prompt= require('prompt-sync')()

function adivinhaNum(num) {
    let numSorteado = Math.floor(Math.random()*5 + 1)
    if(num === numSorteado) {
        console.log("Parabéns, você acertou!")
    } else {
        console.log("Número errado!")
    }
    console.log("O número sorteado foi: " + numSorteado)

}
let numero = parseInt(prompt("Qual número de 1 a 5 você acha q será sorteado? "))
if(isNaN(numero) || numero > 5 || numero < 1) {
    console.log("Valor inválido!")
} else {
    adivinhaNum(numero)
}
