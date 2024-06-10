const prompt= require('prompt-sync')()
function escolhaJ() {
        const escolha= prompt("Escolha PEDRA, PAPEL ou TESOURA: ").toUpperCase()
        if(escolha == 'PEDRA' || escolha == 'PAPEL' || escolha == "TESOURA") { 
            return escolha
        } else {
            console.log("Escolha digitada inválida!")
        }
}

function escolhaM() {
    const opcao = ['PEDRA', 'PAPEL', 'TESOURA']
    const escolhaPC= Math.floor(Math.random()*3)
    return opcao[escolhaPC]
}

function vencedor (jogador, maquina) {
    if(jogador === maquina) {
        return "Empate!"
    } else if ((jogador === 'PEDRA' && maquina === 'TESOURA') || (jogador === 'PAPEL' && maquina === 'PEDRA') ||(jogador === 'TESOURA' && maquina === 'PAPEL')) {
        return "Você ganhou!"
    } else {
        return "Você perdeu!"
    }
}

function jokenPo() {
    let escolhaJogador= escolhaJ()
    let escolhaMaquina = escolhaM()

    let resultado= vencedor(escolhaJogador, escolhaMaquina)
    console.log(resultado)
}

jokenPo()