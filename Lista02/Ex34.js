const prompt = require('prompt-sync')();

function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite um valor para a posição [${i}][${j}] da matriz: `));
        }
    }
    return matriz;
}

function modificarMatriz(matriz) {
    for (let i = 0; i < 50; i++) {
        let elementoDiagonalPrincipal = matriz[i][i];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= elementoDiagonalPrincipal;
        }
    }
    return matriz;
}

function imprimirMatriz(matriz, mensagem) {
    console.log(mensagem);
    for (let i = 0; i < 50; i++) {
        console.log(matriz[i].join(" "));
    }
}

let matriz = criarMatriz();
console.clear();

imprimirMatriz(matriz, "Matriz Lida:");
let matrizModificada = modificarMatriz(matriz);
imprimirMatriz(matrizModificada, "\nMatriz Modificada:");
