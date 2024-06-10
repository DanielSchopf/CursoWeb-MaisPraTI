const prompt= require('prompt-sync')();

function repetir10(numero){
    for(let i=0; i<10; i++){
        console.log(numero)
    }
}

let num= parseInt(prompt("Digite um número inteiro: "))
repetir10(num)