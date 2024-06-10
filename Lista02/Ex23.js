let mat= []

for(let i=0;i<7;i++) {
    mat[i]=[]
    for(let j=0;j<7;j++) {
        if(i===j) {
            mat[i][j]= 1
        } else {
            mat[i][j]= 0
        }
    }
}

for (let i = 0; i < 7; i++) {
    console.log(mat[i].join(" "));
}
