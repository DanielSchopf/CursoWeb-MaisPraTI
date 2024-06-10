const prompt= require('prompt-sync')()

function aluguelCarros(carro, dias, distancia) {
    const precoCarro = carro === 'popular' ? 90 : 150
    const precoDistancia = carro === 'popular' ? (distancia <= 100 ? 0.20 : 0.10) : (distancia <= 200 ? 0.30 : 0.25)
    const precoTotal = precoCarro*dias + distancia*precoDistancia
    console.log("O valor total a ser pago é de R$ " + precoTotal + " reais")
}

let tipoCarro = prompt("Qual tipo de carro foi alugado(popular ou luxo)? ").toLowerCase()
let diasAlugados = parseInt(prompt("Quantos dias o carro ficou alugado? "))
let distanciaPercorrida= parseFloat(prompt("Qual foi a distância(km) percorrida? "))

aluguelCarros(tipoCarro, diasAlugados, distanciaPercorrida)