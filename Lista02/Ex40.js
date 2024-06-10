const prompt = require('prompt-sync')();

function lerResultadosOficiais() {
    let resultadosOficiais = [];
    for (let i = 0; i < 5; i++) {
        resultadosOficiais[i] = parseInt(prompt(`Digite o ${i + 1}º número do resultado oficial da Loto: `));
    }
    return resultadosOficiais;
}

function lerAposta() {
    let aposta = [];
    for (let i = 0; i < 5; i++) {
        aposta[i] = parseInt(prompt(`Digite o ${i + 1}º número da aposta: `));
    }
    return aposta;
}

function verificarGanhador(resultadosOficiais, aposta) {
    for (let i = 0; i < 5; i++) {
        if (resultadosOficiais[i] !== aposta[i]) {
            return false;
        }
    }
    return true;
}

function verificarGanhadoresLoto() {
    const resultadosOficiais = lerResultadosOficiais();
    let ganhadorEncontrado = false;
    
    for (let i = 0; i < 50; i++) {
        console.log(`\nAposta ${i + 1}`);
        const aposta = lerAposta();
        
        if (verificarGanhador(resultadosOficiais, aposta)) {
            ganhadorEncontrado = true;
            console.log("Ganhador!");
            break;
        }
    }
    if (!ganhadorEncontrado) {
        console.log("Nenhum ganhador encontrado.");
    }
}

verificarGanhadoresLoto();
