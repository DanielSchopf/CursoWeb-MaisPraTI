const prompt= require('prompt-sync')();

function formaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA + ladoB > ladoC || ladoB + ladoC > ladoA || ladoA + ladoC > ladoB) {
        if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            if(ladoA == ladoB && ladoB == ladoC) {
                console.log("As larguras fornecidas formam um triângulo equilátero")
            } else {
                console.log("As larguras fornecidas formam um triângulo isósceles")
            }
        } else if(ladoA != ladoB && ladoB != ladoC) {
            console.log("As larguras fornecidas formam um triângulo escaleno")
        }
    } else {
        console.log("As larguras fornecidas não foram um triângulo")
    }
}

let ladoA= parseInt(prompt("Digite a largura do lado A: "))
let ladoB= parseInt(prompt("Digite a largura do lado B: "))
let ladoC= parseInt(prompt("Digite a largura do lado C: "))
formaTriangulo(ladoA, ladoB, ladoC)