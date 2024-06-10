const prompt = require('prompt-sync')();

function lerGabarito() {
    let gabarito = [];
    for (let i = 0; i < 13; i++) {
        gabarito[i] = parseInt(prompt(`Digite o valor do gabarito para a posição ${i + 1}: `), 10);
    }
    return gabarito;
}

function lerRespostas() {
    let respostas = [];
    for (let i = 0; i < 13; i++) {
        respostas[i] = parseInt(prompt(`Digite a resposta para a posição ${i + 1}: `), 10);
    }
    return respostas;
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

function processarApostadores() {
    const gabarito = lerGabarito();
    for (let i = 0; i < 100; i++) {
        console.log(`\nApostador ${i + 1}`);
        const numeroCartao = prompt(`Digite o número do cartão do apostador ${i + 1}: `);
        const respostas = lerRespostas();
        const acertos = contarAcertos(gabarito, respostas);
        console.log(`Apostador ${numeroCartao} teve ${acertos} acertos.`);
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    }
}

processarApostadores();
