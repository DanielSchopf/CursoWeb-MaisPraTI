let mat=[]
let vetC=[]

for(let i=0;i<6;i++) {
    mat[i]=[]
    for(let j=0;j<8;j++) {
        mat[i][j]= Math.floor(Math.random()*31)-10
    }
}

for(let i=0;i<6;i++) {
    let numNegativo= 0
    for(let j=0;j<8;j++) {
        if(mat[i][j] < 0) {
            numNegativo++
        }
    }
    vetC[i]= numNegativo
}
console.log("Matriz:\n")
for(let i=0;i<6;i++) {
    console.log(mat[i].join(" | "))
}
console.log("\n")
for(let i=0;i<6;i++) {
    console.log("Na linha "+(i+1)+" existem "+vetC[i]+" números negativos")
}
