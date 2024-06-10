const prompt = require('prompt-sync')();

function processarValores() {
    let pares = [];
    let impares = [];
    const maxTam = 5;

    for (let i = 0; i < 30; i++) {
        let valor = parseInt(prompt(`Digite o valor ${i + 1} de 30: `), 10);
        if (valor % 2 === 0) {
            pares.push(valor);
            if (pares.length === maxTam) {
                console.log('Vetor de Pares Cheio:', pares);
                pares = [];
            }
        } else {
            impares.push(valor);
            if (impares.length === maxTam) {
                console.log('Vetor de Ímpares Cheio:', impares);
                impares = [];
            }
        }
    }

    if (pares.length > 0) {
        console.log('Vetor de Pares Restante:', pares);
    }
    if (impares.length > 0) {
        console.log('Vetor de Ímpares Restante:', impares);
    }
}

processarValores();
