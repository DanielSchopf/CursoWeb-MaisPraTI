const prompt = require('prompt-sync')();

function multiplicaMatriz(matM, multiplicador) {
    let vetV=[]
    let index=0
    for(let i=0;i<6;i++){
        for(let j=0;j<6;j++) {
            vetV[index]= matM[i][j]*multiplicador
            index++
        }
    }
    return vetV
}


let matM=[]

for(let i=0;i<6;i++) {
    matM[i]=[]
    for(let j=0;j<6;j++) {
        matM[i][j]= parseInt(prompt("Digite um número para a matriz: "))
    }
}

let multiplicador= prompt("Por qual valor você deseja multiplicar os números da matriz? ")

let resultado= multiplicaMatriz(matM, multiplicador)
console.log("Vetor resultante da multiplicação dos valores da matriz: "+resultado)
