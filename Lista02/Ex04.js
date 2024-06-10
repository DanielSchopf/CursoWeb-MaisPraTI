const prompt= require('prompt-sync')()

function formaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB) {
        console.log("As medidas fornecidas formam um triângulo.")
    } else {
        console.log("As medidas fornecidas não forma um triângulo.")
    }
}
let ladoA= parseInt(prompt("Digite a largura do lado A: "))
let ladoB= parseInt(prompt("Digite a largura do lado B: "))
let ladoC= parseInt(prompt("Digite a largura do lado C: "))
formaTriangulo(ladoA, ladoB, ladoC)