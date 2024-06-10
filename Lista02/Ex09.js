const prompt= require('prompt-sync')()

function calculoSalarioSexo() {
    let condicao= true
    let salarioH= 0
    let salarioM= 0
    while(condicao) {
        let sexo= prompt("Qual o seu sexo?(responda H para Homem e M para mulher) ").toUpperCase()
        if(sexo != 'M' && sexo != 'H') {
            console.log("Por-favor, insira uma resposta válida")
            return calculoSalarioSexo()
        }
        let salario = parseFloat(prompt("Qual o seu salário? "))
        if(sexo === 'H') {
            salarioH += salario
        } else if(sexo === 'M') {
            salarioM += salario
        }
        let pesquisa= parseInt(prompt("Deseja continuar a pesquisa? (1-Sim | 2-Não) "))
        if(pesquisa === 1){
            condicao = true
        } else if(pesquisa === 2) {
            console.clear()
            console.log("O total de salário dos homens foi de R$ " + salarioH + " reais")
            console.log("O total de salário das mulheres foi de R$ " + salarioM + " reais")
            condicao = false
        }
    }
}

calculoSalarioSexo()