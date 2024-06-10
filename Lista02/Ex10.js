const prompt= require('prompt-sync')()

function calculoNum () {
    let condicao = true
    let soma= 0
    let i = 0
    let media = 0
    let numPar = 0
    let numeros= []
    let numMenor= 0

    do {
    let num= parseInt(prompt("Digite um número interio: "))
    numeros.push(num)

    if(i === 0) {
        numMenor = num
    } else if(num < numMenor) {
        numMenor = num
    }

    soma += num

    if(num % 2 === 0) {
        numPar++
    }
    i++

    let pesquisa = parseInt(prompt("Deseja continuar a pesquisa? (1-Sim | 2-Não) "))
    if(pesquisa === 1) {
        condicao= true
    } else if(pesquisa === 2) {
        condicao = false
    }
    }while(condicao)

    media = soma / i
    console.clear()

    console.log("Soma dos números: ", soma);
    console.log("Menor número: ", numMenor);
    console.log("Média de todos os valores: ", media);
    console.log("Quantidade de números pares: ", numPar);
        
}

calculoNum()