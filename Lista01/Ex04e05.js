const prompt= require('prompt-sync')();

function aprovacaoAluno(nota1, nota2) {
    let notaFinal = (nota1 + nota2) / 2
    console.log("Media Final: " + notaFinal.toFixed(2));
    if(notaFinal>= 6.0){
        console.log("PARABÉNS! Você foi aprovado.")
    } else {
        console.log("Você foi REPROVADO! Estude mais.")
    }
}

let nota1= parseFloat(prompt("Digite a nota 01: "))
let nota2= parseFloat(prompt("Digite a nota 02: "))
aprovacaoAluno(nota1, nota2)