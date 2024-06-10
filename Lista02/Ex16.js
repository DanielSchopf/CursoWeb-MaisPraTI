const prompt= require('prompt-sync')()

function geraNum() {
    return Math.floor(Math.random()*100)
}

let numeros= []

for(let i=0;i<20;i++) {
    numeros[i]= geraNum()
}

console.log("Numeros gerados:\n"+numeros)
numeros.sort()
console.log("\nNúmeros ordenados crescentemente:\n"+numeros)