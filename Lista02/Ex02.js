const prompt= require('prompt-sync')()

function velocidadeCarro (velocidade) {
    if(velocidade > 80) {
        let valorMulta = 5*(velocidade-80)
        console.log("Você foi multado no valor de " + valorMulta + " reais.")
    } else {
        console.log("Veículo dentro do limite de velocidade.")
    }
}

let velocidade= parseFloat(prompt("Digite a velocidade em que o seu veículo está: "))
velocidadeCarro(velocidade)