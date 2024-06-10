
function calcularINSS(salarioBruto) {
    let descontoINSS= salarioBruto * 0.12
    return descontoINSS
}

function imprimirContraCheque(matricula, nome, salarioBruto) {
    let deducaoINSS= calcularINSS(salarioBruto)
    let salarioLiquido= salarioBruto - deducaoINSS

    console.log("Matricula:"+matricula)
    console.log("Nome: "+nome)
    console.log("Salario Bruto: R$ "+salarioBruto)
    console.log("Dedução INSS: R$ "+deducaoINSS)
    console.log("Salário Líquido: R$ "+salarioLiquido+"\n")
}

const tabelaFuncionarios = [
    {matricula: 1, nome: "Enzo", salarioBruto: 2000},
    {matricula: 2, nome: "Rafaela", salarioBruto: 2500}
]

for(let i=0;i<tabelaFuncionarios.length;i++){
    let  funcionario = tabelaFuncionarios[i]
    imprimirContraCheque(funcionario.matricula, funcionario.nome, funcionario.salarioBruto)
}