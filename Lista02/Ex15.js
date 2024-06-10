const prompt= require('prompt-sync')()

function buscaNumPar(num) {
    return num % 2 === 0
}

let numeros= []
for(let i=0;i<10;i++) {
    let num = parseInt(prompt("Digite um número: "))
    numeros[i]= num
}
console.clear()
for(let j=0;j<10;j++) {
    if(buscaNumPar(numeros[j])) {
        console.log("O número "+numeros[j]+ " é par e está na posição "+ (j+1))
    }
}