const prompt = require('prompt-sync')();

function lerGabarito() {
    let gabarito = [];
    for (let i = 0; i < 20; i++) {
        gabarito[i] = prompt(`Digite o valor do gabarito para a posição ${i + 1}: `);
    }
    return gabarito;
}

function lerRespostas() {
    let respostas = [];
    for (let i = 0; i < 20; i++) {
        respostas[i] = prompt(`Digite a resposta para a posição ${i + 1}: `);
    }
    return respostas;
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

function processarAlunos() {
    const gabarito = lerGabarito();
    for (let i = 0; i < 50; i++) {
        console.log(`\nAluno ${i + 1}`);
        const respostas = lerRespostas();
        const acertos = contarAcertos(gabarito, respostas);
        console.log(`Aluno ${i + 1} teve ${acertos} acertos.`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

processarAlunos();
