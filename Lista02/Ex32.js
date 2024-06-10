const prompt = require('prompt-sync')();

function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 13; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite um valor para a posição [${i}][${j}] da matriz: `));
        }
    }
    return matriz;
}

function maiorModulo(linha) {
    let maior = Math.abs(linha[0]);
    for (let i = 1; i < linha.length; i++) {
        if (Math.abs(linha[i]) > maior) {
            maior = Math.abs(linha[i]);
        }
    }
    return maior;
}

function modificarMatriz(matriz) {
    let matrizModificada = [];
    for (let i = 0; i < 12; i++) {
        let maior = maiorModulo(matriz[i]);
        matrizModificada[i] = matriz[i].map(valor => valor / maior);
    }
    return matrizModificada;
}

function imprimirMatriz(matriz, mensagem) {
    console.log(mensagem);
    for (let i = 0; i < 12; i++) {
        console.log(matriz[i].join(" "));
    }
}

let matriz = criarMatriz();
console.clear();

imprimirMatriz(matriz, "Matriz Lida:");
let matrizModificada = modificarMatriz(matriz);
imprimirMatriz(matrizModificada, "\nMatriz Modificada:");
