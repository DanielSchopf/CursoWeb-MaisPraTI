const prompt = require('prompt-sync')();

function somaMat(mat) {
    let somaLinha4=0
    for(let j=0;j<5;j++) {
        somaLinha4+= mat[3][j]
    }

    let somaColuna2=0
    for(let i=0;i<5;i++) {
        somaColuna2+= mat[i][1]
    }

    let somaDiagonalP=0
    for(let i=0;i<5;i++) {
        somaDiagonalP+= mat[i][i]
    }

    let somaMatriz=0
    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            somaMatriz+= mat[i][j]
        }
    }

    return {somaLinha4, somaColuna2, somaDiagonalP, somaMatriz}
}

let mat=[]

for (let i=0;i<5;i++) {
    mat[i]= []
    for (let j=0;j<5;j++) {
        mat[i][j]= parseFloat(prompt("Digite um valor para a posição na matriz: "))
    }
}
console.clear()

console.log("\nMatriz (5x5):\n");
    for (let i=0;i<5;i++) {
        console.log(mat[i].join(" "));
    }

resultados= somaMat(mat)
console.log("\nSoma de todos os termos da linha 4: "+resultados.somaLinha4)
console.log("Soma de todos os termos da coluna 2: "+resultados.somaColuna2)
console.log("Soma de todos os termos da diagonal principal: "+resultados.somaDiagonalP)
console.log("Soma de todos os termos da matriz: "+resultados.somaMatriz)