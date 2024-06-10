const prompt = require('prompt-sync')();

function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 100; i++) {
        vetor[i] = parseFloat(prompt(`Digite o valor para a posição ${i + 1}: `));
    }
    return vetor;
}

function compactarVetor(vetor) {
    let vetorCompactado = [];
    let j = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 0) {
            vetorCompactado[j] = vetor[i];
            j++;
        }
    }
    return vetorCompactado;
}

function mostrarVetor(vetor, mensagem) {
    console.log(mensagem, vetor.join(", "));
}

function compactarVetorPrincipal() {
    const vetorA = lerVetor();
    const vetorB = compactarVetor(vetorA);
    mostrarVetor(vetorB, "Vetor Compactado (B):");
}

compactarVetorPrincipal();
