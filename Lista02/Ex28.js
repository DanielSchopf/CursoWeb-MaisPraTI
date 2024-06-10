const prompt = require('prompt-sync')();

function somaAcima(mat) {
    let soma=0
    for(let i=0;i<10;i++) {
        for(let j= i+1;j<mat[i].length;j++) {
            soma +=mat[i][j]
        }
    }
    return soma
}

function somaAbaixo(mat) {
    let soma=0
    for(let i=1;i<10;i++) {
        for(let j=0;j<i;j++) {
            soma+= mat[i][j]
        }
    }
    return soma
}


let mat=[]

for(let i=0;i<10;i++) {
    mat[i]= []
    for(let j=0;j<10;j++) {
        mat[i][j]=parseFloat(prompt("Digite um valor para a posição da matriz: "))
    }
}
console.clear()

let acima= somaAcima(mat)
let abaixo = somaAbaixo(mat)

console.log("Matriz:")
for(let i=0;i<10;i++) {
        console.log(mat[i].join(" "))
}

console.log("A soma dos elementos acima da diagonal principal da matriz é: "+acima)
console.log("A soma dos elementos abaixo da diagonal principal da matriz é: "+abaixo)