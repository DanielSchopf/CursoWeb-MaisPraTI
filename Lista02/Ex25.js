const prompt = require('prompt-sync')();

function somaColuna (mat) {
    let somaC=Array(mat[0].length).fill(0)
    for(let j=0;j<20;j++) {
        for(let i=0;i<15;i++) {
            somaC[j]+= parseFloat(mat[i][j])
        }
        console.log("A soma da coluna "+(j+1)+" é: "+somaC[j])
    }

}

let mat=[]
for(let i=0;i<15;i++) {
    mat[i]=[]
    for(let j=0;j<20;j++) {
        mat[i][j]= prompt("Digite um número real: ")
    }
}

somaColuna(mat)