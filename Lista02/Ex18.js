const prompt= require('prompt-sync')()

function funcionario(nome, cargo, salario) {
    this.nome= nome
    this.cargo= cargo
    this.salario= salario
}

function funcionarioDados(func) {
    return  "Nome: "+ func.nome+"\nCargo: "+func.cargo+"\nSalário: R$ "+func.salario
}
function criarFuncionario() {
    let nome= prompt("Digite o nome do funcionário: ")
    let cargo= prompt("Digite o cargo do funcionário: ")
    let salario= parseFloat(prompt("Digite o salário do funcionário: "))
    console.clear()

    const novoFuncionario= new funcionario(nome, cargo, salario)
    console.log(funcionarioDados(novoFuncionario))
}

criarFuncionario()

