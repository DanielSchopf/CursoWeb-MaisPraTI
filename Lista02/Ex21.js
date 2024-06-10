const prompt= require('prompt-sync')()

function calculaPesoIdeal(altura, sexo) {
    let pesoIdeal
    if(sexo === 'M') {
        pesoIdeal = (72.7 * altura) - 58
    } else if(sexo === 'F') {
        pesoIdeal = (62.1 * altura) - 44.7
    }
    return pesoIdeal
}

let altura= parseFloat(prompt("Digite a sua altura em metros: "))
let sexo= prompt("Digite o seu sexo(M - Masculino | F - Feminino): ").toUpperCase()

console.log("O peso ideal, baseado nos dados informados, é de: "+calculaPesoIdeal(altura, sexo).toFixed(2)+" Kg")
