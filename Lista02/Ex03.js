const prompt= require('prompt-sync')()

function valorViagem(distancia) {
    let valor = 0
    if(distancia<=200){
        valor = 0.50*distancia
    } else {
        valor = 0.45*distancia
    }
    console.log("O valor da sua viagem será de " + valor.toFixed(2) + " reais.")
}

let distancia = parseFloat(prompt("Que distância você deseja percorrer? "))

valorViagem(distancia)