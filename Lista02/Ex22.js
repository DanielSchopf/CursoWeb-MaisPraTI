const prompt = require('prompt-sync')();

function estatisticasPopulacao(salarios, numFilhos) {
    let totalSalario = 0;
    let totalFilho = 0;
    let salario350 = 0;
    let maiorSalario;

    for (let i = 0; i < salarios.length; i++) {
        totalSalario += salarios[i];
        totalFilho += numFilhos[i];

        if (i === 0) {
            maiorSalario = salarios[i];
        } else if (salarios[i] > maiorSalario) {
            maiorSalario = salarios[i];
        }

        if (salarios[i] <= 350) {
            salario350++;
        }
    }

    let mediaSalario = totalSalario / salarios.length;
    let mediaFilhos = totalFilho / numFilhos.length;
    let percentual350 = (salario350 / salarios.length) * 100;

    return { mediaSalario, mediaFilhos, percentual350, maiorSalario}

}

let salarios = [];
let numFilhos = [];

let pessoas = parseInt(prompt("Digite o número de pessoas que participarão da pesquisa: "));
for (let i = 0; i < pessoas; i++) {
    let salario = parseFloat(prompt("Digite o seu salário: "));
    let filhos = parseInt(prompt("Digite quantos filhos você tem: "));
    salarios.push(salario);
    numFilhos.push(filhos);
    console.clear();
}

let pesquisa = estatisticasPopulacao(salarios, numFilhos);
console.log("Maior salário: R$ " + pesquisa.maiorSalario.toFixed(2));
console.log("Média de salário: R$ " + pesquisa.mediaSalario.toFixed(2));
console.log("Média do número de filhos: " + pesquisa.mediaFilhos.toFixed(2));
console.log("Percentual de pessoas com salário de até R$ 350: " + pesquisa.percentual350.toFixed(2) + "%");
