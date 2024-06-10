const prompt= require('prompt-sync')();

function compraMaca(numeroMacas) {
    if(numeroMacas < 12) {
        console.log("O valor total das maças é de R$ " + (numeroMacas*0.30).toFixed(2))
    } else {
        console.log("O valor total das maças é de R$ " + (numeroMacas*0.25).toFixed(2))
    }
}

let numMacas= parseInt(prompt("Digite o número total de maças que você deseja comprar: "))
compraMaca(numMacas)