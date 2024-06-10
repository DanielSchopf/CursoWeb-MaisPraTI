const prompt = require('prompt-sync')();

function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 6; i++) {
        vetor[i] = parseFloat(prompt(`Digite o valor para a posição ${i + 1}: `));
    }
    return vetor;
}

function somaElementos(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

function produtoElementos(vetor) {
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
        produto *= vetor[i];
    }
    return produto;
}

function mediaElementos(vetor) {
    return somaElementos(vetor) / vetor.length;
}

function ordenarElementos(vetor) {
    return vetor.sort((a, b) => a - b);
}

function mostrarVetor(vetor) {
    console.log("Vetor:", vetor.join(", "));
}

function calcularOperacao() {
    const vetor = lerVetor();
    const operacao = parseInt(prompt("Digite a operação desejada (1-soma, 2-produto, 3-média, 4-ordenação crescente, 5-mostrar vetor): "));
    
    switch (operacao) {
        case 1:
            console.log("Soma dos elementos:", somaElementos(vetor));
            break;
        case 2:
            console.log("Produto dos elementos:", produtoElementos(vetor));
            break;
        case 3:
            console.log("Média dos elementos:", mediaElementos(vetor));
            break;
        case 4:
            console.log("Vetor ordenado:", ordenarElementos(vetor));
            break;
        case 5:
            mostrarVetor(vetor);
            break;
        default:
            console.log("Operação inválida.");
    }
}

calcularOperacao();
