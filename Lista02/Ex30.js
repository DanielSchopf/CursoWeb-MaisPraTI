const prompt = require('prompt-sync')();

function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite um valor para a posição [${i}][${j}] da matriz: `));
        }
    }
    return matriz;
}

function calcularSomas(matriz) {
    let somasLinhas = new Array(5).fill(0);
    let somasColunas = new Array(5).fill(0);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            somasLinhas[i] += matriz[i][j];
            somasColunas[j] += matriz[i][j];
        }
    }
    return { somasLinhas, somasColunas };
}

function imprimirMatrizEVetores(matriz, somasLinhas, somasColunas) {
    console.log("Matriz:");
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join(" "));
    }

    console.log("\nSomas das Linhas (SL):");
    console.log(somasLinhas.join(" "));

    console.log("\nSomas das Colunas (SC):");
    console.log(somasColunas.join(" "));
}


let matriz = criarMatriz();
console.clear();


let { somasLinhas, somasColunas } = calcularSomas(matriz);


imprimirMatrizEVetores(matriz, somasLinhas, somasColunas);
