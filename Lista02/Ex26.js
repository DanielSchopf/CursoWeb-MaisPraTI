function multiplicaMatriz(matA, matB) {
    let matP=[]
    let linha= matA.length
    let coluna= matA[0].length
    for(let i=0;i<linha;i++) {
        matP[i]=[]
        for(let j=0;j<coluna;j++) {
            matP[i][j] = matA[i][j]*matB[i][j]
        }
    }
    return matP
}

let matA=[[5, 4, 7, 9,10],
        [8, 5, 12, 3, 9],
        [9, 7, 2, 1, 8]];

let matB=[[7, 9, 10 ,23, 4],
        [3, 5, 7, 2, 3],
        [6, 8 ,9, 14, 2]];

let resultado= multiplicaMatriz(matA, matB)

console.log("Matriz Produto:\n")
for(let i=0;i<resultado.length;i++) {
    console.log(resultado[i].join(" "))
}