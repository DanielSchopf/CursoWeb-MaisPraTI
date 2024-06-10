const prompt = require('prompt-sync')();

function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite um valor para a posição [${i}][${j}] da matriz: `));
        }
    }
    return matriz;
}

function calcMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i];
    }
    return soma / 3;
}

function modificarMatriz(matriz, mediaDiagonalSecundaria) {
    for (let i = 0; i < 3; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }
    return matriz;
}

function imprimirMatriz(matriz, mensagem) {
    console.log(mensagem);
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(" "));
    }
}

let matriz = criarMatriz();
console.clear();

imprimirMatriz(matriz, "Matriz Lida:");
let mediaDiagonalSecundaria = calcMediaDiagonalSecundaria(matriz);
let matrizModificada = modificarMatriz(matriz, mediaDiagonalSecundaria);
imprimirMatriz(matrizModificada, "\nMatriz Modificada:");
