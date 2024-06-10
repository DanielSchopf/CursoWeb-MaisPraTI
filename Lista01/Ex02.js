const prompt= require('prompt-sync')();

function percentualVotos(numEleitores, numVotosValidos, numVotosBrancos, numVotosNulos) {
    let percentualValidos= (numVotosValidos/numEleitores)*100
    let percentualBrancos= (numVotosBrancos/numEleitores)*100
    let percentualNulos= (numVotosNulos/numEleitores)*100

    console.log("O percentual de votos válidos no município é de: " + percentualValidos.toFixed(2) + "%")
    console.log("O percentual de votos brancos no município é de: " + percentualBrancos.toFixed(2) + "%")
    console.log("O percentual de votos nulos no município é de: " + percentualNulos.toFixed(2) + "%")
}

let eleitores= parseInt(prompt("Digite o número de eleitores do município: "))
let votosValidos= parseInt(prompt("Digite o número de votos válidos do município: "))
let votosBrancos= parseInt(prompt("Digite o número de votos brancos do município: "))
let votosNulos= parseInt(prompt("Digite o número de votos nulos do município: "))
percentualVotos(eleitores, votosValidos, votosBrancos, votosNulos);