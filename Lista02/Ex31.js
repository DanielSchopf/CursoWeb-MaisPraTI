const prompt = require('prompt-sync')();

function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 30; i++) {
        matriz[i] = [];
        for (let j = 0; j < 30; j++) {
            matriz[i][j] = parseInt(prompt(`Digite um valor para a posição [${i}][${j}] da matriz: `), 10);
        }
    }
    return matriz;
}

function contarMatriz(matriz, A) {
    let count = 0;
    let matrizX = [];

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === A) {
                count++;
            } else {
                matrizX.push(matriz[i][j]);
            }
        }
    }
    return { count, matrizX };
}

function imprimirResultados(count, matrizX) {
    console.log(`O valor ${A} aparece ${count} vezes na matriz.`);

    console.log("\nMatriz X (elementos diferentes de A):");
    let index = 0;
    for (let i = 0; i < 30; i++) {
        let linha = [];
        for (let j = 0; j < 30; j++) {
            if (index < matrizX.length) {
                linha.push(matrizX[index]);
                index++;
            } else {
                linha.push("-");
            }
        }
        console.log(linha.join(" "));
    }
}

const A = parseInt(prompt("Digite o valor de A: "), 10);

let matrizV = criarMatriz();
console.clear();

let { count, matrizX } = contarMatriz(matrizV, A);
imprimirResultados(count, matrizX);
